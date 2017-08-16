-- Inventory SQL

-- Vendors table stores all the vendors
CREATE TABLE Vendors (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        phone INT NOT NULL,
        address VARCHAR(255),
        PRIMARY KEY (id)
);

-- ProductType table stores all the types of products
CREATE TABLE ProductType (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
);


-- Varient table stores an individual Item
CREATE TABLE Varient (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        price DOUBLE NOT NULL,
        img VARCHAR(255),
        qty INT,
        vendor INT,
        PRIMARY KEY (id)
);

-- Product table stores all the products
CREATE TABLE Product (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        img VARCHAR(255),
        product_type INT,
        tag VARCHAR(255),
        varient VARCHAR(255) -- { id;id;id; ... } list of IDs
        PRIMARY KEY (id)
);
