package com.kint.SnapCard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignInRequest {
    private final String email;
    private final String password;
}
