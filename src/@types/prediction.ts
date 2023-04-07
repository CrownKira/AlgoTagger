export type IPrediction = {
  title?: string;
  description: string;
  model_used: string;
};

export type IPredictionResult = {
  array: number;
  string: number;
  dynamic_programming: number;
  math: number;
  hash_table: number;
  greedy: number;
  sorting: number;
  depth_first_search: number;
  breadth_first_search: number;
  binary_search: number;
};

export type IPredictionRequest = IPrediction;

export type IPredictionResponse = IPrediction & {
  id: number;
  prediction_result: IPredictionResult;
};
