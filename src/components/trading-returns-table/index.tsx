import React from 'react';
import { Download } from 'lucide-react';
import './index.css';

interface TrailingReturnData {
  name: string;
  ytd: string;
  '1d': string;
  '1w': string;
  '1m': string;
  '3m': string;
  '6m': string;
  '1y': string;
  '3y': string;
  si: string;
  dd: string;
  maxdd: string;
}

const dummyData: TrailingReturnData[] = [
  {
    name: 'Focused',
    ytd: '-1.7%',
    '1d': '0.1%',
    '1w': '2.9%',
    '1m': '7.6%',
    '3m': '2.2%',
    '6m': '10.1%',
    '1y': '43.5%',
    '3y': '23.9%',
    si: '22.5%',
    dd: '-2.8%',
    maxdd: '-40.3%',
  },
  {
    name: 'NIFTY50',
    ytd: '3.1%',
    '1d': '0.1%',
    '1w': '1.1%',
    '1m': '1.4%',
    '3m': '4.4%',
    '6m': '16.2%',
    '1y': '26.2%',
    '3y': '16.0%',
    si: '14.5%',
    dd: '-1.5%',
    maxdd: '-38.4%',
  },
];

const TrailingReturnsTable: React.FC = () => {
  return (
    <div className="trailing_returns_container">
      <div className="trailing_returns_header">
        <h2 className="trailing_returns_title">Trailing Returns</h2>
        <div className="trailing_returns_download_icon">
          <Download size={16} />
        </div>
      </div>
      <div className="trailing_returns_table_wrapper">
        <table className="trailing_returns_table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>YTD</th>
              <th>1D</th>
              <th>1W</th>
              <th>1M</th>
              <th>3M</th>
              <th>6M</th>
              <th>1Y</th>
              <th>3Y</th>
              <th className="trailing_returns_si_column">SI</th>
              <th>DD</th>
              <th>MAXDD</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, index) => (
              <tr key={index}>
                <td className="trailing_returns_name">{row.name}</td>
                <td>{row.ytd}</td>
                <td>{row['1d']}</td>
                <td>{row['1w']}</td>
                <td>{row['1m']}</td>
                <td>{row['3m']}</td>
                <td>{row['6m']}</td>
                <td>{row['1y']}</td>
                <td>{row['3y']}</td>
                <td className="trailing_returns_si_column">{row.si}</td>
                <td>{row.dd}</td>
                <td>{row.maxdd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="trailing_returns_note">
        Note: Returns above 1 year are annualised.
      </p>
    </div>
  );
};

export default TrailingReturnsTable;
