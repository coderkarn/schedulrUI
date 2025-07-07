package com.example.schedulr.controller;

import com.example.schedulr.db.entity.UserDetails;
import com.example.schedulr.request.models.UserDetailsRequest;
import com.example.schedulr.response.models.UserDetailsResponse;
import com.example.schedulr.service.AuthenticationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Slf4j
public class AuthenticationController {

    @Autowired
    public AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<UserDetailsResponse> login(@RequestBody UserDetailsRequest userDetailsRequest) throws Exception {
        log.info("Login request received: {}", userDetailsRequest);

        UserDetails userInfo = null;
        if (userDetailsRequest.getEmailId() != null) {
            userInfo = authenticationService.findByEmail(userDetailsRequest.getEmailId());
        } else if (userDetailsRequest.getUserName() != null) {
            userInfo = authenticationService.findByUserName(userDetailsRequest.getUserName());
        } else {
            throw new Exception("Email or Username must be provided");
        }

        if (userInfo == null) {
            throw new Exception("User not found");
        }

        if (!userInfo.getPassword().equals(userDetailsRequest.getPassword())) {
            throw new Exception("Incorrect password");
        }

        // Optional: update last login etc.
        authenticationService.saveUserDetails(userInfo);

        UserDetailsResponse response = new UserDetailsResponse(userInfo.getUserId(), userInfo.getEmailId());
        return ResponseEntity.ok(response);
    }

}
