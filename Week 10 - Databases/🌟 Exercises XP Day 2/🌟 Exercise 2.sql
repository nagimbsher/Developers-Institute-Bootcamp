select * from students  where (birth_date<='2000-01-01')


select first_name,last_name from students where (id=1 and id=3)


select first_name,last_name from students where (right(first_name,3)like 'a%')


select first_name,last_name from students where (right(first_name,2)like 'a%');


select first_name,last_name from students where first_name like '%a';

select first_name,last_name from students where first_name Ilike 'a%';

select first_name,last_name from students where first_name like '%A%';

 
 
select first_name,last_name from students where first_name like '%a%';
  
select first_name,last_name from students where last_name ='Benichou'
or first_name='Marc'


 select  first_name,last_name from students where last_name='Benichou'and 
 first_name='Marc'

 select  first_name,last_name from students where last_name='Benichou';



select first_name, last_name from students;
 
 select  first_name,last_name from students where id=2;