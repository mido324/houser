SELECT * 
FROM houser
WHERE userid = $1
ORDER BY desiredrent ASC;