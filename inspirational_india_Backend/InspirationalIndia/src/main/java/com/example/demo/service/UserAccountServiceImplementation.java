package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.UserAccount;
import com.example.demo.repository.UserAccountRepository;

@Service
public class UserAccountServiceImplementation implements UserAccountService{

	@Autowired
	private UserAccountRepository userRepository;
	
	@Override
	public UserAccount saveUser(UserAccount user) {
		return userRepository.save(user);
	}

	@Override
	public List<UserAccount> getAllUser() {
		return userRepository.findAll();
		}

	@Override
	public Optional<UserAccount> getUser(int user_id) {
		return userRepository.findById(user_id);
	}
}
