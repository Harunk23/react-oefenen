import Logo from './logo';
import Navigatie from './Navigatie';
import Verzekering from './Verzekering';
import Stappenplan from './Stappenplan';
import Beoordeling from './Beoordeling';
import Footer from './Footer';
import './components/style.css';

function App() {
  return (
    <div className="">
      <header className="">
        <title>Opmaatvergelijken</title>
      </header>

      <div><Logo/></div>
      <div><Navigatie/></div>
      <div><Verzekering/></div>
      <div><Stappenplan/></div>
      <div><Beoordeling/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;