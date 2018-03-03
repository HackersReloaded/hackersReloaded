DROP DATABASE IF EXISTS OneStop;

CREATE DATABASE OneStop;

USE OneStop;

CREATE TABLE Tools (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
/*INSERT INTO groceries (quantity, description) VALUES (5, "frozen pizza");*/

INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (1, "", "Knife", 15, 199.00, "Really Sharp Knife W/ Anti-slip Handle");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (2, "", "Box Cutter", 5, 8.00, "Retractable Utility Knife.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (3, "", "Ladder", 24, 285.00, "Great choice for most odd jobs or projects around the house.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (4, "", "Flashlight", 50, 65.00, "130 Lumen LED Flashlight.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (5, "", "Digging Pick", 45, 100.00, "5 lb. Pick Mattock with 36 in. Hardwood Handle.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (6, "", "Hammer", 100, 45.00, "20 oz. Hammer.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (7, "", "Shovel", 50, 120.00, "44 in. Wood Handle Transfer Shovel.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (8, "", "Hand Saw", 20, 85.00, "15 in. Wood Handle Aggressive Tooth Saw.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (9, "", "Chisel", 80, 10.50, "Basic Wood Chisel.");
INSERT INTO Tools (id, image, name, quantity, price, description) VALUES (10, "", "Tool Box", 30, 35.80, "20 in. 3-Drawer Portable Tool Box with Tray.");
