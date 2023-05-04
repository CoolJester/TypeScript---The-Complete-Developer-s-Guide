import { Response, Request, NextFunction } from 'express';
import {get, controller, post} from './decorators';
import { bodyValidator } from './decorators/bodyValidator';



@controller('/auth')
class LoginController{
  @get('/login')  
  getLogin(req: Request, res: Response):void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
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
  }

  @get('/logout')
  getLogout(req: Request, res: Response){
    //removing the session to logout
    req.session = undefined;
    res.redirect('/');
  }
}