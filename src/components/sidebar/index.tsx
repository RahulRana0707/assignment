import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  Beaker,
  Folder,
  UserPlus,
  Gift,
  User,
} from 'lucide-react';
import './index.css';
import logo from '../../assets/capital-mind-premium.png';
import { NAVIGATION_PATH } from '../../constants/navigation-path';
import { USER_DATA } from '../../constants/user-data';

const MENUS = [
  {
    label: 'Home',
    icon: Home,
    link: NAVIGATION_PATH.HOME,
  },
  {
    label: 'Portfolios',
    icon: Briefcase,
    link: NAVIGATION_PATH.PORTFOLIO,
  },
  {
    label: 'Experimentals',
    icon: Beaker,
    link: '#',
  },
  {
    label: 'Slack Archives',
    icon: Folder,
    link: '#',
  },
  {
    label: 'Refer a friend',
    icon: UserPlus,
    link: '#',
  },
  {
    label: 'Gift a subscription',
    icon: Gift,
    link: '#',
  },
  {
    label: 'Account',
    icon: User,
    link: '#',
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar_container">
      <div className="sidebar_logo_container">
        <img src={logo} alt="The Capitalmind premium Logo" />
      </div>

      {/* main */}
      <div className="sidebar_navigation_container">
        <nav className="sidebar_navigation">
          {MENUS.map((menu) => {
            const isActive = location.pathname === menu.link;

            return (
              <Link
                key={menu.label}
                to={menu.link}
                className={`sidebar_menu_item ${
                  isActive ? 'sidebar_menu_item_active' : ''
                }`}
              >
                {menu.icon && (
                  <menu.icon size={20} className="sidebar_menu_icon" />
                )}
                <span className="sidebar_menu_label">{menu.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar_footer_container">
        <div className="sidebar_footer_user">
          <div className="sidebar_footer_avatar">{USER_DATA.initials}</div>
          <div className="sidebar_footer_subscription">
            <span>{USER_DATA.subscriptionType}</span>
            <span>Valid till {USER_DATA.validTill}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
