package com.kint.SnapCard.mapper;

import com.kint.SnapCard.Entity.User;
import com.kint.SnapCard.Exception.FailedToSaveException;
import com.kint.SnapCard.Exception.UserNotFoundException;
import com.kint.SnapCard.dto.UpdateRequest;
import com.kint.SnapCard.dto.UpdateResponse;
import com.kint.SnapCard.repository.UserRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class UserMapper {
    private final UserRepository userRepository;
    public UpdateResponse updateMapper(UpdateRequest updateRequest){
        Optional <User> user = userRepository.findByUserId(updateRequest.getUserId());
        User unwrappedUser = unwrapUser(user,updateRequest.getUserId());

        try {
            if(updateRequest.getFirstName()!= null){
                unwrappedUser.setFirstName(updateRequest.getFirstName());
            }
            if(updateRequest.getLastName()!= null){
                unwrappedUser.setLastName(updateRequest.getLastName());
            }
            if(updateRequest.getMiddleName() != null ){
                unwrappedUser.setMiddlename(updateRequest.getMiddleName());
            }
            if(updateRequest.getPosition() != null){
                unwrappedUser.setPosition(updateRequest.getPosition());
            }
           if(updateRequest.getPhoneNo1() != null){
               unwrappedUser.setPhoneNo1(updateRequest.getPhoneNo1());
           }
            if(updateRequest.getPhoneNo2() != null ){
                unwrappedUser.setPhoneNo2(updateRequest.getPhoneNo2());
            }
           if(updateRequest.getCompanyName() != null ){
               unwrappedUser.setCompanyName(updateRequest.getCompanyName());
           }
            if(updateRequest.getEmail() != null){
                unwrappedUser.setEmail(updateRequest.getEmail());
            }

            userRepository.save(unwrappedUser);
        }catch(Error err){
            throw new FailedToSaveException();
        }
        return new UpdateResponse(unwrappedUser);
    }

    static User unwrapUser (Optional<User> user, Long id){
        if(user.isPresent()) return user.get();
        else throw new UserNotFoundException(id);
    }
}
