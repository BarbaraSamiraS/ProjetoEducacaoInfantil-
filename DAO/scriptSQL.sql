CREATE DATABASE nodejs;
USE nodejs;

CREATE TABLE IF NOT EXISTS loginuser (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_pass VARCHAR(255),
    user_personagem VARCHAR(20)
);

INSERT INTO loginuser (user_name, user_email, user_pass) VALUES ('samira','teste@email.com', 'senha');

ALTER TABLE loginuser ADD INDEX (user_email);
UPDATE loginuser SET user_personagem = 'Theo' WHERE user_email = 'teste@email.com' AND user_pass = 'senha';

SELECT * FROM loginuser 