import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { Bar } from 'react-chartjs-2';

const Etudiant = ({titre, etudiant, note}) => {


    const [backgrounds, setBackgrounds] = useState([]);

    const changeBackgrounds = () => {
      const arr = [];
      for(let i = 0; i < note.length; i++){
        if(note[i] >= 0 ){
          arr.push('#FEE12B');
        }else
          arr.push('#8FEEFF');
    
      }
      setBackgrounds(arr);
    }
    useEffect(() => {
      console.log(etudiant);
      changeBackgrounds();
    },[note]);
   
      
    const data = {
        labels: etudiant,
        
        datasets: [
          {
          
            label:'probabilité',
            data: note,
            backgroundColor: backgrounds,
            borderWidth: 2,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display:false,
            position: 'right',
          },
          titre: {
            display: true,
            text: 'Repartition des choix ASTRE/IPS par étudiant',
          },
        },
      };

      useEffect(() => {    // Met à jour le titre du document via l’API du navigateur   
           
        });
    return (
        <div className="col-xl-12 col-md-12">
          <div className="card table-card">
                <div className="card-header">
                    <h5>{titre}</h5> 
                </div>
                </div>
                <div className="card-block">
                    <div>
                        <Bar data={data} options={options} height={1500}/>    
                    </div>
                    
                </div>
            </div>
       
    
    );
}

export default Etudiant;
