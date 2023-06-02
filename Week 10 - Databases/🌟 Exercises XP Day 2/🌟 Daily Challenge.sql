
insert into actors(first_name,last_name,birth_date)values('Nagim','','1987-01-01')


select count(*)from actors  where (birth_date<='2000-01-01')


insert into actors(first_name,last_name,birth_date)values
('Marc','Benichou','1998-11-02'),
('Yoan','Cohen','2010-12-03'),
('Lea',	'Benichou','1987-07-27'),
('Amelia','	Dux','1996-04-07'),
('David','Grez','2003-06-14'),
('Omer','Simpson','1980-10-03')


create  table actors(
id serial primary key,
first_name varchar(50)not null,
last_name varchar(50)not null,
	birth_date date not null
)
