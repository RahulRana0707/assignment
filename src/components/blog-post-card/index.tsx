import React from 'react';
import './index.css';
import { LatestPost } from '../../constants/home-page-content';

interface BlogPostCardProps {
  post: LatestPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="blog_post_card">
      <div className="blog_post_card_date">{post.date}</div>
      <h3 className="blog_post_card_title">{post.title}</h3>
      <p className="blog_post_card_snippet">{post.snippet}</p>
      <a href={post.link} className="blog_post_card_link">
        Read full post
      </a>
    </article>
  );
};

export default BlogPostCard;
