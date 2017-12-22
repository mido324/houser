const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const auth_controller = require('./controllers/auth_controller');
const wizard_controller = require('./controllers/wizard_controller');


const app = express();
 app.use(bodyParser.json());
app.use(cors());
app.use(session({
secret : "lolololol",
resave: false, 
saveUninitialized: false,
    // cookie: {maxAge: 10000}
}));
app.use(checkForSession);











massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => console.log(err));
// simulation - 2   75D
app.post('/api/properties', wizard_controller.create);
app.get('/api/properties', wizard_controller.get);
app.delete('/api/properties/:id', wizard_controller.delete);
app.get('/api/properties/filter', wizard_controller.filter);


const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`listening on port ${port}`));