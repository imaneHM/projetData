import React from 'react';
import { Pie} from 'react-chartjs-2';

const Chart = ({titre, ips, astre, neutre}) => {
    const data = {
        labels: ['IPS','ASTRE','NEUTRE'],
        datasets: [{
          data: [ips, astre, neutre],
          backgroundColor: [
          '#FEE12B',
          '#8FEEFF',
          '#011'
          ],
          hoverBackgroundColor: [
          '#FEE12B',
          '#8FEEFF',
          '#011'
          ]
        }]
      };
    return (
        <div className="col-xl-6 col-md-11">
            <div className="card table-card">
                <div className="card-header">
                    <h5>{titre}</h5> 
                </div>
                </div>
                <div className="card-block" >
                    <div style={{width:"60%"}}>
                        <Pie data={data} />    
                    </div>
                    
                </div>
            </div>
       
    );
}

export default Chart;