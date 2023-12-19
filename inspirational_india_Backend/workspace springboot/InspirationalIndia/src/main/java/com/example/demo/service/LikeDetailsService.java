package com.example.demo.service;

import org.springframework.http.ResponseEntity;
import com.example.demo.model.LikeDetails;


public interface LikeDetailsService {

	ResponseEntity<LikeDetails> authenticateLike(int blog_id, int user_id);

	void saveLikeDetails(int blog_id, int user_id);

	int getTotalLikes(int blog_id);

}
