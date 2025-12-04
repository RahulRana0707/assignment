import React from 'react';
import { ExternalLink } from 'lucide-react';
import './index.css';
import { InfoCard as InfoCardType } from '../../constants/home-page-content';

interface InfoCardProps {
  card: InfoCardType;
}

const InfoCard: React.FC<InfoCardProps> = ({ card }) => {
  return (
    <div className="info_card">
      <div className="info_card_header">
        <h3 className="info_card_title">{card.title}</h3>
        <a
          href={card.link}
          className="info_card_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} className="info_card_icon" />
        </a>
      </div>
      <p className="info_card_description">{card.description}</p>
    </div>
  );
};

export default InfoCard;
