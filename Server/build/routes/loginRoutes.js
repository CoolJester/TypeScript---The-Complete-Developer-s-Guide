"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    //checking if the user has a session and they are logged in
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    //If the user doesn't have a session
    res.status(403);
    res.send('Not permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password"/>
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'email@email.com' && password === 'password') {
        //mark login
        req.session = { loggedIn: true };
        //redirect
        res.redirect('/');
    }
    else {
        //if something is invalid
        res.send('Invalid Email or Password');
    }
});
router.get('/', (req, res) => {
    //req session if they are logged in
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        //if they are not logged in
        res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    //removing the session to logout
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome Top Dawg');
});
