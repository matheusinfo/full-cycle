const mysql = require('mysql')
const express = require("express")

const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const app = express()

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Mapx')`

connection.query(sql)

connection.end()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))