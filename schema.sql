DROP DATABASE IF EXISTS OneStop;

CREATE DATABASE OneStop;

USE OneStop;

CREATE TABLE tools (
  id int NOT NULL AUTO_INCREMENT,
  img NOT NULL,
  name varchar(50) NOT NULL,
  quantity int NOT NULL,
  price int NOT NULL AUTO_INCREMENT,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (1, LOAD_FILE('E:/images/knife.jpg'), "Knife", 15, 199.00, "Really Sharp Knife W/ Anti-slip Handle");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (2, LOAD_FILE('E:/images/boxcutter.jpg'), "Box Cutter", 5, 8.00, "Retractable Utility Knife.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (3, LOAD_FILE('E:/images/ladder.jpeg'), "Ladder", 24, 285.00, "Great choice for most odd jobs or projects around the house.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (4, LOAD_FILE('E:/images/flashlight.webp'), "Flashlight", 50, 65.00, "130 Lumen LED Flashlight.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (5, LOAD_FILE('E:/images/pick.png'), "Digging Pick", 45, 100.00, "5 lb. Pick Mattock with 36 in. Hardwood Handle.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (6, LOAD_FILE('E:/images/hammer.jpg'), "Hammer", 100, 45.00, "20 oz. Hammer.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (7, LOAD_FILE('E:/images/shovel.jpeg'), "Shovel", 50, 120.00, "44 in. Wood Handle Transfer Shovel.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (8, LOAD_FILE('E:/images/handsaw.jpg'), "Hand Saw", 20, 85.00, "15 in. Wood Handle Aggressive Tooth Saw.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (9, LOAD_FILE('E:/images/chisel.jpg'), "Chisel", 80, 10.50, "Basic Wood Chisel.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (10, LOAD_FILE('E:/images/toolbox.jpg'), "Tool Box", 30, 35.80, "20 in. 3-Drawer Portable Tool Box with Tray.");
