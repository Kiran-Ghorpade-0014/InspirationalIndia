package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Comment;
import com.example.demo.service.CommentService;
import com.example.demo.service.UserComment;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/comment/")
public class CommentController { 

	@Autowired
	private  CommentService commentService;
	
	@GetMapping("/allComments")
	private List<UserComment> getAllComments(){
		return commentService.getAllComments();
		}
	
	@GetMapping("/{blog_id}")
	private ResponseEntity<List<Comment>> getCommentsByBlogId(@PathVariable("blog_id") int  blog_id) {
		if (blog_id == 0) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		return commentService.getCommentsByBlogId(blog_id);
	}
	
	@PostMapping("/add")
	private ResponseEntity<String> addComment(
			@RequestParam("user_id") int user,
			@RequestParam("blog_id") int blog, 
			@RequestParam("comment_text") String comment_text 
		){
		
		commentService.saveComment(blog, user, comment_text);
		return new ResponseEntity<>("Comment Added",HttpStatus.CREATED);
	}
}
