package com.kint.SnapCard.Exception;

public class UserNotFoundException  extends RuntimeException{
    public UserNotFoundException(Long id ){
        super("User with Id: " + id + " does not exist.");
    }
}
