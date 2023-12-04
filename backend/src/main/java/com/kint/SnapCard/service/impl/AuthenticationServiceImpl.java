package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.SignUpRequest;
import com.kint.SnapCard.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    @Override
    public User signUp(SignUpRequest signupRequest) {
        return null;
    }
}
