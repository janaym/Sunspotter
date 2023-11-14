DROP TABLE IF EXISTS SPOTS;

CREATE TABLE SPOTS (
    id SERIAL PRIMARY KEY NOT NULL,
    lat VARCHAR(255) NOT NULL,
    lng VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);