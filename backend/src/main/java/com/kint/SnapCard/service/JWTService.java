package com.kint.SnapCard.service;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JWTService {
    String extractUserName (String  token);

    String generateToken (UserDetails userDetails);

    boolean isTokenValid (String token, UserDetails userDetails);

    public Boolean isTokenExpired(String token);
    public String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails);
}
