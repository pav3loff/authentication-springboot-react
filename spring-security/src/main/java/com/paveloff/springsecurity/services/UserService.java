package com.paveloff.springsecurity.services;

import com.paveloff.springsecurity.model.UserDTO;

public interface UserService {
	
	boolean register(UserDTO userDTO);

}
