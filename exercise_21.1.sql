SELECT * FROM hr.employees;

-- Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;
SELECT MIN(salary) FROM hr.employees;

-- Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS media
FROM hr.employees
GROUP BY job_id
ORDER BY media DESC;

-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

-- 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários.
 -- Todos os valores devem ser formatados para ter apenas duas casas decimais.
 SELECT MAX(salary) AS higher_salary,
 MIN(salary) AS lower_salary,
 SUM(salary) AS SUM,
 ROUND(AVG(salary), 2) AS media
 FROM hr.employees;
 
-- Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT job_id, COUNT(*)
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
SELECT JOB_ID, SUM(salary)
FROM hr.employees
GROUP BY JOB_ID;

-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir 
-- a folha de pagamento das pessoas programadoras (IT_PROG).
SELECT JOB_ID, SUM(salary)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT JOB_ID, AVG(SALARY) AS media
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media DESC;

-- 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. 
-- Dica: agrupe pelo DEPARTMENT_ID.

SELECT DEPARTMENT_ID, 
AVG(SALARY),
COUNT(*) AS number
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING number > 10;

-- 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT
	*
FROM hr.employees
WHERE length(first_name) >=8 ;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado 
-- (exiba somente o ano).
SELECT 
	employee_id,
    first_name,
    YEAR(hire_date)
FROM hr.employees;

-- 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi 
-- contratado (exiba somente o dia).
SELECT 	
	employee_id,
    first_name,
    DAY(HIRE_DATE)
FROM hr.employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba 
-- somente o mês).
SELECT 
	EMPLOYEE_ID,
    first_name,
    MONTH(hire_date) as month
FROM hr.employees;

-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(first_name, ' ' ,last_name)) 
FROM hr.employees;

-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT first_name, last_name, hire_date
FROM hr.employees
WHERE 
	MONTH(hire_date) = 7 
    AND
	YEAR(HIRE_DATE) = 1987;

-- 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT 
	first_name,
    last_name,
    DATEDIFF(now(), hire_date) AS days
FROM hr.employees;

-- Tempo máximo, minimo e a média de tempo dos filmes lançados em 2006 por rating

SELECT 
	rating,
    MAX(length) AS maior_duracao,
    MIN(length) AS menor_duracao,
    AVG(length) AS media_duracao
FROM sakila.film
WHERE release_year = 2006
GROUP BY rating;

-- Média de dias que uma pessoa usuária permanece com o produto alugado
SELECT 
     customer_id, 
     AVG(DATEDIFF(rental_date, return_date))
FROM sakila.rental
GROUP BY customer_id;

-- quantas pessoas usuárias temos por cidade?

SELECT
   city_id,
   COUNT(*)
FROM sakila.address
GROUP BY city_id;

-- Qual o valor total recebido dentro de cada mẽs?

SELECT
    MONTH(payment_date),
    YEAR(payment_date),
    SUM(amount) as `valor total`
FROM sakila.payment
GROUP BY
   MONTH(payment_date),
   YEAR(payment_date);
