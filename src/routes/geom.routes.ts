import { Router } from 'express';

import GeomController from '../controllers/GeomController';

const geomRouter = Router();

const geomController = new GeomController();

geomRouter.get('/hi', geomController.getIntro);
geomRouter.post('/centroid', geomController.getCentroid);
geomRouter.post('/intersects', geomController.checkIntersects);
geomRouter.post('/intersection', geomController.getIntersection);
geomRouter.post('/overlaps', geomController.checkOverlaps);
geomRouter.post('/contains', geomController.checkContains);
geomRouter.post('/crosses', geomController.checkCrosses);
geomRouter.post('/touches', geomController.checkTouches);


export default geomRouter;
