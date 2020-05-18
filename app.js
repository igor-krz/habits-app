
const express = require('express');
const port = process.env.PORT || 5000;
const routes =  require('./routes/user-routes'); 
const app = express();

//Express middleware
const bodyParser = require('body-parser') // turns response into usable format
app.use(bodyParser.json())
// const cors = require('cors') // allows/disallows cross-site communitction 
// const morgan = require('morgan') // logs rquests 
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    res.status(200).json({message: 'Route is working'})
})
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// app.use(helmet())
// app.use(cors(corsOptions))
// app.use(morgan('combined'))

module.exports = app; 
