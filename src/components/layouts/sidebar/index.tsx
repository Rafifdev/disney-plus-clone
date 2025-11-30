import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface MenuProps {
  icon: string;
  url: string;
}

const MenuItem = (props: PropsWithChildren<MenuProps>) => {
  const { children, icon, url } = props;

  return (
    <li>
      <Link to={url} className={styles.menuItem}>
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
    </li>
  );
};

function Sidebar() {
  return (
    <nav className={styles.container}>
      <img
        className={styles.logo}
        width="51px"
        src="https://img.hotstar.com/image/upload/v1710482648/feature/rebranding/disney-plus-logo.svg"
        alt="disney-logo"
      />
      <ul className={styles.menuWrapper}>
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
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
}

export default Sidebar;
