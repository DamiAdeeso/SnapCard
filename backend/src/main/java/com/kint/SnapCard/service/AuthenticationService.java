package com.kint.SnapCard.service;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.SignUpRequest;

public interface AuthenticationService {
 User signUp (SignUpRequest signupRequest);
}
