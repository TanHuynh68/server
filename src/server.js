const express = require('express')
const configViewEngine = require('./configs/viewEngine');
const initWebRoute = require('./route/web');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

console.log("check port: ", port);
configViewEngine(app);
initWebRoute(app);
// app.get('/', (req, res) => {
//   res.render('test/index.ejs');
// })

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})