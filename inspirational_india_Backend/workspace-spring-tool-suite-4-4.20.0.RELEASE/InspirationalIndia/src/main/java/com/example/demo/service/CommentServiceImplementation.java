package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Blog;
import com.example.demo.model.Comment;
import com.example.demo.model.UserAccount;
import com.example.demo.repository.BlogRepository;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.UserAccountRepository;

@Service
public class CommentServiceImplementation implements CommentService{

	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserAccountRepository accountRepository;

	@Autowired
	BlogRepository blogRepository;
	
	@Override
	public void saveComment(int blog_id, int user_id, String comment_text) {
		// TODO Auto-generated method stub
		Comment newComment = new Comment();

		UserAccount userAccount = accountRepository.findById(user_id).orElse(null);
		Blog blog = blogRepository.findById(blog_id).orElse(null);

		newComment.setComment_datetime(LocalDateTime.now());
		newComment.setUser_id(userAccount);
		newComment.setBlog(blog);
		newComment.setComment_text(comment_text);
		commentRepository.save(newComment);
	}

	@Override
	public ResponseEntity<List<Comment>> getCommentsByBlogId(int blog_id) {

		 Optional<Blog> blog = blogRepository.findById(blog_id);

	        if (blog.isPresent()) {
	            List<Comment> comments = commentRepository.findByBlog(blog.orElse(null));
	            return ResponseEntity.ok(comments);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	}

	@Override
	public List<UserComment> getAllComments() {
		
		List<Comment> comments = commentRepository.findAll();
		List<UserComment> result = new ArrayList<UserComment>();
		for (Comment comment : comments) {
			result.add(new UserComment(comment.getComment_id(),comment.getComment_text(),comment.getUser_id(),comment.getComment_datetime()));
		}
		
		return result;
	}
}
