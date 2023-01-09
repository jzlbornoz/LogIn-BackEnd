const express = require('express');


const userRouter = express.Router();

userRouter.get('/', (req, res) => {
     const users = [{
        name: 'juan',
        mail: 'juan.com',
        id: 1
    }];
    res.json(users);
});

userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id == 1) {
        res.json({
            name: 'juan',
            mail: 'juan.com',
            id: id
        })
    } else {
        res.json({
            mesagge: 'no encontrado'
        })
    }
})


module.exports = userRouter;
