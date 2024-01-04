import Homepage from "./pages/homepage/Homepage";
import { HomepageViewModel } from "./pages/homepage/Homepage.vm";

function App() {
  const homepageViewModel = new HomepageViewModel();
  return (
    <div className="bg-gray-100 h-screen m-auto w-full">
      <Homepage homepageViewModel={homepageViewModel} />
    </div>
  )
}

export default App;
