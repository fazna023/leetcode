# Write your MySQL query statement below
select name,bonus from bonus right join employee on bonus.empid = employee.empid
where bonus<1000 or bonus is null;