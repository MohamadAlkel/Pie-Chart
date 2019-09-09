import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../style/chart.scss';
import { Row, Col } from 'reactstrap';


export default function ShowPieChart(props) {
  return (
    <div className='chart'>
        <h1>Hello Volcanic!!!</h1>
        <h3>Event types</h3>
        <Doughnut 
          data={props.allType} 
          options={props.options}
          width={110}
          height={50}
          color={'#fff'}
        />
        <Row>
          <Col xs="6">
            <h6>Filter</h6>
            <Doughnut 
            data={props.filter} 
            width={90}
            height={50}
            />
          </Col>
          <Col xs="6">
            <h6>Search</h6>
            <Doughnut 
            data={props.search} 
            width={90}
            height={50}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <h6>Job_application</h6>
            <Doughnut 
            data={props.job_application} 
            width={90}
            height={50}
            />
          </Col>
          <Col xs="6">
            <h6>Navigation</h6>
            <Doughnut 
            data={props.navigation} 
            width={90}
            height={50}
            />
          </Col>
        </Row>  
    </div>
  );
}