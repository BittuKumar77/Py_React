import Cards from "./components/cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex gap-4 justify-content-center pt-5">
        <Cards
          title="JavaScript"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
        />
        <Cards
          title="ReactJS"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
        />
        <Cards
          title="Nodejs and Express"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
        />
      </div>
    </>
  );
}

export default App;
