package com.example.demo.model;

public class User {
    private String userID;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int age;
    private String gender;

    public User(){}

    public User(String firstName, String lastName, String email, String password, int age, String gender) {

        this.userID = generateUID(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender;
    }

    private String generateID(String firstName, String lastName){
        return "" + firstName.charAt(0) + lastName.charAt(0) + Math.random()*100;
    }

    private boolean uniqueID(String id){
        //check if unique
        return true;
    }

    private String generateUID(String firstName, String lastName){
        String id = generateID(firstName, lastName);
        while(!uniqueID(id)){
            id = generateID(firstName, lastName);
        }
        return id;
    }

    public String getID(){
        return userID;
    }

    public String getFirstName(){
        return firstName;
    }
      public void setFirstName(String name) {
        this.firstName = name;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }

    public int getAge(){
        return age;
    }
     public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }
}

