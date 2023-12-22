package com.kint.SnapCard.controller;

import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import com.kint.SnapCard.service.ConfirmTokenService;
import com.kint.SnapCard.service.UpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UpdateService updateService;

    private final ConfirmTokenService confirmTokenService;

    @PostMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UpdateRequest updateRequest, @RequestHeader(name = HttpHeaders.AUTHORIZATION, required = false) String authHeader){
        if(confirmTokenService.confirmToken(authHeader,updateRequest.getUserId())){
            return ResponseEntity.ok(updateService.updateUser(updateRequest));
        };
        return new ResponseEntity<>("Bad Token!", HttpStatus.BAD_REQUEST);
    }
}
