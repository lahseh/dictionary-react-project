import logo from "./logo.png";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Search />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Blessing Orisaleye and is open-sourced on
            GitHub and hosted on Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}
