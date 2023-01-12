import './App.css';
import Chart from './components/PieChart';
import Etudiant from './components/Etudiant';
import Hypothese from './components/Hypothese';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {


  const [etudiant, setEtudiants] = useState([]);
  const [note, setNote] = useState([]);
  const [parameters, sethypothese] = useState([{name:"bar", value:10}]);
  const [Ips, setIps] = useState(0);
  const [Astre, setAstre] = useState(0);
  const [Neutre, setNeutre] = useState(0);

  useEffect(() => {
    axios.get('http://localhost/omar/MoteurDeCalcul.php')
    .then(r => {
      setEtudiants(Object.keys(r.data.etudiants));
      setNote(Object.entries(r.data.etudiants).map(e => e[1]['final']));
      sethypothese(r.data.parametres);
      setIps(r.data.nb_ips);
      setAstre(r.data.nb_astre);
      setNeutre(r.data.nb_neutre);
      
    });
  }, []);


  return (
    
    <div className="row" style={{width: "100%"}}>
    <div class="row">
    <div class="column"><Hypothese title="Hypothéses de choix" parametres={parameters} sethypothese={sethypothese} setNote={setNote} setEtudiants={setEtudiants} setAstre={setAstre} setIps={setIps} setNeutre={setNeutre}/></div>
   <div class="column"><div class="chart">
      <Chart titre="Proportions des étudiants ASTRE/IPS" ips={Ips} astre={Astre} neutre={Neutre} /></div><Etudiant titre="Répartition des choix ASTRE/IPS par étudiant" etudiant={etudiant} note={note}/></div>
  </div>
    
    </div>
  );
  
}

export default App;
