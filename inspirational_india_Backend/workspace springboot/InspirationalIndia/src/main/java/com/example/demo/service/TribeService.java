package com.example.demo.service;

import java.util.List;
import org.springframework.http.ResponseEntity;
import com.example.demo.model.Tribe;

public interface TribeService {


	List<Tribe> getAllTribes();

	ResponseEntity<List<Tribe>> getTribeByRegion(int region_id);

	void saveTribe(String name, int region, String description);
}
