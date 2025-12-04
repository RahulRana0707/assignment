import './index.css';
import { INFO_CARDS, LATEST_POSTS } from '../../constants/home-page-content';
import InfoCard from '../../components/info-card';
import BlogPostCard from '../../components/blog-post-card';

const HomePage = () => {
  return (
    <div className="home_page_container">
      <h1 className="home_page_title">Home</h1>

      <div className="home_page_info_cards">
        {INFO_CARDS.map((card, index) => (
          <InfoCard key={index} card={card} />
        ))}
      </div>

      <section className="home_page_latest_posts">
        <h2 className="home_page_latest_posts_title">Latest Posts</h2>
        <div className="home_page_posts_list">
          {LATEST_POSTS.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
