package com.kint.SnapCard.service.impl;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import com.kint.SnapCard.mapper.UserMapper;
import com.kint.SnapCard.repository.UserRepository;
import com.kint.SnapCard.service.UpdateService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UpdateServiceImpl implements UpdateService {

    private final UserMapper userMapper;

    @Override
    public UpdateResponse updateUser(UpdateRequest updateRequest) {
        return userMapper.updateMapper(updateRequest);
    }
}
