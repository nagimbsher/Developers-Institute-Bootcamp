select count (*)from payment inner join customer on customer.customer_id=payment.customer_id

select customer.customer_id, first_name, last_name, amount, payment_date staff_id
from payment inner join customer on customer.customer_id=payment.customer_id order by staff_id asc

select customer.customer_id, first_name, last_name, amount, payment_date 
from payment inner join customer on customer.customer_id=payment.customer_id order by staff_id asc
 
  
  
 select * from city inner join country on city.country_id=country.country_id
 
 
 select * from film left join inventory on film.film_id=inventory.film_id where inventory_id is null
 
 


select * from film left join inventory on film.film_id=inventory.film_id

select * from film inner join inventory on film.film_id=inventory.film_id
 
select payment.customer_id,first_name,last_name, amount,payment_date from customer 
inner join payment on payment.customer_id=customer.customer_id 
order by payment.customer_id;

select * from customer  inner join payment on payment.customer_id=customer.customer_id 
order by payment.customer_id  

select * from film order by rental_rate asc offset 10  limit 10


select * from film order by rental_rate asc offset 10 fetch first 10 rows only


select * from film order by rental_rate asc fetch first 10 rows only


 

select * from film order by rental_rate asc
 
select film_id,title, description, length, rental_rate from film where (title like'Br%')

select film_id,title, description, length, rental_rate from film where (title='Breaking Home')


select * from film where (title='Breaking Home')

select * from film where (film_id=150 or film_id=15)

select address,phone from customer inner join address on customer.address_id=address.address_id where(district='Texas')


select * from customer inner join address on customer.address_id=address.address_id where(district='Texas')

select * from customer inner join address on customer.address_id=address.address_id
 

select * from customer inner join address on customer.address_id=530

 select film_id,title, description, release_year,rental_rate from film order by rental_rate asc

 select film_id,title, description, release_year,rental_rate from film

 select film_id,title, description, release_year from film

 select film_id,title, description, reease_year from film

 select film_id,title, desription, reease_year from film

 select film-id,title, desription, reease_year from film
 
 select * from film select * from customer order by first_name desc
 
 
 select distinct create_date from customer select create_date from customer 
 select concat_ws('-',first_name,last_name) as full_name from customer 
 select concat_ws(' ',first_name,last_name) as full_name from customer 
 select concat (first_name,last_name) as full_name from customer 
 select first_name,last_name from customer
 select * from address select * from customer
 

 select film-id,title, desription, reease_year from film

 select film-id from film
 
 select * from film

 select * from customer order by first_name desc

select * from customer

 select distinct create_date from customer

 select create_date from customer

 select concat_ws('-',first_name,last_name) as full_name from customer

 select concat_ws(' ',first_name,last_name) as full_name from customer

 select concat_ws('',first_name,last_name) as full_name from customer

select concat (first_name,last_name) as full_name from customer

select contact (first_name,last_name) as full_name from customer

select first_name,last_name from customer
