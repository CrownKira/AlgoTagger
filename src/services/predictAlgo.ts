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
  array: 0,
  string: 0,
  dynamic_programming: 0,
  math: 0,
  hash_table: 0,
  greedy: 0,
  sorting: 0,
  depth_first_search: 0,
  breadth_first_search: 0,
  binary_search: 0,
};

export const DEFAULT_PREDICTION_REQUEST: IPredictionRequest = defaultPrediction;
export const DEFAULT_PREDICTION_RESPONSE: IPredictionResponse = {
  id: -1,
  ...defaultPrediction,
  prediction_result: defaultPredictionResult,
};

export const predictAlgo = async (input: IPredictionRequest) => {
  // if (input.description.length === 0) {
  //   return DEFAULT_PREDICTION_RESPONSE;
  // }

  const res = await axios.post<IPredictionResponse>('predict/', input);
  return res;
};
