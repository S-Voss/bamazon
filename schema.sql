DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT(250) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    department_name VARCHAR(150) NULL,
    price INT(1000) NOT NULL,
    stock_quantity INT(250) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO product_name (product, department, price, stock_quantity)
VALUES ("growler", kitchen_ware, 25, 15);
VALUES ("shot_glass", kitchen_ware, 5, 100);
VALUES ("t-shirt", apparel, 35, 30);
VALUES ("hoodie", apparel, 50, 30);
VALUES ("socks", apparel, 15, 50);
VALUES ("boxers", apparel, 25, 40);
VALUES ("poster", decorations, 25, 100);
VALUES ("map", decorations, 25, 100);
VALUES ("trail_guide", entertainment, 10, 100);
VALUES ("wallet", apparel, 40, 30);
