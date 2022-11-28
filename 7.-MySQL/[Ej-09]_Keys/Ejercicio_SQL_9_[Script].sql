-- Insert Address
insert into mydb.address(address, address2, district, postal_code, phone, location, last_update, city_id) values
	("address 1", "address2 1", "district 1", "postal 1", "phone 1", "location 1", '2001-01-01', 1),
    ("address 2", "address2 2", "district 2", "postal 2", "phone 2", "location 2", '2001-01-01', 2),
    ("address 3", "address2 3", "district 3", "postal 3", "phone 3", "location 3", '2001-01-01', 3),
    ("address 4", "address2 4", "district 4", "postal 4", "phone 4", "location 4", '2001-01-01', 4),
    ("address 5", "address2 5", "district 5", "postal 5", "phone 5", "location 5", '2001-01-01', 5),
    ("address 6", "address2 6", "district 6", "postal 6", "phone 6", "location 6", '2001-01-01', 6),
    ("address 7", "address2 7", "district 7", "postal 7", "phone 7", "location 7", '2001-01-01', 7),
    ("address 8", "address2 8", "district 8", "postal 8", "phone 8", "location 8", '2001-01-01', 8),
    ("address 9", "address2 9", "district 9", "postal 9", "phone 9", "location 9", '2001-01-01', 9),
    ("address 10", "address2 10", "district 10", "postal 10", "phone 10", "location 10", '2001-01-01', 10),
    ("address 11", "address2 11", "district 11", "postal 11", "phone 11", "location 11", '2001-01-01', 11),
    ("address 12", "address2 12", "district 12", "postal 12", "phone 12", "location 12", '2001-01-01', 12),
    ("address 13", "address2 13", "district 13", "postal 13", "phone 13", "location 13", '2001-01-01', 13),
    ("address 14", "address2 14", "district 14", "postal 14", "phone 14", "location 14", '2001-01-01', 14),
    ("address 15", "address2 15", "district 15", "postal 15", "phone 15", "location 15", '2001-01-01', 15),
    ("address 16", "address2 16", "district 16", "postal 16", "phone 16", "location 16", '2001-01-01', 16),
    ("address 17", "address2 17", "district 17", "postal 17", "phone 17", "location 17", '2001-01-01', 17),
    ("address 18", "address2 18", "district 18", "postal 18", "phone 18", "location 18", '2001-01-01', 18),
    ("address 19", "address2 19", "district 19", "postal 19", "phone 19", "location 19", '2001-01-01', 19),
    ("address 20", "address2 20", "district 20", "postal 20", "phone 20", "location 20", '2001-01-01', 20);
    
-- Insert City
insert into mydb.city(city, last_update, country_id) values
	("city 1", '2001-01-01', 1),
	("city 2", '2001-01-01', 2),
	("city 3", '2001-01-01', 3),
	("city 4", '2001-01-01', 4),
	("city 5", '2001-01-01', 5),
	("city 6", '2001-01-01', 6),
	("city 7", '2001-01-01', 7),
	("city 8", '2001-01-01', 8),
	("city 9", '2001-01-01', 9),
	("city 10", '2001-01-01', 10),
	("city 11", '2001-01-01', 11),
	("city 12", '2001-01-01', 12),
	("city 13", '2001-01-01', 13),
	("city 14", '2001-01-01', 14),
	("city 15", '2001-01-01', 15),
	("city 16", '2001-01-01', 16),
	("city 17", '2001-01-01', 17),
	("city 18", '2001-01-01', 18),
	("city 19", '2001-01-01', 19),
	("city 20", '2001-01-01', 20);
    
insert into mydb.country(country, last_update) values
	("country 1", '2001-01-01'),
	("country 2", '2001-01-01'),
	("country 3", '2001-01-01'),
	("country 4", '2001-01-01'),
	("country 5", '2001-01-01'),
	("country 6", '2001-01-01'),
	("country 7", '2001-01-01'),
	("country 8", '2001-01-01'),
	("country 9", '2001-01-01'),
	("country 10", '2001-01-01'),
	("country 11", '2001-01-01'),
	("country 12", '2001-01-01'),
	("country 13", '2001-01-01'),
	("country 14", '2001-01-01'),
	("country 15", '2001-01-01'),
	("country 16", '2001-01-01'),
	("country 17", '2001-01-01'),
	("country 18", '2001-01-01'),
	("country 19", '2001-01-01'),
	("country 20", '2001-01-01');
    
-- Consulta mediante inner joint
select address.address_id as Address_Id, address.address as Adress_Name, city.city as City 
	from address
    inner join city
    on address.city_id = city.city_id;