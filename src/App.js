import {ToastContainer} from "react-toastify"
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Header from "./components/Header";
import View from "./pages/View";
import EditAdd from "./pages/EditAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <ToastContainer/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/add" component = {AddEdit}/>
          <Route path = "/update/:id" component = {EditAdd}/>
          <Route path = "/view/:id" component = {View}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
