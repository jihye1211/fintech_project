const express = require('express');//npm 완료
const app = express();
const request = require('request');//npm 완료
const jwt = require('jsonwebtoken');
const auth = require('./lib/auth');

//------------------database 연결 ----------------------
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost', //서버의 주소
  user: 'root', // 접근 계정 이름
  password: 'rhkrwlgP55140@', // 계정 비밀번호
  database: 'test', // 데이터베이스 이름
  //port : 54558		 // 포트 
});
connection.connect();
//------------------database 연결 ----------------------

app.set('views', __dirname + '/views');//랜더링할 파일이 있는 디렉토리 
app.set('view engine', 'ejs'); // 사용하는 뷰 엔진

app.use(express.json()); // JSON 타입의 데이터를 받기위한 설정
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기위한 설정

app.use(express.static(__dirname + '/public')); //디자인 파일이 위치할 정적 요소들을 저장하는 디렉토리

var clientId = "" // 클라이언트 아이디 변경
var clientSecret = "" // 클라이언트 시크릿 변경

// app.get('/', function(req, res) {
// 	alert('Hi');
// })
app.get('/main', function (req, res) {
  res.render('main');
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/signup', function (req, res) {
  res.render('signup');
})

app.get('/qrcode', function (req, res) {
  res.render('qrcode');
})

app.get('/qrreader', function (req, res) {
  res.render('qrreader');
})

app.post('login', function (req, res) {
  var id = req.body.userName;
  var pwd = req.body.userPassword;

})

// signup
app.post('/signup', function (req, res) {
  console.log(req.body);
  var comName = req.body.comName;
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;
  var userRank = req.body.userRank;
  var userEmail = req.body.userEmail;
  var insertUserSql = "INSERT INTO test (`comName`,`userName`, `userPassword`, `userRank`,`userEmail`) VALUES (?, ?,?,?,?)" // sql 문 수정
  connection.query(insertUserSql, [comName, userName, userPassword, userRank, userEmail], function (error, results, fields) { // 수정
    if (error) throw error;
    else {
      res.json(1);
    }
  });
})

app.listen(3000, function () {
  console.log("서버 작동");
})

