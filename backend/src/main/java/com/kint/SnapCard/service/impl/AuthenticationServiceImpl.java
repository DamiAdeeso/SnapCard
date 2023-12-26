package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.Entity.Role;
import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.SignInRequest;
import com.kint.SnapCard.dto.SignInResponse;
import com.kint.SnapCard.dto.SignUpRequest;

import com.kint.SnapCard.repository.UserRepository;
import com.kint.SnapCard.service.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.kint.SnapCard.service.AuthenticationService;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;
    @Override
    public User signUp(SignUpRequest signupRequest) {
       User user = new User();

       user.setFirstName(signupRequest.getFirstName());
       user.setMiddlename(signupRequest.getMiddleName());
       user.setLastName(signupRequest.getLastName());
       user.setEmail(signupRequest.getEmail());
       user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
       user.setCompanyName(signupRequest.getCompanyName());
       user.setCompanyAddress(signupRequest.getCompanyAddress());
       user.setPhoneNo1(signupRequest.getPhoneNo1());
       user.setPhoneNo2(signupRequest.getPhoneNo2());
       user.setPosition(signupRequest.getPosition());
       user.setRole(Role.USER);

       userRepository.save(user);
       return user;
    }


    public SignInResponse signIn(SignInRequest signInRequest) {

        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getEmail(),signInRequest.getPassword()));
        }catch(BadCredentialsException e){
            throw new IllegalArgumentException("Invalid email or password",e);
        }
        var user = userRepository.findByEmail(signInRequest.getEmail()).orElseThrow(()->new IllegalArgumentException());

        var jwt =  jwtService.generateToken(user);

        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(),user);

        return new SignInResponse(user,jwt,refreshToken);
    }


}