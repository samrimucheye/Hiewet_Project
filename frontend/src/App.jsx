import React from "react";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <section>תוכן</section>
      </main>
      <footer>
        <section>&copy; כל הזכויות שמורות להייוות דלתות 2024</section>
      </footer>
    </div>
  );
};

export default App;
