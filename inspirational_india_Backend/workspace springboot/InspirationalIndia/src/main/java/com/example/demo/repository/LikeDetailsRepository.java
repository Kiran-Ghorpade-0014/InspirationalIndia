package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LikeDetails;

@Repository
public interface LikeDetailsRepository extends JpaRepository<LikeDetails, Integer>{

}
