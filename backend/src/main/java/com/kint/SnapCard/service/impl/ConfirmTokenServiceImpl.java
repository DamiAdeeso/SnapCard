package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.service.ConfirmTokenService;
import com.kint.SnapCard.service.JWTService;
import com.kint.SnapCard.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
public class ConfirmTokenServiceImpl  {

//    JWTService jwtService;
//    UserService userService;
//
//
//    @Override
//    public String extractEmail(UpdateRequest request) {
//        final String authHeader = request.getHeader("Authorization");
//        final String jwt;
//        String userEmail="";
//
//        if(StringUtils.hasLength(authHeader) || !org.apache.commons.lang3.StringUtils.startsWith(authHeader,"Bearer ")){
//            jwt = authHeader.substring(7);
//            userEmail= jwtService.extractUserName(jwt);
//        }
//        UserDetails userDetails =userService.userDetailsService().loadUserByUsername(userEmail);
//    return userEmail;
//    }
//    @Override
//    public boolean confirmToken(UpdateRequest request) {
//     final String email =   extractEmail(request);
//     if(request.getEmail() == email){
//         return true;
//     }
//     return false;
//}
}