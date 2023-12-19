package com.example.demo.repository;

import com.example.demo.model.UserAccount;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Integer> {

	List<UserAccount> findByusername(String username);
}
