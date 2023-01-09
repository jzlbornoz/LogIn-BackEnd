# Backend Scrum Latam

## Configuracion del entorno de desarrollo

- npm, git, nodemon, eslint.

## Instalacion de Express

- `npm i express`
- Se crea el servidor en el port 3002.
- /index.js

```
const express = require('express');
const myApp = express();
const port = 3002;

myApp.get('/', (req, res) => {
  res.send('HOLA MUNDO');
});

myApp.listen(port, () => {
  console.log("listen in port: " + port);
})

```

## RESTful API

- REST: Representational State Transfer Es una conveccion que se refiere a servicios web por protocolo HTTP

## Single Responsibility Principle (SRP)

- Es un principio de programacion que indica que cada modulo o pieza de codigo, debe tener una sola responsabilidad o funcionalidad.
- Se crea el directorio routes con el archivo 'user.router.js'.
- /routes/user.router.js

```
const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    const users = [{
        name: 'juan',
        mail: 'juan.com',
        id: 1
    }];
    res.json(users);
});

router.get('/:id', (req, res) => {
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


module.exports = router;

```

- Posteriormente se crea el index.js del directorio routes:
- /routes/index.js

```
const express = require('express');
const userRouter = require('./user.router');


function routerApi(app) {
    const router = express.Router();
    app.use('api/v1', router);
    router.use('/user', userRouter);
}
module.exports = routerApi;

```

- Luego se agrega el routerApi al root del proyecto.
- /index.js

```
const express = require('express');
const routerApi = require('./routes');
const myApp = express();
const port = 3002;

myApp.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

routerApi(myApp);

myApp.listen(port, () => {
    console.log("listen in port: " + port);
})

```

- Se agregan los scripts para arrancar el proyecto
- /package.json

```
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```
