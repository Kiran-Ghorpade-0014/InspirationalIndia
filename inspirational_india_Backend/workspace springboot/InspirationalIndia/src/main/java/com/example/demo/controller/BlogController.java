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
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Blog;
import com.example.demo.service.BlogService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/blog/")
public class BlogController {

	@Autowired
	private BlogService blogService;

	@GetMapping("/allBlogs")
	private List<Blog> getBlogNameList() {
		return blogService.getAllBlogs();
	}

//	@GetMapping("/topBlogs")
//	private List<Blog> getTopBlogs(){
//		return blogService.getTopBlogs();
//	}
	
	@GetMapping("/getBlog/{blog_id}")
	public ResponseEntity<Blog> getBlog(@PathVariable("blog_id") int blogId) {
		Blog blog = blogService.getBlog(blogId).orElse(null);

		if (blog != null) {
			return ResponseEntity.ok(blog);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/getBlogByRegion/{region}")
	private ResponseEntity<List<Blog>> getBlogByRegion(@PathVariable("region") int region) {
		return blogService.getBlogByRegion(region);
	}

	@GetMapping("/getBlogByTribe/{tribe}")
	private ResponseEntity<List<Blog>> getBlogByTribe(@PathVariable("tribe") int tribe) {
		return blogService.getBlogByTribe(tribe);
	}

	@PostMapping("/add")
	public ResponseEntity<String> addBlog(
			@RequestParam("name") String name, 
			@RequestParam("region") int region,
			@RequestParam("tribe") int tribe, 
			@RequestParam("description") String description,
			@RequestParam("image") MultipartFile image) {

		try {
			// Handle image processing
			byte[] imageBytes = image.getBytes();

			// Save other details in the database
			blogService.saveBlog(name, region, tribe, description, imageBytes);

			// Return the appropriate response
			return new ResponseEntity<>("Blog added successfully", HttpStatus.OK);
		} catch (Exception e) {
			// Handle exceptions
			e.printStackTrace();
			return new ResponseEntity<>("Error adding blog", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
