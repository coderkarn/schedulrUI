package com.example.schedulr.service;

import com.example.schedulr.db.entity.UserDetails;

public interface AuthenticationService {

    public UserDetails findByUserName(String userName) throws Exception;
    public UserDetails findByEmail(String userName) throws Exception;

    public UserDetails saveUserDetails(UserDetails userDetails) throws Exception;
}
