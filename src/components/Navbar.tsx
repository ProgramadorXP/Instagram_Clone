import ExploreIcon from "./icons/ExploreIcon";
import HomeIcon from "./icons/HomeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import InstagramLogo from "./icons/InstagramLogo";
import MessengerIcon from "./icons/MessengerIcon";
import NewPostIcon from "./icons/NewPostIcon";
import NotificationIcon from "./icons/NotificationIcon";
import ReelsIcon from "./icons/ReelsIcon";
import SearchIcon from "./icons/SearchIcon";
import SettingsIcon from "./icons/SettingsIcon";

const styles = {
  topBar:
    "fixed top-0 bg-white left-0 right-0 z-10 flex items-center justify-between px-4 py-3 border-b border-gray-300 md:hidden",
  topBarInner:
    "w-full flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2",
  logo: "hidden xs:block font-bold text-lg",
  searchBar: "flex items-center gap-3 xs:w-1/2",
  searchInput: "w-full border rounded-sm p-1 border-gray-700 bg-white",
  notification: "hidden xs:block",
  nav: `
    fixed bottom-0 bg-white left-0 right-0 z-10 w-full border-t border-gray-300 flex px-4 py-3
    md:w-19 md:h-lvh md:flex-col md:items-center md:justify-between md:py-8 md:border-r md:border-t-0
    [@media(min-width:1264px)]:w-[245px] [@media(min-width:1264px)]:items-start
    `,
  navIcons: `
    w-full flex items-center justify-between
    md:flex-col md:items-center md:justify-between md:flex-1 md:mt-12
    [@media(min-width:1264px)]:items-start [@media(min-width:1264px)]:gap-2
  `,
  navItem:
    "md:w-full flex items-center gap-3 cursor-pointer p-2 rounded-lg md:hover:bg-gray-100 transition",
  navText: "hidden [@media(min-width:1264px)]:inline font-medium",
  searchIcon: "hidden md:flex",
  navNotification: "hidden md:flex",
  settingsIcon: "hidden md:flex",
  avatar: "cursor-pointer size-6 rounded-full",
};

export default function Navbar() {
  return (
    <>
      {/* Top bar (mobile only) */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.logo}>
            <InstagramLogo />
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
            <div className={styles.notification}>
              <NotificationIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar nav */}
      <nav className={styles.nav}>
        <div className="px-3 hidden md:block">
          <InstagramIcon />
          <InstagramLogo />
        </div>

        <div className={styles.navIcons}>
          <div className={styles.navItem}>
            <HomeIcon />
            <span className={styles.navText}>Home</span>
          </div>

          <div className={`${styles.navItem} ${styles.searchIcon}`}>
            <SearchIcon />
            <span className={styles.navText}>Search</span>
          </div>

          <div className={styles.navItem}>
            <ExploreIcon />
            <span className={styles.navText}>Explore</span>
          </div>

          <div className={styles.navItem}>
            <ReelsIcon />
            <span className={styles.navText}>Reels</span>
          </div>

          <div className={styles.navItem}>
            <MessengerIcon />
            <span className={styles.navText}>Messages</span>
          </div>

          <div className={`${styles.navItem} ${styles.navNotification}`}>
            <NotificationIcon />
            <span className={styles.navText}>Notifications</span>
          </div>

          <div className={styles.navItem}>
            <NewPostIcon />
            <span className={styles.navText}>Create</span>
          </div>

          <div className={styles.navItem}>
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="profile"
              className={styles.avatar}
            />
            <span className={styles.navText}>Profile</span>
          </div>

          <div className={`${styles.navItem} ${styles.settingsIcon}`}>
            <SettingsIcon />
            <span className={styles.navText}>More</span>
          </div>
        </div>
      </nav>
    </>
  );
}
