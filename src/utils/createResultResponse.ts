import {Geometry} from "gdal-async";
import IResultResponse from '../dtos/IResultResponse';

interface ICreateResultResponseProps{
    processResult: boolean |  Geometry;
    processName: string;
}

const createResultResponse = async ({processResult,processName}:ICreateResultResponseProps)=> {

    const responseDTO = {} as IResultResponse;

    responseDTO.executedProcess = processName;

    if(typeof(processResult) == 'boolean'){
        responseDTO.result = processResult;
    }else{
        responseDTO.resultWkt = await processResult.toWKTAsync();
        responseDTO.epsgOfResultWkt = processResult.srs.getAuthorityCode();
    }

    return responseDTO;
}

export default createResultResponse;

