DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE product_info (
    item_id INT(250) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    department_name VARCHAR(150) NULL,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity INT(250) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO product_info (product_name, department_name, price, stock_quantity)
VALUES ("growler", "kitchen_ware", 25, 15),
       ("shot_glass", "kitchen_ware", 5, 100),
       ("t-shirt", "apparel", 35, 30),
       ("hoodie", "apparel", 50, 30),
       ("socks", "apparel", 15, 50),
       ("boxers", "apparel", 25, 40),
       ("poster", "decorations", 25, 100),
       ("map", "decorations", 25, 100),
       ("trail_guide", "entertainment", 10, 100),
       ("wallet", "apparel", 40, 30);

SELECT * FROM bamazon_db.product_info;