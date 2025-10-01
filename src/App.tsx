import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Stories from "./components/Stories";
import UserSuggestions from "./components/UserSuggestions";

function App() {

  return (
    <div className="w-full min-h-lvh">
      <Navbar />
      <main className="w-full pb-12 pt-[59px] md:pl-[76px] [@media(min-width:1264px)]:pl-[245px] md:pr-[76px] md:pt-4 flex">
        <div className="w-full flex flex-col items-center">
          <Stories />
          <Post />
        </div>
        <UserSuggestions />
      </main>
    </div>
  )
}

export default App
