import './index.css';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { usePortfolioChart } from '../../hooks/use-portfolio-chart';

const EquityCurveChart: React.FC = () => {
  const { data, loading, setFromDate, setToDate, fromDate, toDate } =
    usePortfolioChart();

  const handleReset = () => {
    setFromDate('2019-01-01');
    setToDate('2024-04-24');
  };

  return (
    <div className="equity_curve_container">
      <div className="equity_curve_header_wrapper">
        <div className="equity_curve_header_container">
          <div className="equity_curve_header">
            <h2 className="equity_curve_title">Equity curve</h2>
          </div>
          <div className="equity_curve_subtitle">
            <span>Live since 2019-01-01</span>
            <button className="equity_curve_reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="equity_curve_date_filters">
          <div className="equity_curve_date_input">
            <label>From date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="equity_curve_date_input">
            <label>To date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <></>
      ) : (
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={data}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

              <XAxis dataKey="date" tickFormatter={(d) => d} minTickGap={20} />

              {/* Equity Axis (Left) */}
              <YAxis
                yAxisId="equity"
                domain={[50, 350]}
                tick={{ fill: '#22c55e' }}
              />

              {/* Drawdown Axis (Right) */}
              <YAxis
                yAxisId="drawdown"
                orientation="right"
                domain={[-40, 0]}
                tick={{ fill: '#ef4444' }}
              />

              <Tooltip />
              <Legend />

              {/* Equity Line (GREEN) */}
              <Line
                yAxisId="equity"
                type="monotone"
                dataKey="equity"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
                name="Equity Curve"
              />

              {/* Drawdown Area (RED) */}
              <Area
                yAxisId="drawdown"
                type="monotone"
                dataKey="drawdown"
                fill="#f472b6"
                stroke="#ef4444"
                fillOpacity={0.5}
                name="Drawdown"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default EquityCurveChart;
