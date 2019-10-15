import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

export default class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            labels:['Aprobaron', 'Reprobaron'],
            datasets:[{
                data: [95,5],
                backgroundColor:['#2BBF5D','#BF1A2F']
            }]
        }
    }
    render(){
        return(
            <div className="chart">
                <Pie 
                data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height='130px'
                />
            </div>
        )
    }
}