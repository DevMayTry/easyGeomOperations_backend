import axios from 'axios';
import gdal from 'gdal-async';

import IDoubleGeomRequest from '../dtos/IDoubleGeomRequest';
import IResultResponse from '../dtos/IResultResponse';

import createResultResponse from '../utils/createResultResponse';

class IntersectsService{
    public async execute ({firstWkt, secondWkt, epsg}:IDoubleGeomRequest): Promise<IResultResponse> {

        const SRS = gdal.SpatialReference.fromEPSG(epsg);
        const firstGeom = await gdal.Geometry.fromWKTAsync(firstWkt, SRS);
        const secondGeom = await gdal.Geometry.fromWKTAsync(secondWkt, SRS);
        
        const result = await firstGeom.intersectsAsync(secondGeom);

        const responseDTO = await createResultResponse({
            processResult:result,
            processName: 'Intersects',
        });

        return responseDTO;

    }
}

export default IntersectsService;