package com.example.demo.controller;

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

import com.example.demo.model.LikeDetails;
import com.example.demo.service.LikeDetailsService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/Like/")
public class LikeController {

	@Autowired
	private LikeDetailsService detailsService;
	
//
//	@GetMapping("/")
//	private List<Comment> getBlogNameList(){
////		return blogService.getAllUser();
//		return null;
//		}
	
	@GetMapping("/getTotalLikes/{blog_id}")
	private int getTotalLikes(@PathVariable("blog_id") int  blog_id) {
		return detailsService.getTotalLikes(blog_id);
	}
	
	@PostMapping("/add")
	public ResponseEntity<String> addTribe(@RequestParam("blog") int blog_id, @RequestParam("user") int user_id)
	{

		try {
			// Save other details in the database
			detailsService.saveLikeDetails(blog_id, user_id);

			// Return the appropriate response
			return new ResponseEntity<>("Blog added successfully", HttpStatus.OK);
		} catch (Exception e) {
			// Handle exceptions
			e.printStackTrace();
			return new ResponseEntity<>("Error adding blog", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/isLiked/{blog_id}/{user_id}")
	private ResponseEntity<LikeDetails> authenticateLikeDetails(@PathVariable("blog_id") int blog_id,
					@PathVariable("user_id") int user_id) {
//		System.out.println(blog_id+" "+user_id);
		return detailsService.authenticateLike(blog_id, user_id);
	}
}
