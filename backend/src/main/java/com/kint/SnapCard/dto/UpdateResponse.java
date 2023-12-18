package com.kint.SnapCard.dto;

import com.kint.SnapCard.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@Data
public class UpdateResponse {
    private final User user;
}
