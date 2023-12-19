package com.example.demo.service;

import java.util.List;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.Comment;

public interface CommentService {

	void saveComment(int blog_id, int user_id, String comment_text);

	ResponseEntity<List<Comment>> getCommentsByBlogId(int blog_id);

	List<UserComment> getAllComments();
}
