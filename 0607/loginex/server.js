const express = require('express')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3001

const db = require('./lib/db')
const sessionOption = require('./lib/sessionOption')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.static(path.join(__dirname, '/build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var MYSQLStore = require('express-mysql-session')(session)
var sessionStore = new MYSQLStore(sessionOption)

app.use(session({
    key: 'session_cookie_name',
    secret: '~',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) => {
    req.sendFile(path.join(__dirname, '/build/index.html'))
});

app.get('/authcheck', (req, res) => {
    const sendData = { isLogin: "" };

    if (req.session.is_logined) {
        sendData.isLogin = "True"
    } else {
        sendData.isLogin = "False"
    }
    res.send(sendData)
});

app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/')
    })
});

app.post("/login", (req, res) => {
    const username = req.body.userId;
    const password = req.body.userPassword;
    const sendData = { isLogin: "" };

    if (username && password) {
        db.query("SELECT * FROM usertable WHERE username = ?", [username], function (error, results, fields) {
            if (error) {
                console.log(error);
                throw error;
            }
            if (results.length > 0) {
                bcrypt.compare(password, results[0].password, (err, result) => {
                    if (result === true) {
                        req.session.is_logined = true;
                        req.session.nickname = username;
                        req.session.save(function () {
                            sendData.isLogin = "True"
                            res.send(sendData);
                        })
                    } else {
                        sendData.isLogin = "로그인 정보가 일치하지 않습니다."
                        res.send(sendData)
                    }
                })
            } else {
                sendData.isLogin = "로그인 정보가 없습니다."
                res.send(sendData);
            }
        })
    } else {
        sendData.isLogin = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);
    }
});

app.post("/signin", (req, res) => {
    const username = req.body.userId;
    const password = req.body.userPassword;
    const password2 = req.body.userPassword2;

    const sendData = { isSuccess: "" }

    if (username && password && password2) {
        db.query("SELECT * FROM userTable WHERE username = ?", [username], function (error, results, fields) {
            if (error) throw error;
            if (results.length <= 0 && password == password2) {
                const hasedPassword = bcrypt.hashSync(password, 10);
                db.query("INSERT INTO userTable (username, password) VALUES(?,?)", [username, hasedPassword], function (error, data) {
                    if (error) throw error;
                    req.session.save(function () {
                        sendData.isSuccess = "True"
                        res.send(sendData);
                    });
                });
            } else if (password !== password2) {
                sendData.isSuccess = "입력된 비밀번호가 서로 다릅니다."
                res.send(sendData);
            } else {
                sendData.isSuccess = "이미 존재하는 아이디 입니다!";
                res.send(sendData);
            }
        });
    } else {
        sendData.isSuccess = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);
    }
});


app.listen(port, () => console.log(`Server started on port ${port}`));