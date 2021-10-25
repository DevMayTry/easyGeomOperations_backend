export default interface IResultResponse {
    executedProcess: string;
    result?: boolean;
    resultWkt?:string;
    epsgOfResultWkt?:string;
}