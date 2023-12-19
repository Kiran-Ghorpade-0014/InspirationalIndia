package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.example.demo.model.UserAccount;

public interface UserAccountService {

	public UserAccount saveUser(UserAccount user);
	public List<UserAccount> getAllUser();
	public Optional<UserAccount> getUser(int user_id);
	public ResponseEntity<UserAccount> authenticateUser(UserAccount user);
	public ResponseEntity<String> authenticateAdmin(String password);
}
