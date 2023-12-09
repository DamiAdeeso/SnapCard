package com.kint.SnapCard.service;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.SignInRequest;
import com.kint.SnapCard.dto.SignInResponse;
import com.kint.SnapCard.dto.SignUpRequest;

public interface AuthenticationService {
 User signUp (SignUpRequest signupRequest);

 SignInResponse signIn(SignInRequest signInRequest);

}
