const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('/Users/caijiaxin/Documents/Hack_Reactor/hrsf131-mini-apps-1/challenge_3/client'));
app.use(bodyParser.json());
app.post('/newpurchase', (req, res) => {
  console.log(req.body);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})