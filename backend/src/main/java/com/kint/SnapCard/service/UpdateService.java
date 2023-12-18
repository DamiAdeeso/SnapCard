package com.kint.SnapCard.service;

import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import lombok.AllArgsConstructor;
import lombok.Data;


public interface UpdateService {
     UpdateResponse updateUser(UpdateRequest updateRequest);
}
