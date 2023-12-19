package com.kint.SnapCard.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface ConfirmTokenService {
    public String extractUserName(String token);

    String extractUserName(HttpServletRequest request, HttpServletResponse response);

    String extractUserName(HttpServletRequest request);

    public boolean confirmToken(String jwt, String userId);
}
