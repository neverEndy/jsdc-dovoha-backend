import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";
import * as cors from 'cors'

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    const options: cors.CorsOptions = {origin: '*'};
    app.use(bodyParser.json());
    app.use(cors(options)); /* NEW */
    const port = process.env.HTTP_PORT || 3002
    app.use(bodyParser.json());

    // register all application routes
    const root_url = '/webgis/minsyong/backend'
    AppRoutes.forEach(route => {
        app[route.method](root_url + route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(port);

    console.log(`Express application is up and running on port ${port}`);

}).catch(error => console.log("TypeORM connection error: ", error));