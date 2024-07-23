package com.example.demo.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Annotation
@Configuration

// Class
public class ConfigDataSource {

    @Bean public static DataSource source()
    {

        DataSourceBuilder<?> dSB
                = DataSourceBuilder.create();
        dSB.driverClassName("com.mysql.cj.jdbc.Driver");

        // MySQL specific url with database name
        dSB.url("jdbc:mysql://127.0.0.1:3306/userdatabase");

        // MySQL username credential
        dSB.username("root");

        // MySQL password credential
        dSB.password("password");
        System.out.println("configured database");

        return dSB.build();
    }
}
