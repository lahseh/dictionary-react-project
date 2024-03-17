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
          <Search defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Blessing Orisaleye and is{" "}
            <a href="https://github.com/lahseh/dictionary-react-project">
              {" "}
              open-sourced on GitHub{" "}
            </a>
            and hosted on{" "}
            <a href="https://extraordinary-pixie-a14005.netlify.app/">
              {" "}
              Netlify{" "}
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
