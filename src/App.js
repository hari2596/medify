import "./App.css";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Home/Homepage";
import { SnackbarProvider } from 'notistack'


function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}



export default App;
