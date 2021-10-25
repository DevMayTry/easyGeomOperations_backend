import {Router} from 'express';

import geomRouter from './geom.routes';

const routes = Router();

routes.use('/',geomRouter);

export default routes;