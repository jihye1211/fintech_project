var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '15.164.218.187', //서버의 주소
  user     : 'root', // 접근 계정 이름
  password : '1234', // 계정 비밀번호
  database : 'test', // 데이터베이스 이름
  port : 54558
});
connection.connect();
 
connection.query('SELECT * FROM test', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();
