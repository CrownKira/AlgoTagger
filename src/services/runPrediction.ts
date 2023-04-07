import { IPredictionRequest, IPredictionResponse } from 'src/@types/prediction';
import axios from 'src/utils/axios/unauthorizedAxios';

export const detectLanguages = async (input: string) => {
  if (input.length === 0) {
    return [];
  }

  const res = await axios.post<IPredictionRequest, IPredictionResponse>('predict/', {
    text: input,
  });

  //   const res = [...data.main_language, ...data.other_languages];
  //   // TODO: fix none, create a sanitize function
  //   const emptyValues = ['None', 'n/a'];
  //   return res.filter((label) => !emptyValues.includes(label.trim()));
  return res;
};
