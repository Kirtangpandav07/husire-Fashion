
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Reply from "./pages/Reply";
import Chain from "./pages/Chain";
import Combo from "./pages/Combo";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Reply">
          <Reply />
        </Route>
        <Route path="/Chain">
          <Chain />
        </Route>
        <Route path="/Combo">
          <Combo />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  )
};

export default App;
