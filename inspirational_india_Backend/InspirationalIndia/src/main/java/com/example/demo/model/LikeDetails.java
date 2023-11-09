package com.example.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class LikeDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int like_id;
	private LocalDateTime time;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private UserAccount user_id;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private Blog blog_id;
	
	
	
	public LikeDetails() {
		super();
	}
	public int getLike_id() {
		return like_id;
	}
	public void setLike_id(int like_id) {
		this.like_id = like_id;
	}
	public UserAccount getUser_id() {
		return user_id;
	}
	public void setUser_id(UserAccount user_id) {
		this.user_id = user_id;
	}
	public Blog getBlog_id() {
		return blog_id;
	}
	public void setBlog_id(Blog blog_id) {
		this.blog_id = blog_id;
	}
	public LocalDateTime getTime() {
		return time;
	}
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	
}
