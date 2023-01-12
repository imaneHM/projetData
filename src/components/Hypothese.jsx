import React, { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from "axios";


const Hypothese = ({title = "hypothése de choix", parametres, setParameters, setEtudiants, setScores, setIps, setAstre, setNeutre}) => {
   

    const updateParameter = (name, value) => {
        const data = { 
          parameter_name: name,
          parameter_importance : value
        };
        axios.post('http://localhost/ASTRE_IPS_V5/update_parameter.php', data)
        .then(r => {
            try {
                setEtudiants(Object.keys(r.data.etudiants));
            } catch (error) {
                console.log(r.data);
            }
            
            setScores(Object.entries(r.data.etudiants).map(e => e[1]['final']));
            setIps(r.data.nb_ips);
            setAstre(r.data.nb_astre);
            setNeutre(r.data.nb_neutre);
        });
      };
    
    return (
        <div className="col-xl-12 col-md-12">
        <div className="card table-card">
            <div className="card-header">
                <h5>{title}</h5>
            </div>
            <div className="card-block row">
                {
                    parametres.map(param => (
                    
                    <div className="col-3 mt-5" key={param.name}>
                        <div className="text-center-h7">{param.name} </div>
                        <div className="text-center-h5"> {param.value}</div>
                        <Slider defaultValue={param.value} min={-10} max={10}
                            onChange={e => {
                                setParameters([...parametres].map(object => {
                                    if(object.name === param.name) {
                                    return {
                                        ...object,
                                        value: e
                                    }
                                    }
                                    else return object;
                                }));
                                
                                updateParameter(param.name, e);
                            }} 


    />
                    </div>)
                    )
                }

                
            </div>
        </div>
        </div>

        
    );
}

export default Hypothese;