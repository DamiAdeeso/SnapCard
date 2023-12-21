package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.repository.UserRepository;
import com.kint.SnapCard.service.ConfirmTokenService;
import com.kint.SnapCard.service.JWTService;
import com.kint.SnapCard.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConfirmTokenServiceImpl implements ConfirmTokenService {

    private final JWTService jwtService;
    private final UserService userService;

   private final UserRepository userRepository;


    @Override
    public boolean confirmToken(String authHeader, Long userId){
        if(StringUtils.hasLength(authHeader) && org.apache.commons.lang3.StringUtils.startsWith(authHeader,"Bearer ")){
           String jwt = authHeader.substring(7);
           String userEmail = jwtService.extractUserName(jwt);

            Optional<User> user = userRepository.findByUserId(userId);

            if(userService.userDetailsService().loadUserByUsername(userEmail).equals(user.get().getEmail()));
            return true;
        }
        return false;
    }
}