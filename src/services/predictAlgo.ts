import { IPredictionRequest, IPredictionResponse } from 'src/@types/prediction';
import axios from 'src/utils/axios/unauthorizedAxios';

export const predictAlgo = async (input: IPredictionRequest) => {
  const res = await axios.post<IPredictionResponse>('predict/', input);
  return res;
};
