const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');



const app = express();
 app.use(bodyParser.json());
app.use(cors());
// app.use(session({
//     secret: "gogogogogo",
// resave: false, 
//saveUninitialized: false,
//     // cookie: {maxAge: 10000}
// }));
// app.use(checkForSession);











// massive(process.env.CONNECTION_STRING).then(db => {
//     app.set('db', db);
// }).catch(err => console.log(err));

// app.post('/api/properties', wizctrl.create);
// app.get('/api/properties', wizctrl.get);
// app.delete('/api/properties/:id', wizctrl.delete);
// app.get('/api/properties/filter', wizctrl.filter);


const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`listening on port ${port}`));