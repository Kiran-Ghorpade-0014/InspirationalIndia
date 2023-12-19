package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import com.example.demo.model.Blog;

public interface BlogService {

	List<Blog> getAllBlogs();

	Optional<Blog> getBlog(int blog_id);

	ResponseEntity<List<Blog>> getBlogByRegion(int region);

	void saveBlog(String name, int region, int tribe, String description, byte[] imageBytes);

	ResponseEntity<List<Blog>> getBlogByTribe(int tribe);

//	List<Blog> getTopBlogs();


}