package com.kint.SnapCard.dto;

import lombok.Data;

@Data
public class SignUpRequest {
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String password;
    private String companyName;
    private String companyAddress;
    private String phoneNo1;
    private String phoneNo2;
    private String Position;
}
