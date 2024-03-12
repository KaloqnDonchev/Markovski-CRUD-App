package com.developer.usermanagement.service.impl;

import com.developer.usermanagement.entity.UserEntity;
import com.developer.usermanagement.repository.UserRepository;
import com.developer.usermanagement.service.UserService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserEntity> findAllUsers() {
        // Sort by last name and then by date
        Sort sort = Sort.by(Sort.Order.asc("lastName").ignoreCase(), Sort.Order.asc("dateOfBirth"));

        return userRepository.findAll(sort);
    }
    @Override
    public Optional<UserEntity> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity saveUser(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public UserEntity updateUser(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
