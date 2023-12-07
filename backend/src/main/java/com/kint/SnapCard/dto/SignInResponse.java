package com.kint.SnapCard.dto;

import com.kint.SnapCard.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class SignInResponse {
    private final User user;

    private final String token;

    private String refreshToken;

}
