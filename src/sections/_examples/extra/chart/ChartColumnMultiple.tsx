import React from 'react';
// components
import { IPredictionResponse } from 'src/@types/prediction';
import { DEFAULT_PREDICTION_RESPONSE } from 'src/services/predictAlgo';
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
      categories: [
        'array',
        'string',
        'dynamic_programming',
        'math',
        'hash_table',
        'greedy',
        'sorting',
        'depth_first_search',
        'breadth_first_search',
        'binary_search',
      ],
    },
    yaxis: {
      max: 1.0,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$ ${value} thousands`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart type="bar" series={series} options={chartOptions} height={320} />;
}
