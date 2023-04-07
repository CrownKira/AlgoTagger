import {
  IPredictionResult,
  IPrediction,
  IPredictionRequest,
  IPredictionResponse,
} from 'src/@types/prediction';
import axios from 'src/utils/axios/unauthorizedAxios';

const defaultPrediction: IPrediction = {
  title: '',
  description: '',
  // TODO: extract const
  model_used: 'DistilBERT',
};
const defaultPredictionResult: IPredictionResult = {
  // array: 0,
  // string: 0,
  // linked_list: 0,
  // tree: 0,
  // graph: 0,
  // hash_table: 0,
  // heap: 0,
  // stack: 0,
  // queue: 0,
  // trie: 0,
  array: 0.5,
  string: 0.5,
  dynamic_programming: 0.5,
  math: 0.5,
  hash_table: 0.5,
  greedy: 0.5,
  sorting: 0.5,
  depth_first_search: 0.5,
  breadth_first_search: 0.5,
  binary_search: 0.5,
};

export const DEFAULT_PREDICTION_REQUEST: IPredictionRequest = defaultPrediction;
export const DEFAULT_PREDICTION_RESPONSE: IPredictionResponse = {
  id: -1,
  ...defaultPrediction,
  prediction_result: defaultPredictionResult,
};

export const predictAlgo = async (input: IPredictionRequest): Promise<IPredictionResponse> => {
  if (input.description.length === 0) {
    return DEFAULT_PREDICTION_RESPONSE;
  }

  const res = await axios.post<IPredictionRequest, IPredictionResponse>('predict/', input);
  return res;
};
