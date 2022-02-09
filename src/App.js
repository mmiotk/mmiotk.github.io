import logo from './logo.svg';
import './App.css';
import personal from "./data/personal.json";
import mail from "./images/mail.png"
function App() {
  return (
    <div className="App">
      <h1>Mateusz Miotk homepage in React</h1>
        <h2>Kontakt oraz konsultacje</h2>
        <p>
            <img alt="" src={mail}/><br/>
                <strong>Pokój</strong>: <mark><strong>4.10</strong></mark> (nowy budynek Instytutu Informatyki)<br/>
                <strong>Konsultacje w semestrze zimowym: <mark> {personal.day_of_consultation} godz. {personal.hour_of_consultation} - Pokój 4.10</mark></strong><br/>
                <strong>Istnieje możliwość komunikowania się ze mną za pomocą MS Teams prawie 24/7.</strong><br/>

                <strong><mark>Zajęcia są prowadzone przez platformę MSTeams, <a href="https://stepik.org">stepik.org</a> oraz <a href="https://katacoda.com">katacoda.com</a>.</mark></strong>
        </p>
    </div>
  );
}

export default App;
