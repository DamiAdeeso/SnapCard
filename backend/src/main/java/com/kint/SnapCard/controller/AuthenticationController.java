package com.kint.SnapCard.controller;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.*;
import com.kint.SnapCard.service.AuthenticationService;
import com.kint.SnapCard.service.UpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    private final UpdateService updateService;
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity.ok(authenticationService.signUp(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<SignInResponse> signIn(@RequestBody SignInRequest signInRequest) {
        System.out.println("herehjkbkfhbm");
        return ResponseEntity.ok(authenticationService.signIn(signInRequest));
    }
    @PostMapping("/update")
    public ResponseEntity<UpdateResponse> updateUser(@RequestBody UpdateRequest updateRequest, @RequestHeader String header){
//        System.out.println(header);
        return ResponseEntity.ok(updateService.updateUser(updateRequest));
    }
}


