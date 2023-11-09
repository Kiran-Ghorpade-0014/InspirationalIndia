package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Region {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int region_id;
	private String region_name;
	@OneToOne(
			cascade = CascadeType.ALL,
			orphanRemoval = true
			)
	private Region superregion_id;
	
	
	public int getRegion_id() {
		return region_id;
	}
	public void setRegion_id(int region_id) {
		this.region_id = region_id;
	}
	public String getRegion_name() {
		return region_name;
	}
	public void setRegion_name(String region_name) {
		this.region_name = region_name;
	}
	public Region getSuperregion_id() {
		return superregion_id;
	}
	public void setSuperregion_id(Region superregion_id) {
		this.superregion_id = superregion_id;
	}
}
