package com.kint.SnapCard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
public class UpdateRequest {
    private Long userId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String companyName;
    private String email;
    private String companyAddress;
    private String phoneNo1;
    private String phoneNo2;
    private String position;
}
