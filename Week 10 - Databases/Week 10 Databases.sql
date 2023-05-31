select * from customers WHERE last_name= 'Jones';

select * from customers WHERE last_name= 'Scott';

select * from customers WHERE last_name= 'Smith';


select * from items WHERE price <= 300;

select * from items WHERE price > 80;

select * from items; 

select * from customers;


INSERT INTO customers (first_name, last_name) VALUES('Gtrg', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES('Sandra', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES('Scott', 'Scott');
INSERT INTO customers (first_name, last_name) VALUES('Treveor', 'Green');
INSERT INTO customers (first_name, last_name) VALUES('Melanie', 'Johnson');


CREATE TABLE customers (
  id serial PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL 
)
  select * from customers;
  
  
  INSERT INTO items (name, price) VALUES('Small desk',100)  
  
  
INSERT INTO items (name, price) VALUES('Large desk', 300);
INSERT INTO items (name, price) VALUES('Fan desk',80);
  
  select * from items
  
  CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  NAME VARCHAR (50) NOT NULL,
  price INTEGER NOT NULL)