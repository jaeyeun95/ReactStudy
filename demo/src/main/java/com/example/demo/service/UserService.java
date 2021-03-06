package com.example.demo.service;

import com.example.demo.model.UserEntity;
import com.example.demo.persistence.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity create(final UserEntity userEntity) {
        if (userEntity == null || userEntity.getEmail() == null) {
            throw new RuntimeException("Invalid arguments");
        }
        final String email = userEntity.getEmail();
        if (userRepository.existsByEmail(email)) {
            log.warn("Email already exist {}", email);
            throw new RuntimeException("Email already exists");
        }

        return userRepository.save(userEntity);
    }

    public UserEntity getByCredentials(final String email, final String password, final PasswordEncoder encoder) {
//        비밀번호 암호화 전
//        return userRepository.findByEmailAndPassword(email, password);

        final UserEntity originalUser = userRepository.findByEmail(email);

        log.info("##### User 정보 " + originalUser);

        // matches 메서드를 이용해 패스워드가 같은지 확인
//        if (originalUser != null && encoder.matches(password, originalUser.getPassword())) {
//            log.info("여기로와야하는데");
//            return originalUser;
//        }
        if(originalUser != null && encoder.matches(password, originalUser.getPassword())) {
            log.info("여기로와야하는데");
            return originalUser;
        }

        log.info("여기은 안되는데");

        return null;
    }
}
