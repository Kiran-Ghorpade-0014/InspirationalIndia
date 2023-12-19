package com.example.demo.service;

import java.time.LocalDateTime;

import com.example.demo.model.UserAccount;

public class UserComment {

	private int comment_id;
	private String comment_text;
	private UserAccount user_id;
	private LocalDateTime comment_datetime;
	
	
	public UserComment(int id, String comment, UserAccount user_id, LocalDateTime time) {
		super();
		this.comment_id = id;
		this.comment_text=comment;
		this.user_id = user_id;
		this.comment_datetime = time;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}
	
	public LocalDateTime getComment_datetime() {
		return comment_datetime;
	}

	public void setComment_datetime(LocalDateTime comment_datetime) {
		this.comment_datetime = comment_datetime;
	}

	public String getComment_text() {
		return comment_text;
	}

	public void setComment_text(String comment_text) {
		this.comment_text = comment_text;
	}

	public UserAccount getUser_id() {
		return user_id;
	}

	public void setUser_id(UserAccount user_id) {
		this.user_id = user_id;
	}

}
