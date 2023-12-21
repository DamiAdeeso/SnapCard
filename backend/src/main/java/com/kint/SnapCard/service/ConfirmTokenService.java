package com.kint.SnapCard.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface ConfirmTokenService {


    public boolean confirmToken(String jwt, Long userId);
}
