const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const model = require('./model.js');

app.use(express.static('/Users/caijiaxin/Documents/Hack_Reactor/hrsf131-mini-apps-1/challenge_3/client'));
app.use(bodyParser.json());
app.post('/newpurchase', (req, res) => {
  console.log('server.js received', req.body);
  model.logToDB(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})