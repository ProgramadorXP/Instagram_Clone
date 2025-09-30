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
  topBar: "fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 border-b border-gray-300 md:hidden",
  topBarInner: "w-full flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2",
  logo: "hidden xs:block font-bold text-lg",
  searchBar: "flex items-center gap-3 xs:w-1/2",
  searchInput: "w-full border rounded-sm p-1 border-gray-700 bg-white",
  notification: "hidden xs:block",
  nav: "fixed bottom-0 left-0 right-0 z-10 w-full border-t border-gray-300 flex px-4 py-3 md:w-19 md:h-lvh md:flex-col md:items-center md:justify-between md:py-8 md:border-r md:border-t-0",
  navIcons: "w-full flex items-center justify-between md:flex-col md:items-center md:justify-between md:flex-1 md:mt-12",
  navNotification: "hidden md:block",
  avatar: "cursor-pointer size-6",
};

export default function Navbar() {
  return (
    <>
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
      <nav className={styles.nav}>
        <div>
          <InstagramIcon />
        </div>
        <div className={styles.navIcons}>
          <HomeIcon />

          <SearchIcon />

          <ExploreIcon />

          <ReelsIcon />

          <MessengerIcon />

          <div className={styles.navNotification}>
            <NotificationIcon />
          </div>

          <NewPostIcon />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZnF8ElwCzCgHGTNVnaElToLnw3zE4AgEVQ&s"
            alt=""
            className={styles.avatar}
          />

          <SettingsIcon />
        </div>
      </nav>
    </>
  );
}
