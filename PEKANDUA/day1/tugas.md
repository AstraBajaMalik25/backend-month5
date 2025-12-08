                 TUGAS DAY1 WEEK 2
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

postgres=# \c toko_laptop_db
You are now connected to database "toko_laptop_db" as user "postgres".
toko_laptop_db=# SELECT * FROM products;
 id |      name       |    category    |    price    | stock |         created_at         | is_active
----+-----------------+----------------+-------------+-------+----------------------------+-----------
  1 | Rog Strix G67   | Gaming Laptop  | 15000000.00 |    10 | 2025-12-08 15:03:50.256984 | t
  5 | ASUS TUF A15    | Gaming Laptop  | 11000000.00 |    40 | 2025-12-08 15:04:22.526487 | t
  4 | ThinkPad Gaming | Gaming Laptop  | 45000000.00 |    40 | 2025-12-08 15:04:35.44871  | t
  3 | Apple Mackbook  | Apple Products |  9000000.00 |    40 | 2025-12-08 15:04:56.236729 | t
  2 | Dell Latitude   | Budget Laptop  |  5000000.00 |    10 | 2025-12-08 15:05:42.803273 | t
(5 rows)


toko_laptop_db=# UPDATE products
toko_laptop_db-# SET price = 6000000
toko_laptop_db-# WHERE id = 2;
UPDATE 1
toko_laptop_db=# SELECT * FROM products
toko_laptop_db-# ;
 id |      name       |    category    |    price    | stock |         created_at         | is_active
----+-----------------+----------------+-------------+-------+----------------------------+-----------
  1 | Rog Strix G67   | Gaming Laptop  | 15000000.00 |    10 | 2025-12-08 15:03:50.256984 | t
  5 | ASUS TUF A15    | Gaming Laptop  | 11000000.00 |    40 | 2025-12-08 15:04:22.526487 | t
  4 | ThinkPad Gaming | Gaming Laptop  | 45000000.00 |    40 | 2025-12-08 15:04:35.44871  | t
  3 | Apple Mackbook  | Apple Products |  9000000.00 |    40 | 2025-12-08 15:04:56.236729 | t
  2 | Dell Latitude   | Budget Laptop  |  6000000.00 |    10 | 2025-12-08 15:05:42.803273 | t
(5 rows)


toko_laptop_db=# DELETE FROM products WHERE id = 2;
DELETE 1
toko_laptop_db=# SELECT * FROM products
toko_laptop_db-# ;
 id |      name       |    category    |    price    | stock |         created_at         | is_active
----+-----------------+----------------+-------------+-------+----------------------------+-----------
  1 | Rog Strix G67   | Gaming Laptop  | 15000000.00 |    10 | 2025-12-08 15:03:50.256984 | t
  5 | ASUS TUF A15    | Gaming Laptop  | 11000000.00 |    40 | 2025-12-08 15:04:22.526487 | t
  4 | ThinkPad Gaming | Gaming Laptop  | 45000000.00 |    40 | 2025-12-08 15:04:35.44871  | t
  3 | Apple Mackbook  | Apple Products |  9000000.00 |    40 | 2025-12-08 15:04:56.236729 | t
(4 rows)


toko_laptop_db=#


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\