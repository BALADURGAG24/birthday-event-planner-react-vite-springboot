package com.java.birthday.Enum;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(
        Set.of(
            Permission.ADMIN_CREATE,
            Permission.ADMIN_READ,
            Permission.ADMIN_UPDATE,
            Permission.ADMIN_DELETE,
            Permission.CUSTOMER_READ,
            Permission.CUSTOMER_CREATE,
            Permission.CUSTOMER_UPDATE,
            Permission.CUSTOMER_DELETE
        )
    ),
    CUSTOMER(Set.of(
        Permission.CUSTOMER_READ,
        Permission.CUSTOMER_CREATE,
        Permission.CUSTOMER_UPDATE,
        Permission.CUSTOMER_DELETE
    ));

    @Getter
    private final Set<Permission> permission;

    public List<SimpleGrantedAuthority> getAuthorities(){
        var authorities = getPermission().stream().map(permission -> new SimpleGrantedAuthority(permission.getPermissions())).collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}

