package com.kint.SnapCard.controller;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.SignUpRequest;
import com.kint.SnapCard.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticateService;

    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity.ok(authenticateService.signUp(signUpRequest));
    }


}
