import React from 'react';
// components
import { IPredictionResponse } from 'src/@types/prediction';
import {
  DEFAULT_PREDICTION_RESPONSE,
  getCategories as getAlgoCategories,
} from 'src/sections/prediction/data';
import Chart, { useChart } from '../../../../components/chart';

// types

// ----------------------------------------------------------------------

interface ChartColumnMultipleProps {
  predictionResponses: IPredictionResponse[];
}

function convertToSeries(predictionResponses: IPredictionResponse[]) {
  console.log('CONVERT TO SERIES', predictionResponses);

  return predictionResponses.map((response) => ({
    name: response.model_used,
    data: Object.values(response.prediction_result),
  }));
}

export default function ChartColumnMultiple({
  predictionResponses = [DEFAULT_PREDICTION_RESPONSE],
}: ChartColumnMultipleProps) {
  const series = convertToSeries(predictionResponses);

  console.log('CHART SERIES', series);

  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      // TODO: extract
      categories: getAlgoCategories(),
    },
    yaxis: {
      max: 1.0,
      decimalsInFloat: 1,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value}`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart type="bar" series={series} options={chartOptions} height={320} />;
}
