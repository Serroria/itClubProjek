import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Navbar />
      <Banner />
      <Category />
      <Trending />
      <Footer />
    </div>
  );
}

export default Home;
