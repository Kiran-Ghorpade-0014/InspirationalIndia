package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Blog;
import com.example.demo.model.LikeDetails;
import com.example.demo.model.UserAccount;
import com.example.demo.repository.BlogRepository;
import com.example.demo.repository.LikeDetailsRepository;
import com.example.demo.repository.UserAccountRepository;

@Service
public class LikeDetailsServiceImplementation implements LikeDetailsService {

	@Autowired
	LikeDetailsRepository detailsRepository;

	@Autowired
	UserAccountRepository accountRepository;

	@Autowired
	BlogRepository blogRepository;

	private UserAccount userAccount;
	private Blog blog;

	@Override
	public ResponseEntity<LikeDetails> authenticateLike(int blog_id, int user_id) {

		if (blog_id == 0 || user_id == 0) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		List<LikeDetails> likdetailsList = detailsRepository.findAll();

		userAccount = accountRepository.findById(user_id).orElse(null);
		blog = blogRepository.findById(blog_id).orElse(null);

		for (LikeDetails likeDetails : likdetailsList) {
			if (likeDetails.getUser_id().equals(userAccount) && likeDetails.getBlog_id().equals(blog))
				return new ResponseEntity<>(likeDetails, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@Override
	public void saveLikeDetails(int blog_id, int user_id) {
		// TODO Auto-generated method stub
		LikeDetails likeDetails = new LikeDetails();

		userAccount = accountRepository.findById(user_id).orElse(null);
		blog = blogRepository.findById(blog_id).orElse(null);

		likeDetails.setTime(LocalDateTime.now());
		likeDetails.setUser_id(userAccount);
		likeDetails.setBlog_id(blog);
		detailsRepository.save(likeDetails);
	}

	@Override
	public int getTotalLikes(int blog_id) {
		// TODO Auto-generated method stub
		int totalCount=0;
		
		blog = blogRepository.findById(blog_id).orElse(null);
		List<LikeDetails> likdetailsList = detailsRepository.findAll();

		for (LikeDetails likeDetails : likdetailsList) {
			if (likeDetails.getBlog_id().equals(blog)){
				totalCount++;
			}
		}
//		System.out.println("Total Likes :" + totalCount);
		return totalCount;
	}
}
