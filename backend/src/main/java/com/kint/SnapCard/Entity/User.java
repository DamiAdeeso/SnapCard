package com.kint.SnapCard.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;

@Data
@Entity
@Table(name ="_user")
@NoArgsConstructor
public class User implements UserDetails {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String  middlename;

    @Column(name  = "last_name")
    private String  lastName;

    @Column (name = "email", unique = true)
    @NonNull
    private String email;

    @Column(name = "password")
    @JsonIgnore
    private String password;

    @Column (name = "company_name")
    private String companyName;

    @Column (name  = "company_address")
    private String  companyAddress;

    @Column (name = " phoneNo1")
    private String phoneNo1;

    @Column (name = " phoneNo2")
    private String phoneNo2;

    @Column (name = "position")
    private String position;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
