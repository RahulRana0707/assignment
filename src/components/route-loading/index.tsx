import { LoaderCircle } from 'lucide-react';
import './index.css';

const RouteLoading = () => {
  return (
    <div className="route_loading_container">
      <LoaderCircle className="route_loading_icon" size={48} />
    </div>
  );
};

export default RouteLoading;
