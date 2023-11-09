package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer>{

}
