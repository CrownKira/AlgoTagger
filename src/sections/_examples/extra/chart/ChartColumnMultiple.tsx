// components
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const series = [
  { name: 'DistilBERT', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
  { name: 'XGBoost', data: [76, 85, 99, 98, 87, 82, 91, 14, 94] },
];

export default function ChartColumnMultiple() {
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      // categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    tooltip: {
      y: {
        formatter: (value: number) => `$ ${value} thousands`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart type="bar" series={series} options={chartOptions} height={320} />;
}
