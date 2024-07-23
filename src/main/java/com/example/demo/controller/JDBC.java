package com.example.demo.controller;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.sql.DataSource;
import com.example.demo.model.User;
import com.example.demo.config.ConfigDataSource;
//import lombok.extern.slf4j.Slf4j;

// Annotation to provide logging feature

// Class
public class JDBC {

    public int insertUser(User user)
    {
        DataSource dataSource = null;
        Connection connection = null;
        PreparedStatement prepStatement = null;
        System.out.println("inserting user");
        int result = 0;
        try {

            // Get the configured datasource
            dataSource = ConfigDataSource.source();
            System.out.println("got datasource");
            // Attempt for connection to MySQL
            connection = dataSource.getConnection();
            System.out.println("got connection");
            prepStatement = connection.prepareStatement(
                    "insert into users (name,email) values (?,?)");
            prepStatement.setString(1, user.getFirstName());
            prepStatement.setString(2, user.getEmail());

            result = prepStatement.executeUpdate();
        }
        catch (SQLException e) {
            //log.getName();
            System.out.println(e.getMessage());
        }

        return result;
    }
}