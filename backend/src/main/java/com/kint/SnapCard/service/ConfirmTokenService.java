package com.kint.SnapCard.service;

public interface ConfirmTokenService {
    public String extractUserName(String token);
    public boolean confirmToken(String jwt,String userId);
}
