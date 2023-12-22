package com.kint.SnapCard.Exception;

public class FailedToSaveException extends RuntimeException{
    public FailedToSaveException (){
        super("User failed to save to database");
    }
}
