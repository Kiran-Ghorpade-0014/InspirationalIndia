package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Region;
import com.example.demo.model.Tribe;
import com.example.demo.repository.RegionRepository;
import com.example.demo.repository.TribeRepository;

@Service
public class TribeServiceImplementation implements TribeService {

	@Autowired
	private TribeRepository tribeRepository;
	@Autowired
	private RegionRepository regionRepository;
	
	@Override
	public List<Tribe> getAllTribes() {
		// TODO Auto-generated method stub
		return tribeRepository.findAll();
	}

	@Override
	public ResponseEntity<List<Tribe>> getTribeByRegion(int region_id) {
		  Optional<Region> region = regionRepository.findById(region_id);

	        if (region.isPresent()) {
	            List<Tribe> tribes = tribeRepository.findByRegion(region);
	            return ResponseEntity.ok(tribes);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	}


	@Override
	public void saveTribe(String name, int region, String description) {
		// TODO Auto-generated method stub
		Tribe tribe = new Tribe();
		tribe.setName(name);
		tribe.setRegion_id(regionRepository.findById(region).orElse(null));
		tribe.setDescription(description);
		
		tribeRepository.save(tribe);
		
	}

}
