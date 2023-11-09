package com.example.demo.model;

import java.time.LocalDateTime;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int comment_id;
	private int comment_text;
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
	private LocalDateTime comment_datetime;
	
	
	public Comment() {
		super();
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	public UserAccount getUser() {
		return user_id;
	}

	public void setUser(UserAccount user) {
		this.user_id = user;
	}

	public Blog getBlog_id() {
		return blog_id;
	}

	public void setBlog_id(Blog blog_id) {
		this.blog_id = blog_id;
	}

	public LocalDateTime getComment_datetime() {
		return comment_datetime;
	}

	public void setComment_datetime(LocalDateTime comment_datetime) {
		this.comment_datetime = comment_datetime;
	}

	public int getComment_text() {
		return comment_text;
	}

	public void setComment_text(int comment_text) {
		this.comment_text = comment_text;
	}

	public UserAccount getUser_id() {
		return user_id;
	}

	public void setUser_id(UserAccount user_id) {
		this.user_id = user_id;
	}
	
	
}
