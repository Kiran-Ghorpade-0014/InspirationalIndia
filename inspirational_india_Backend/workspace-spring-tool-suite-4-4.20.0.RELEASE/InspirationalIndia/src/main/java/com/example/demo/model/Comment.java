package com.example.demo.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int comment_id;
	@Column(columnDefinition = "TEXT")
	private String comment_text;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
	private UserAccount user_id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "blog_id")
	private Blog blog;
	@CreatedDate
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

	public Blog getBlog() {
		return blog;
	}

	public void setBlog(Blog blog_id) {
		this.blog = blog_id;
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
