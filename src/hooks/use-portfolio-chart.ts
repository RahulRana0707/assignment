import { useEffect, useMemo, useState } from 'react';
import portfolioData from '../data/portfolio-data.json';

interface ChartDataPoint {
  date: string;
  equity: number;
  drawdown: number;
}

interface PortfolioDataItem {
  date: string;
  nav: number;
}

export function usePortfolioChart() {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState('2019-01-01');
  const [toDate, setToDate] = useState('2024-04-24');

  const filteredData = useMemo(
    () => data.filter((item) => item.date >= fromDate && item.date <= toDate),
    [data, fromDate, toDate]
  );

  useEffect(() => {
    function load() {
      const portfolioItems = portfolioData as PortfolioDataItem[];

      const parsed = portfolioItems
        .map((item) => {
          const [day, month, year] = item.date.split('-');
          return {
            date: new Date(`${year}-${month}-${day}`),
            nav: item.nav,
          };
        })
        .sort((a, b) => a.date.getTime() - b.date.getTime());

      const baseNav = parsed[0].nav;
      let peak = 100;

      const final = parsed.map((d) => {
        const equity = (d.nav / baseNav) * 100;
        peak = Math.max(peak, equity);

        return {
          date: d.date.toISOString().slice(0, 10),
          equity,
          drawdown: ((equity - peak) / peak) * 100,
        };
      });

      setData(final);
      setLoading(false);
    }

    load();
  }, []);

  return {
    data: filteredData,
    loading,
    setToDate,
    setFromDate,
    fromDate,
    toDate,
  };
}
