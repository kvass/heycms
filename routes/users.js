var express = require('express');
var router = express.Router();
var Users = require('../models/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');

// });
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'HeyCMS 后台登录' });
});
router.post('/login', function(req, res, next) {
    res.render('login', { title: 'HeyCMS 后台登录' });
});
router.get('/reg', (req, res, next) => {
    res.render('reg', {title: 'HeyCMS注册'})
})
router.post('/reg', (req, res) => {
    let     name = req.body.name,
        password = req.body.password;
    Users.create({name: name, password: password}, (err) => {
        if(err) {
            return res.redirect('/')
        } else {
            return res.redirect('/login')
        }
    })
    // var md5 = crypto.createHash('md5'),
    //     password = md5.update(req.body.password).digest('hex');

    // let newuser = new Users({
    //   name: name,
    //   password: password,
    //   email: req.body.email
    // })

    // Users.find({name: name}, function(err, user) {
    //   if (err) {
    //     req.flash('error', err);
    //     return res.redirect('/');
    //   }

    //   if (user) {
    //     req.flash('error', "用户名已经存在了");
    //     return res.redirect('/reg');
    //   }
    //   newuser.save(function(err, user) {
    //     if (err) {
    //       req.flash('error', err);
    //       return res.redirect('/reg')
    //     }

    //     req.session.user = newuser;
    //     req.flash('success', "注册成功");
    //     res.redirect('/');
    //   })
    // })
})

module.exports = router;
