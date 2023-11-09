package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserAccount;
import com.example.demo.service.UserAccountService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserAccountController {

	@Autowired
	private UserAccountService userService;
	
	@GetMapping("/allUsers")
	private List<UserAccount> getAllUsers(){
		return userService.getAllUser();
		}
	
	@GetMapping("/{user_id}")
	private Optional<UserAccount> getUser(@PathVariable("user_id") int user_id) {
		return userService.getUser(user_id);
	}
	
	@PostMapping("/add")
	private String add(@RequestBody UserAccount user){
		userService.saveUser(user);
		return "User Added";
	}
}
