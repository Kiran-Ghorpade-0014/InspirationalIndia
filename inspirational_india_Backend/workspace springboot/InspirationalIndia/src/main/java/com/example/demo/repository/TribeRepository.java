package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Region;
import com.example.demo.model.Tribe;

@Repository
public interface TribeRepository extends JpaRepository<Tribe, Integer>{

	List<Tribe> findByRegion(Optional<Region> region);
}
