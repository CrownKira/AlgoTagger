export type IPrediction = {
  title?: string;
  description: string;
  model_used: string;
};

export type IPredictionResult = {
  array: number;
  string: number;
  linked_list: number;
  tree: number;
  graph: number;
  hash_table: number;
  heap: number;
  stack: number;
  queue: number;
  trie: number;
};

export type IPredictionRequest = IPrediction;

export type IPredictionResponse = IPrediction & {
  id: number;
  prediction_result: IPredictionResult;
};
