
const Express = require("express");
const Router = Express.Router();
const app = Express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const UserController = require('./controller/userController')
const AdminController = require('./controller/adminController')

Router.get('/', UserController.userView);
Router.post('/login', UserController.userLogin);
Router.get('/loginData', UserController.userLoginView);
Router.get('/login', UserController.userLogin);
Router.post('/register', UserController.userRegister);

// Router.get('/admin', AdminController.adminView)
// Router.get('/admin/login', AdminController.adminLogin)



module.exports = Router;