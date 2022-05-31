INNER JOIN ||||  LEFT JOIN e RIGHT JOIN |||||  SELF JOIN

JOIN => Permite combinar registros de duas ou mais tabelas,através do relacionamento que uma tabela tem com a outra.
Serve para criação de relatórios, de novas maneiras de exigir uma informação já cadastrada em uma tabela e adicionar a tabelas existentes.

>> INNER JOIN: o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. 

SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;







Bônus:
UNIONS | SUBQUERIES | STORED | PROCEDURES/FUNCTIONS 