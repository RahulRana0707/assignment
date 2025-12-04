export interface InfoCard {
  title: string;
  description: string;
  link: string;
}

export interface LatestPost {
  date: string;
  title: string;
  snippet: string;
  link: string;
}

export const INFO_CARDS: InfoCard[] = [
  {
    title: 'Get started',
    description:
      'Read our getting started guide to get the most out of your Capitalmind subscription.',
    link: '#',
  },
  {
    title: 'Community',
    description:
      'Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers.',
    link: '#',
  },
  {
    title: 'Visit website',
    description: 'Keep up with our latest content on our website.',
    link: '#',
  },
];

export const LATEST_POSTS: LatestPost[] = [
  {
    date: 'Apr 18, 2024',
    title: 'CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund',
    snippet:
      'We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration of the Gilt funds we hold. Read more...',
    link: '#',
  },
  {
    date: 'Apr 05, 2024',
    title: 'Craftsman Automation: Poised for Growth Amid Temporary Headwinds',
    snippet:
      'Unlock this post by trail. Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds, looks resilient with a focus on growth and innovation....',
    link: '#',
  },
  {
    date: 'Apr 03, 2024',
    title:
      'The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review',
    snippet:
      "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty's 29%. It's been a bit of a rollercoaster, especially these last few months, but that's part of the equity investing. It's like having a compass...",
    link: '#',
  },
  {
    date: 'Mar 27, 2024',
    title: 'A Small CAD for India, Yet Again',
    snippet:
      "Yet again, India's Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back, and less than 2017-18 too. Why net of gold? It's not really a current account import...",
    link: '#',
  },
  {
    date: 'Mar 25, 2024',
    title: 'Poonawalla Fincorp: One right step at a time',
    snippet:
      'There are some winning patterns in investing that keep repeating. One such pattern is when a big company buys a struggling company, fixes old problems, and brings in new leaders to grow the business. This way has often led to...',
    link: '#',
  },
  {
    date: 'Mar 18, 2024',
    title: 'CM Focused: Reducing our allocation to smallcaps & increasing cash',
    snippet:
      'In the last few days, we have seen increased volatility in the mid and small-cap sectors due to regulatory actions, including restrictions on inflows into mid and...',
    link: '#',
  },
];
