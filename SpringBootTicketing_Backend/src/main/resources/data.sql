insert into roles(insert_date_time, insert_user_id, is_deleted, last_update_date_time, last_update_user_id, description)
VALUES ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1, 'Admin'),
       ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1, 'Manager'),
       ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1, 'Employee');
insert into users(insert_date_time, insert_user_id, is_deleted, last_update_date_time, last_update_user_id,
                  first_name, gender, last_name, username, role_id)
values ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1,  'admin', 'MALE', 'admin', 'admin@admin.com',1),
          ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1,  'Mehmet', 'MALE', 'Icme', 'mehmet@admin.com',2),
       ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1,  'Rasit', 'MALE', 'Icme', 'sari@admin.com',2),
        ('2021-01-05 00:00:00', 1, false, '2021-01-05 00:00:00', 1,  'Meltem', 'FEMALE', 'Kaya', 'melt@admin.com',2);