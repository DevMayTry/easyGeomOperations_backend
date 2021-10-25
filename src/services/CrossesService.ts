import axios from 'axios';
import gdal from 'gdal-async';

import IDoubleGeomRequest from '../dtos/IDoubleGeomRequest';
import IResultResponse from '../dtos/IResultResponse';

import createResultResponse from '../utils/createResultResponse';

class CrossesService{
    public async execute ({firstWkt, secondWkt, epsg}:IDoubleGeomRequest): Promise<IResultResponse> {

        const SRS = gdal.SpatialReference.fromEPSG(epsg);
        const firstGeom = await gdal.Geometry.fromWKTAsync(firstWkt, SRS);
        const secondGeom = await gdal.Geometry.fromWKTAsync(secondWkt, SRS);
        
        const result = await firstGeom.crossesAsync(secondGeom);

        const responseDTO = await createResultResponse({
            processResult:result,
            processName: 'Crosses',
        });

        return responseDTO;

    }
}

export default CrossesService;