import React,{Component} from 'react';
import axios from 'axios';
import Event from './Event';


/*
* Main view of the application. Displays the most popular events from the
* Smarkets API. After the page loads, an API call is made to get the current
* most popular events. These events are stored in the state variable as an Array.
* */
export default class View extends Component{
    constructor(props){
        super(props);
        this.state = {
            events:null
        };
    }

    /*
    * Making API call here to get all popular events
    * */
    componentDidMount(){
        axios.get('https://fe-api.smarkets.com/v0/events/popular/')
            .then( response=>{
                    //A successfull API call will populate the state using fillValues method
                    this.fillValues(response.data.results);
                    }
            ).catch(error=>{
                    // console.log(error);
                    }
            );
    }

    /*
    * Generating dynamic Event Components with API response
    * */
    fillValues(array){
            //reading every value from API response and generating unique Event component
            let arrayEvent = array.map((event)=>{
                return <Event key={event.id} event={event} id={event.id}/>
            });

            //updating state with an array of Event components
            this.setState({events:arrayEvent});
    }


    render(){
        return(
            <div>
                <div className="popular-events">
                    <div className="popular">POPULAR</div>
                    EVENTS
                </div>
                <div className="row ">

                    <div className="col-xs-8 col-sm-8 col-lg-10 event-view text-right space-top space-bottom">
                            {(this.state.event!==null)?
                              this.state.events:""
                            }

                    </div>
                    <div className="col-xs-4 col-sm-4 col-lg-2"></div>

                </div>
                <div className="green-padding"></div>
            </div>
        );
    }
}