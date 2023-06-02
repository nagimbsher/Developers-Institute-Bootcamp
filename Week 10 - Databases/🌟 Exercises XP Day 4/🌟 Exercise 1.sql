

select last_name from customers order by last_name desc


select first_name, last_name from customers order by first_name asc limit 3



select * from customers order by first_name asc limit 3


select * from items where(price >=80)order by price desc

select * from items order by price desc



  INSERT INTO items (name, price) VALUES('Small desk',100)  
  
  
INSERT INTO items (name, price) VALUES('Large desk', 300);
INSERT INTO items (name, price) VALUES('Fan desk',80);





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