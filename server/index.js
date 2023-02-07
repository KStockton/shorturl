const express = require('express');
const cors = require('cors'); // middleware
const morgan = require('morgan'); // middleware - Logger
const helmet = require('helmet'); // 

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); // only accepting json data

app.use(express.static('./public'));


// app.get('/', (req, res) => {
//   res.json({
//     message: 'cdg.sh = Short Urls for your code environment'
//   })
// });

// app.get('url/:id', (req, res) => {
//   // get a short url by id
// })

// app.get('/:id', (req, res) => {
//   //TODO: redirect to url
// })

// app.post('/url', (req, res) => {
// // TODO: create short url
// });



const port = process.env.PORT || 1137

app.listen(port, () => {
  console.log(`Listening at http://localhost: ${port}`)
})

