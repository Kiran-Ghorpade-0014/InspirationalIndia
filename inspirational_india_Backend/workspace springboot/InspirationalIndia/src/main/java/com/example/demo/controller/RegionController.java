package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Region;
import com.example.demo.service.RegionService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/region/")
public class RegionController {
	@Autowired
	private  RegionService regionService;
	
	@GetMapping("/allRegions")
	private List<Region> getRegionList(){
		return regionService.getAllRegions();
		}
	
	@GetMapping("/getRegion/{region_id}")
	private Optional<Region> getRegion(@PathVariable("region_id") int  region_id) {
		return regionService.getRegion(region_id);
	}
	
	@PostMapping("/add")
	private ResponseEntity<String> addRegion(@RequestBody Region newRegion){
		regionService.saveRegion(newRegion);
		return new ResponseEntity<>("Region Added", HttpStatus.CREATED);
	}
	
}
