import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import type { User } from "firebase/auth";

interface MenuProps {
  icon: string;
  url?: string;
  onClick?: () => void;
}

interface SidebarProps {
  onLogout: () => void;
  user: User | null;
}

const MenuItem = (props: PropsWithChildren<MenuProps>) => {
  const { children, icon, url, onClick } = props;

  return (
    <li className={styles.menuItem}>
      {url ? (
        <Link to={url} className={styles.link}>
          <span
            className={clsx([
              "material-symbols-outlined icon-hover",
              styles.menuIcon,
            ])}
          >
            {icon}
          </span>
          <span className={styles.menuName}>{children}</span>
        </Link>
      ) : (
        <>
          <span
            onClick={onClick}
            className={clsx([
              "material-symbols-outlined icon-hover",
              styles.menuIcon,
            ])}
          >
            {icon}
          </span>
          <span className={styles.menuName}>{children}</span>
        </>
      )}
    </li>
  );
};

function Sidebar(props: SidebarProps) {
  const { onLogout, user } = props;
  return (
    <nav className={styles.container}>
      <img
        className={styles.logo}
        width="51px"
        src="https://img.hotstar.com/image/upload/v1710482648/feature/rebranding/disney-plus-logo.svg"
        alt="disney-logo"
      />
      <ul className={styles.menuWrapper}>
        {!user && (
          <MenuItem url="/login" icon="account_circle">
            Login
          </MenuItem>
        )}
        <MenuItem url="/search" icon="search">
          Search
        </MenuItem>
        <MenuItem url="/" icon="home">
          Home
        </MenuItem>
        <MenuItem url="/movies" icon="movie">
          Movies
        </MenuItem>
        <MenuItem url="/tvseries" icon="tv_gen">
          Series
        </MenuItem>

        {user && (
          <MenuItem icon="logout" onClick={onLogout}>
            Logout
          </MenuItem>
        )}
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
}

export default Sidebar;
