import TrailingReturnsTable from '../../components/trading-returns-table';
import EquityCurveChart from '../../components/equity-curve-chart';
import './index.css';

const PortfolioPage = () => {
  return (
    <section className="portfolio_page_container">
      <TrailingReturnsTable />
      <EquityCurveChart />
    </section>
  );
};

export default PortfolioPage;
