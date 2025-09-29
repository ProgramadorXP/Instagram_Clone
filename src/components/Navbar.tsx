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

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-zinc-100 border-b border-gray-300 md:hidden">
        <div className="w-full flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
          <div className="hidden xs:block font-bold text-lg">
            <InstagramLogo />
          </div>
          <div className="flex items-center gap-3 xs:w-1/2">
            <input
              type="text"
              className="w-full border rounded-sm p-1 border-gray-700 bg-white"
              placeholder="Search"
            />
            <div className="hidden xs:block">
              <NotificationIcon />
            </div>
          </div>
        </div>
      </nav>

      <nav className="hidden md:flex fixed w-19 h-lvh flex-col items-center justify-between py-8 px-4 bg-zinc-100">
        <div>
          <InstagramIcon />
        </div>
        <div className="flex flex-col items-center justify-between flex-1 mt-12">
          <HomeIcon />

          <SearchIcon />

          <ExploreIcon />

          <ReelsIcon />

          <MessengerIcon />

          <NotificationIcon />

          <NewPostIcon />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZnF8ElwCzCgHGTNVnaElToLnw3zE4AgEVQ&s"
            alt=""
            className="cursor-pointer"
          />

          <SettingsIcon />
        </div>
      </nav>
    </>
  );
}
