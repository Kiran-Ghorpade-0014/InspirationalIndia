package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Blog;
import com.example.demo.model.Region;
import com.example.demo.model.Tribe;
import com.example.demo.repository.BlogRepository;
import com.example.demo.repository.RegionRepository;
import com.example.demo.repository.TribeRepository;

@Service
public class BlogServiceImplementation implements BlogService{

	@Autowired
	public BlogRepository blogRepository;
	
	@Autowired
	public RegionRepository regionRepository;
	
	@Autowired
	public TribeRepository tribeRepository;
	
	@Autowired
	public LikeDetailsService likeDetailsService;
	
	@Override
	public Optional<Blog> getBlog(int blog_id) {
		// TODO Auto-generated method stub
		return  blogRepository.findById(blog_id);
	}

	@Override
	public void saveBlog(String name, int region, int tribe, String description, byte[] image) {
        // Perform any additional logic if needed
        Blog blog = new Blog();
        blog.setName(name);
        blog.setRegion(regionRepository.findById(region).orElse(null));
        blog.setTribe(tribeRepository.findById(tribe).orElse(null));
        blog.setDescription(description);
        blog.setImage(image);
        System.out.println("this is time "+LocalDateTime.now().toString());
        blog.setUpload_dateTime(LocalDateTime.now());

        blogRepository.save(blog);
    }

	@Override
	public List<Blog> getAllBlogs() {
		// TODO Auto-generated method stub
		return blogRepository.findAll();
	}

	@Override
	public ResponseEntity<List<Blog>> getBlogByRegion(int region_id) {
		// TODO Auto-generated method stub
		  Optional<Region> region = regionRepository.findById(region_id);

	        if (region.isPresent()) {
	            List<Blog> Blogs = blogRepository.findByRegion(region);
	            return ResponseEntity.ok(Blogs);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	}

	@Override
	public ResponseEntity<List<Blog>> getBlogByTribe(int tribe_id) {
		  Optional<Tribe> tribe = tribeRepository.findById(tribe_id);

	        if (tribe.isPresent()) {
	            List<Blog> Blogs = blogRepository.findByTribe(tribe);
	            return ResponseEntity.ok(Blogs);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	}

}
