const express = require('express');
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors')

const categories = require('./Data/categories.json')

app.use(cors())

app.get('/', (req,res)=>{
        res.send('dragon in running')
});

app.get('/categories',(req, res)=>{
    res.send(categories);
    console.log(categories);
})

app.listen(port, ()=>{
    console.log(`Dragon is running on ${port}`);
})