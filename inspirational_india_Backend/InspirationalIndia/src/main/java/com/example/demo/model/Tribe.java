package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Tribe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tribe_id;
	private String tribe_name;
	private String description;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private Region region_id;
	
	
	public int getTribe_id() {
		return tribe_id;
	}
	public void setTribe_id(int tribe_id) {
		this.tribe_id = tribe_id;
	}
	public String getTribe_name() {
		return tribe_name;
	}
	public void setTribe_name(String tribe_name) {
		this.tribe_name = tribe_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Region getRegion_id() {
		return region_id;
	}
	public void setRegion_id(Region region_id) {
		this.region_id = region_id;
	}
	
}
