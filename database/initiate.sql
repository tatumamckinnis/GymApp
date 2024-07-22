-- Create User table
CREATE TABLE IF NOT EXISTS User (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    age INT,
    phone VARCHAR(15)
);

-- Create WorkoutPreference table
CREATE TABLE IF NOT EXISTS WorkoutPreference (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    workout_type VARCHAR(255),
    preferred_time TIME,
    FOREIGN KEY (user_id) REFERENCES User(id)
);
