import React, { Component } from 'react';
import {JsonObj} from '../components/JsonObj';
import {Doughnut} from 'react-chartjs-2';
import {FormGroup, Label, Input } from 'reactstrap';


let labels =[]
let chartData =[]
const colors = [];

function filterData (type, key){
    
    let resultInfo = [];
    let counts = {}

    //to check the filter results and filter it
    if(key === "" && type === ""){
        resultInfo = JsonObj
    } else if (key ==="" ) {
        resultInfo = JsonObj.filter(x=>
            x.type === type
        )
    } else if (type === ""){
        resultInfo = JsonObj.filter(x=>
            x.key === key
        )
    } else {
        resultInfo = JsonObj.filter(x=>
            x.key === key && x.type === type
        )
    }

    // count duplicates in array
    resultInfo.map(x=>x.value).forEach(function(x) { counts[x] = (counts[x] || 0)+1; })
    // To make it suitable for canvasjs    
    labels =Object.keys(counts)
    chartData =Object.values(counts)
    
    // get random colors To make it suitable
    function random_rgb() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.5  + ')';
    }         
    for (let i = 0 ; i < chartData.length ; i ++){
        colors.push(random_rgb())
    }
}

    // this object to give information for Chartjs 
    const ChartInfo = (labels, data) =>  ({
        labels,
        labelFontColor: "red",
        datasets: [{
          data,
          backgroundColor: colors
        }],
      });


    // delete labels  
    const options={
        legend: {
            display: false,
        },
    };


export default class FilterChart extends Component {
	constructor(props) {
        super(props);
        this.state = {
          key:"",
          type:"",
          data:""
        }
    }
    
    changeChartInfo=()=>{
        this.setState({
            data: ChartInfo(labels, chartData),
        })
    }

    componentWillMount() {
        filterData(this.state.type, this.state.key)
        this.changeChartInfo()
    }

	handleKey=(e)=>{
        this.setState({key : e.target.value})
        filterData(this.state.type, e.target.value)
        this.changeChartInfo()
	}

	handleType=(e)=>{
        this.setState({type : e.target.value})
        filterData(  e.target.value, this.state.key)
        this.changeChartInfo()
	}
	
	render() {
        let friendlyMessage = ""
        if (chartData.length === 0){ friendlyMessage += "oops no values there!!!"}
		return (
		<div className="search">
            <h1>Filter Values</h1>
		    <div className="down">
				<FormGroup>
					<Label for="exampleSelect">Select Type</Label>
					<Input onChange={this.handleType} name="type" type="select" id="exampleSelect">
						<option value="">Select Type</option>
						<option >filter</option>
						<option>search</option>
						<option>job_application</option>
						<option>navigation</option>
					</Input>
				</FormGroup>

				<FormGroup>
					<Label for="exampleSelect">Select Key</Label>
					<Input onChange={this.handleKey} name="key" type="select" id="exampleSelect">
						<option value="">Select Key</option>
						<option>seo_locations</option>
						<option>job_types</option>
						<option>job_application</option>
						<option>job_navigation</option>
						<option>application_reference</option>
						<option>keyword</option>
						<option>disciplines</option>
					</Input>
				</FormGroup>
			</div>

            <h6>put the mouse over chart to see the value</h6>
			<div className="chartValue">
                <h1>{friendlyMessage}</h1>
                <Doughnut 
                data={this.state.data} 
                options={options}
                width={150}
                height={50}
                />
			</div>
            <div className="warpLabels">
                {labels.map((x,i)=> {
                    return(
                      <p key={i} className="labels">{x}</p>
                    )
                 })
                }
            </div>
		</div>
		);
	}
}

 