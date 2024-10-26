
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header/Header';
import Hiker from './Components/Hiker_section/Hiker';
import Section_two from './Components/Section_two/Section_two';


function App() {
  return (
    <div >
      <Header/>
      <Hiker/>
      <Section_two/>
    </div>
  );
}

export default App;
