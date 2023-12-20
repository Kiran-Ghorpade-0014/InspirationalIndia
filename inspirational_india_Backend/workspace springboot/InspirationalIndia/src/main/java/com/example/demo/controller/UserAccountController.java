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

import com.example.demo.model.UserAccount;
import com.example.demo.service.UserAccountService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/v1/user")
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
	
	@PostMapping("admin/authentication")
	private ResponseEntity<String> authenticateAdmin(@RequestBody String password) {
		return userService.authenticateAdmin(password);
	}
	
	@PostMapping("/authentication")
	private ResponseEntity<UserAccount> authenticateUser(@RequestBody UserAccount user) {
		return userService.authenticateUser(user);
	}
	
	@PostMapping("/add")
	private ResponseEntity<String> add(@RequestBody UserAccount user){
		userService.saveUser(user);
		return new ResponseEntity<>("User Added", HttpStatus.CREATED);
	}
}
