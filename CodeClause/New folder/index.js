const express = require('express')
const app = express()
const port = 3001
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('navbar',{foo:'Foo'});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})