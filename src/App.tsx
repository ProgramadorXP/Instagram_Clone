import Navbar from "./components/Navbar";
import Stories from "./components/Stories";

function App() {

  return (
    <div className="w-full min-h-lvh">
      <Navbar />
      <main className="w-full h-lvh pt-[59px] md:pl-[76px] md:pt-4 flex justify-center">
        <Stories />
        
      </main>
    </div>
  )
}

export default App
