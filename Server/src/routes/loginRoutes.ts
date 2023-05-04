import {Router, Response, Request, NextFunction} from 'express';
 
interface RequestWithBody extends Request{
  body: {[key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction):void{
  //checking if the user has a session and they are logged in
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  //If the user doesn't have a session
  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) =>{
  const {email, password} = req.body;

  if (email && password && email === 'email@email.com' && password === 'password') {
    //mark login
    req.session = {loggedIn: true};
    //redirect
    res.redirect('/');
  }else{
    //if something is invalid
    res.send('Invalid Email or Password');
  }
});

router.get('/', (req: Request, res: Response) =>{
  //req session if they are logged in
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  }else{
    //if they are not logged in
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) =>{
  //removing the session to logout
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome Top Dawg');
});

export { router };