CREATE DATABASE members_only;

-- foreign keys

CREATE TYPE status AS ENUM('unverified', 'verified');

CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, firstName VARCHAR(50) NOT NULL, lastName VARCHAR(50) NOT NULL, email VARCHAR(255) UNIQUE, password VARCHAR(255) NOT NULL, membership_status STATUS DEFAULT 'unverified');

CREATE TABLE IF NOT EXISTS messages (message_id SERIAL PRIMARY KEY, author_id INT, creation_date TIMESTAMP NOT NULL, message VARCHAR(255), FOREIGN KEY (author_id) REFERENCES users(user_id) ON DELETE CASCADE);

