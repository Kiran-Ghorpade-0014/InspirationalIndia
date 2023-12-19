package com.example.demo.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Blog;
import com.example.demo.model.Region;
import com.example.demo.model.Tribe;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer>{

	List<Blog> findByRegion(Optional<Region> region);

	List<Blog> findByTribe(Optional<Tribe> tribe);
	

}
