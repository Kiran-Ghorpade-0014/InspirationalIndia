package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Region;
import com.example.demo.repository.RegionRepository;

@Service
public class RegionServiceImplementation implements RegionService{

	@Autowired
	private RegionRepository regionRepository ;
	
	@Override
	public List<Region> getAllRegions() {
		return regionRepository.findAll();
	}

	@Override
	public Optional<Region> getRegion(int region_id) {
		// TODO Auto-generated method stub
		return regionRepository.findById(region_id);
	}

	@Override
	public Region saveRegion(Region newRegion) {
		// TODO Auto-generated method stub
		return regionRepository.save(newRegion);
	}

}
