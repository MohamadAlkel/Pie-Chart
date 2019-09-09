import React, { Component } from 'react';
import ShowPieChart from './ShowPieChart';
import {JsonObj} from '../components/JsonObj';
import FilterChart from './FilterChart';


const types = ['filter','search', 'job_application', 'navigation']
const keys = ['seo_locations','job_types','job_application','job_navigation','application_reference','keyword','disciplines']

const allType_data = []

const assignVar = {
    filter_data: [],
    search_data:[],
    job_application_data:[],
    navigation_data:[],
    filter_label: [],
    search_label:[],
    job_application_label:[],
    navigation_label:[]
}



// filtered data to get types  
for (let i = 0 ; i< types.length ; i++){
    window[types[i]] = JsonObj.filter(x=>
    x.type === types[i] 
  )
  allType_data.push(window[types[i]].length)  
}

// filtered data to get keys  
for (let i = 0 ; i< types.length ; i++){
  for (let j = 0 ; j< keys.length; j++){
      window[types[i]+'_'+keys[j]] = JsonObj.filter(x=>
       x.key === keys[j] && x.type === types[i]
       )
       assignVar[`${types[i]}_data`].push(window[types[i]+'_'+keys[j]].length)
  }
  // to get labels and use it in charts
  assignVar[`${types[i]}_data`].forEach((x, index)=> 
    (assignVar[`${types[i]}_data`][index] !== 0)? assignVar[`${types[i]}_label`].push(keys[index]) :""
  )
}

// this object to give information for Chartjs 
const ChartInfo = (labels, data ) =>  ({
  labels,
  labelFontColor: "red",
  datasets: [{
    data,
    backgroundColor: [
        '#e6e4d8',
        '#c3c3bb',
        '#a7c7bf',
        '#a7bcc7',
        '#a7a9c7',
        '#c7a7c2',
        '#c7a7a7',
        '#c1c7a7',
        '#a7c7aa',
        '#809e83',
        '#8283a2',
    ]
  }],
});




export default class PieChart extends Component{
    constructor(props) {
      super(props);
      this.state = {
        allType:"",
        filter:"",
        search:"",
        job_application:"",
        navigation:"",
      }
    }

    componentWillMount() {
        this.changeChartInfo=()=>{
            this.setState({
                allType: ChartInfo(types, allType_data),
                filter: ChartInfo(assignVar.filter_label, assignVar.filter_data.filter(x=> x>0)),
                search: ChartInfo(assignVar.search_label, assignVar.search_data.filter(x=> x>0)),
                job_application: ChartInfo(assignVar.job_application_label, assignVar.job_application_data.filter(x=> x>0)),
                navigation: ChartInfo(assignVar.navigation_label, assignVar.navigation_data.filter(x=> x>0)),
            })
        }
        // to initialize
        this.changeChartInfo()
        // to dynamically generate
        setInterval(() => { this.changeChartInfo()}, 4000)
    }


  render() {
    const {
        allType,
        filter,
        search,
        job_application,
        navigation,
    } = this.state
    const props = {
        allType,
        filter,
        search,
        job_application,
        navigation              
    }

    return (
        <>
           <ShowPieChart {...props} />
           <FilterChart/>
        </>
    );
  }
}












