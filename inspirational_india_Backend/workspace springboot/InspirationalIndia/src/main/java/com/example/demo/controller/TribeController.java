package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Tribe;
import com.example.demo.service.TribeService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/tribe")
public class TribeController {

	@Autowired
	private TribeService tribeService;

	@GetMapping("/allTribes")
	private List<Tribe> getTribeList() {
		return tribeService.getAllTribes();
	}

	@GetMapping("/getTribeByRegion/{region}")
	private ResponseEntity<List<Tribe>> getTribeByRegion(@PathVariable("region") int region_id) {
		return  tribeService.getTribeByRegion(region_id);
	}

	@PostMapping("/add")
	public ResponseEntity<String> addTribe(@RequestParam("name") String name, @RequestParam("region") int region,
			@RequestParam("description") String description) {

		try {
			// Save other details in the database
			tribeService.saveTribe(name, region, description);

			// Return the appropriate response
			return new ResponseEntity<>("Blog added successfully", HttpStatus.OK);
		} catch (Exception e) {
			// Handle exceptions
			e.printStackTrace();
			return new ResponseEntity<>("Error adding blog", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
