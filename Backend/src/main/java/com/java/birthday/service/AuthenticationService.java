package com.java.birthday.service;

import com.java.birthday.dto.request.ForgotPasswordRequest;
import com.java.birthday.dto.request.LoginRequest;
import com.java.birthday.dto.request.RegisterRequest;
import com.java.birthday.dto.response.BasicResponse;
import com.java.birthday.dto.response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);

}