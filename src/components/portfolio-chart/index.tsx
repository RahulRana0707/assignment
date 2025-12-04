import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { ChartDataPoint } from '../../types';

export default function PortfolioChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="equity"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
          name="Equity Curve"
        />

        <Area
          type="monotone"
          dataKey="drawdown"
          fill="#ef4444"
          stroke="#ef4444"
          name="Drawdown"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
