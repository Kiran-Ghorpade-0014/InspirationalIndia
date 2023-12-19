package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	@Override
	public ResponseEntity<UserAccount> authenticateUser(UserAccount user) {
		
		List<UserAccount> usersList = userRepository.findByusername(user.getUsername());
//		System.out.println(user.getUsername()+' '+user.getPassword());
		for (UserAccount userAccount : usersList) {
//			System.out.println(userAccount.getUsername()+' '+userAccount.getPassword());
			if(userAccount.getPassword().equals(user.getPassword()))
				return new ResponseEntity<>(userAccount,HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@Override
	public ResponseEntity<String> authenticateAdmin(String password) {
		if(password.equals("1234")){
			return new ResponseEntity<>("Hello Admin",HttpStatus.OK);
		}
		return new ResponseEntity<>("Who Are You ?",HttpStatus.UNAUTHORIZED);
	}
}
