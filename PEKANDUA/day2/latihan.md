TUGAS 1/2/3

////////////////////////////////////////////////////////////////////

toko_laptop_db=# SELECT * FROM items
toko_laptop_db-# ;
 id |       name       |    category    |    price    | stock |         created_at         | is_active | category_id
----+------------------+----------------+-------------+-------+----------------------------+-----------+-------------
  1 | Rog Strix G67    | Gaming Laptop  | 15000000.00 |    10 | 2025-12-08 15:03:50.256984 | t         |           3
  5 | ASUS TUF A15     | Gaming Laptop  | 11000000.00 |    40 | 2025-12-08 15:04:22.526487 | t         |           3
  3 | Apple Mackbook   | Apple Products |  9000000.00 |    40 | 2025-12-08 15:04:56.236729 | t         |           2
 12 | Dell Latitude    | Budget Laptop  |  4000000.00 |    12 | 2025-12-09 18:25:06.305989 | t         |           1
  4 | ThinkPad Plus 12 | Budget Laptop  |  5000000.00 |    40 | 2025-12-08 15:04:35.44871  | t         |           1
(5 rows)


toko_laptop_db=#

////////////////////////////////////////////////////////////////////



TUGAS 2/3

////////////////////////////////////////////////////////////////////

 id |      name      | category_id
----+----------------+-------------
  1 | Laptop Budget  |
  2 | Apple Products |
  3 | Laptop Gaming  |
(3 rows)

////////////////////////////////////////////////////////////////////


TUGAS 4-5

toko_laptop_db=# SELECT c.name AS category_name,
toko_laptop_db-# COUNT (p.id) AS total_items
toko_laptop_db-# FROM categories c
toko_laptop_db-# LEFT JOIN items p
toko_laptop_db-# ON p.category_id = c.id
toko_laptop_db-# GROUP BY c.name;
 category_name  | total_items
----------------+-------------
 Apple Products |           1
 Laptop Gaming  |           2
 Laptop Budget  |           2
(3 rows)

toko_laptop_db=# SELECT c.name AS category_name,
toko_laptop_db-# COUNT (p.id) AS total_items
toko_laptop_db-# FROM categories c
toko_laptop_db-# LEFT JOIN items p
toko_laptop_db-# ON p.category_id = c.id
toko_laptop_db-# GROUP BY c.name;
 category_name  | total_items
----------------+-------------
 Apple Products |           1
 Laptop Gaming  |           2
 Laptop Budget  |           2
(3 rows)

|

toko_laptop_db=# SELECT c.name AS category_name,
toko_laptop_db-# COUNT (p.id) AS total_items
toko_laptop_db-# FROM categories c
toko_laptop_db-# LEFT JOIN items p
toko_laptop_db-# ON p.category_id = c.id
toko_laptop_db-# GROUP BY c.name;
 category_name  | total_items
----------------+-------------
 Apple Products |           1
 Laptop Gaming  |           2
 Laptop Budget  |           2
(3 rows)


|


toko_laptop_db=# SELECT c.name AS category_name,
toko_laptop_db-# MAX(p.price) AS highest_price
toko_laptop_db-# FROM categories c
toko_laptop_db-# JOIN items p
toko_laptop_db-# ON p.category_id = c.id
toko_laptop_db-# GROUP BY c.name
toko_laptop_db-# ORDER BY highest_price DESC
toko_laptop_db-# LIMIT 1;
 category_name | highest_price
---------------+---------------
 Laptop Gaming |   15000000.00
(1 row)


toko_laptop_db=#


////////////////////////////////////////////////////////////////////
