const express = require('express');
const cors    = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
    }

    middlewares() {
        this.app.use( express.static('public'));
    }

    upServer() {
        this.app.listen( this.port, () => {
            console.log('Servidor activo en puerto ', this.port)
        });
    }
}

module.exports = Server;