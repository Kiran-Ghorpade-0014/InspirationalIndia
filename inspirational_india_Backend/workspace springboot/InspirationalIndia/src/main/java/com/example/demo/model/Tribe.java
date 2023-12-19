package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Tribe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tribe_id;
	private String name;
	@Column(columnDefinition = "TEXT")
	private String description;
	@ManyToOne
	@JoinColumn(name = "region_id")
	private Region region;


	
	public int getTribe_id() {
		return tribe_id;
	}
	public void setTribe_id(int tribe_id) {
		this.tribe_id = tribe_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Region getRegion_id() {
		return region;
	}
	public void setRegion_id(Region region_id) {
		this.region = region_id;
	}
	
}
