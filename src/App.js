import Cards from "./components/cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex gap-4 justify-content-center pt-5">
        <Cards
          title="JavaScript and Js"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="JavaScript, often abbreviated as JS, is an interpreted programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of th…"
        />
        <Cards
          title="ReactJS"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."
        />
        <Cards
          title="Nodejs and Express"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          prag="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
        />
      </div>
    </>
  );
}

export default App;
