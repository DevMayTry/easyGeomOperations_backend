import { Request, Response } from 'express';

import CentroidService from '../services/CentroidService';
import ContainsService from '../services/ContainsService';
import CrossesService from '../services/CrossesService';
import IntersectsService from '../services/IntersectsService';
import IntersectionService from '../services/IntersectionService';
import OverlapsService from '../services/OverlapsService';
import TouchesService from '../services/TouchesService';


export default class GeomController {
  public async getIntro(request: Request, response: Response): Promise<Response> {
    return response.json({message:"Hi! Welcome to Easy Geometries Operations API =D!"});
  }

  public async getCentroid(request: Request, response: Response): Promise<Response> {

    const {wkt,epsg} = request.body;

    const getCentroid = new CentroidService();

    const result = await getCentroid.execute({
      wkt,
      epsg
    });

    return response.json(result);
    
  }

  public async checkContains(request: Request, response: Response): Promise<Response> {

    const {firstWkt, secondWkt, epsg} = request.body;

    const checkContains = new ContainsService();

    const result = await checkContains.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }

  public async checkCrosses(request: Request, response: Response): Promise<Response> {
    
    const {firstWkt, secondWkt, epsg} = request.body;

    const checkCrosses = new CrossesService();

    const result = await checkCrosses.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }

  public async checkIntersects(request: Request, response: Response): Promise<Response> {

    const {firstWkt, secondWkt, epsg} = request.body;

    const checkIntersects = new IntersectsService();

    const result = await checkIntersects.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }

  public async getIntersection(request: Request, response: Response): Promise<Response> {

    const {firstWkt, secondWkt, epsg} = request.body;

    const getIntersection = new IntersectionService();

    const result = await getIntersection.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }

  public async checkOverlaps(request: Request, response: Response): Promise<Response> {

    const {firstWkt, secondWkt, epsg} = request.body;

    const checkOverlaps = new OverlapsService();

    const result = await checkOverlaps.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }

  public async checkTouches(request: Request, response: Response): Promise<Response> {

    const {firstWkt, secondWkt, epsg} = request.body;
    
    const checkTouches = new TouchesService();

    const result = await checkTouches.execute({
      firstWkt,
      secondWkt,
      epsg
    });

    return response.json(result);
    
  }
}
