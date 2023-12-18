package com.kint.SnapCard.controller;

import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import com.kint.SnapCard.service.UpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UpdateController {
    private final UpdateService updateService;
    @PostMapping("/update")
    public ResponseEntity<UpdateResponse> updateUser(@RequestBody UpdateRequest updateRequest){
        return ResponseEntity.ok(updateService.updateUser(updateRequest));
    }
}
