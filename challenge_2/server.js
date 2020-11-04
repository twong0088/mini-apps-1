const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
var string = 'firstName,lastName,county,city,role,sales';


var jsonParser = bodyParser.json();
app.use(express.static('/Users/caijiaxin/Documents/Hack_Reactor/hrsf131-mini-apps-1/challenge_2/client'));
app.post('/newuser', jsonParser,(req, res)=> {
  string += '\n' + `${req.body.firstName},${req.body.lastName},${req.body.county},${req.body.city},${req.body.role},${req.body.sales}`;
  res.send(string);
})

app.get('/users', (req, res) => {
  res.send(string);
})
app.listen(port, ()=>{
  console.log(`listening at http://localhost:${port}`);
})



