package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Region;

public interface RegionService {

	List<Region> getAllRegions();

	Optional<Region> getRegion(int region_id);

	Region saveRegion(Region newRegion);

}
