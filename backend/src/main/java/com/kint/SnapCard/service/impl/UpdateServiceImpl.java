package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import com.kint.SnapCard.service.UpdateService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UpdateServiceImpl implements UpdateService {
    @Override
    public UpdateResponse updateUser(UpdateRequest updateRequest) {
        return null;
    }
}
