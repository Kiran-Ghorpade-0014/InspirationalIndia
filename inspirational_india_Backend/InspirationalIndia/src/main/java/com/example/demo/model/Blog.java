package com.example.demo.model;

import java.sql.Blob;
import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;


@Entity
public class Blog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int content_id;
	private String content_title;
	private String Description;
	private LocalDateTime upload_dateTime;
	private Blob image;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private Region region_id;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private Tribe tribe_id;
	
	
	
	public int getContent_id() {
		return content_id;
	}
	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}
	public String getContent_title() {
		return content_title;
	}
	public void setContent_title(String content_title) {
		this.content_title = content_title;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}

	public LocalDateTime getUpload_dateTime() {
		return upload_dateTime;
	}
	public void setUpload_dateTime(LocalDateTime upload_dateTime) {
		this.upload_dateTime = upload_dateTime;
	}
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}
	public Region getRegion_id() {
		return region_id;
	}
	public void setRegion_id(Region region_id) {
		this.region_id = region_id;
	}
	public Tribe getTribe_id() {
		return tribe_id;
	}
	public void setTribe_id(Tribe tribe_id) {
		this.tribe_id = tribe_id;
	}
}
