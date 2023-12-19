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
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;


@Entity
public class Blog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int blog_id;
	private String name;
	@Column(columnDefinition = "TEXT")
	private String Description;
	@CreatedDate
	private LocalDateTime upload_dateTime;
	@Lob
	@Column(name = "image", columnDefinition = "LONGBLOB")
	private byte[] image;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id")
    private Region region;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tribe_id")
    private Tribe tribe;
	
	
	
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}

	public LocalDateTime getUpload_dateTime() {
		return upload_dateTime;
	}
	public void setUpload_dateTime(LocalDateTime localDateTime) {
		this.upload_dateTime = localDateTime;
	}

	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public int getBlog_id() {
		return blog_id;
	}
	public void setBlog_id(int blog_id) {
		this.blog_id = blog_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Region getRegion() {
		return region;
	}
	public void setRegion(Region region) {
		this.region = region;
	}
	public Tribe getTribe() {
		return tribe;
	}
	public void setTribe(Tribe tribe) {
		this.tribe = tribe;
	}

}
