package com.example.demo.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class LikeDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int like_id;
	@CreatedDate
	private LocalDateTime time;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
	private UserAccount user_id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "blog_id")
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
