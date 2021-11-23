const express = require('express')
const routes = express.Router()

let db = [
    { '1': { categoria: 'Steak'  } },
    { '2': { categoria: 'Pizza'  } },
    { '3': { categoria: 'Tacos'  } }
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body
    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })
    db = newDB
    return res.send(newDB)
})

module.exports = routes