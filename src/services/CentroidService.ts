import axios from 'axios';
import gdal from 'gdal-async';

import ISingleGeomRequest from '../dtos/ISingleGeomRequest';
import IResultResponse from '../dtos/IResultResponse';

class CentroidService{
    public async execute ({wkt,epsg}:ISingleGeomRequest): Promise<IResultResponse> {

        const SRS = gdal.SpatialReference.fromEPSG(epsg);
        const geom = await gdal.Geometry.fromWKTAsync(wkt,SRS);
        
        const centroid = await geom.centroidAsync();

        const responseDTO = {} as IResultResponse;

        if(centroid){
            responseDTO.executedProcess = "Centroid";
            responseDTO.resultWkt = await centroid.toWKTAsync();
            responseDTO.epsgOfResultWkt = geom.srs.getAuthorityCode();
        }

        return responseDTO;
    }
}

export default CentroidService;