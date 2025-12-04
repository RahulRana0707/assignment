import { ReactNode } from 'react';
import './index.css';

const PageViewWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="page_view_wrapper_area">
      <div className="page_view_wrapper_container">{children}</div>
    </section>
  );
};

export default PageViewWrapper;
