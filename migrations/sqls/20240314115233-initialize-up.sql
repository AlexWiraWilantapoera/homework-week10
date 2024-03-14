/* Change type of column id on users to Auto Increment */
CREATE SEQUENCE public_users_id_seq OWNED BY public.users.id;

SELECT SETVAL('public_users_id_seq', (select max(id) from public.users), false);

ALTER TABLE public.users ALTER COLUMN id SET DEFAULT nextval('public_users_id_seq');