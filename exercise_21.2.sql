-- Utilizando o banco de dados sakila.

-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT
	A.actor_id,
	A.first_name,
    F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT 
	S.address_id,   --->>> Não precisa colocar aqui!! 
	S.first_name,
	S.last_name,
	A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT
	C.customer_id,
	C.first_name as name,
	C.email,
    A.address_id,
    A.address    
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON A.address_id = C.address_id
ORDER BY name DESC
LIMIT 100;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT
	C.first_name as name,
	C.email,
    A.address_id,
    A.address,
    A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON A.address_id = C.address_id
WHERE A.district = 'California'
AND C.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

Para fixar: 
Para fixar esses conceitos, tente encontrar as seguintes informações, utilizando o schema hr:
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.

SELECT 
    Employee.first_name,
    Manager.manager_id
FROM hr.employees AS Employee
INNER JOIN hr.employee AS Manager
ON Employee.manager_id = Manager.employee_id

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
Lembre-se de usar o SELF JOIN em situações em que as informações que estiver buscando estejam armazenadas em apenas uma tabela.
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS Manager
INNER JOIN
	hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
	Manager.EMPLOYEE_ID;