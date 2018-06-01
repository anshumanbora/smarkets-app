import React,{Component} from 'react';
import axios from 'axios';

/**
 * This component displays details of events. 
 * Details include:
 * Name of event (Australia vs England)
 * Type of event (Football match)
 * Date when the event was created
 * Date and time when the event will take place
 * Parent event (Tournament, Political campaign etc)
 *
 */

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            //Name of the event
            name:props.location.state.name,
            //unique id of the event
            id:props.location.state.id,
            //Details to be filled by making an API call
            details:null
        }
    }

    /*
    * Method where API call will be made to get details of the current event
    * */
    componentDidMount(){
        let apiPrefix = "https://fe-api.smarkets.com/v0/events/id/";

        //concating id of the the event to the url prefix to make the API call
        axios.get(apiPrefix+this.state.id)
            .then( data =>{

                /*
                * If API call successfull then fillDetails method will be called to update
                * the state of details.
                * */
                this.fillDetails(data.data.event);
            }).catch( error=>{
                console.log(error);
        });

    }
    /*
    * Updating state of details
    * */
    fillDetails(details){
        this.setState({details:details})
    }

    /*
    * Rendering the updated states. Rendering is done only if the value of the state
    * is not null. Some values have been sliced to trim out unnecessary details.
    * */
    render(){
        return(
            <div className="row details">
                <div className="col-lg-6 col-xs-6 text-right description">event</div>
                <div className="col-lg-6 col-xs-6 description">details</div>
                <div className="details-name col-lg-6 col-xs-6 text-right">
                    {this.state.name !== null && this.state.name}</div>

                <div className="col-lg-6 col-xs-6 text-left">
                    <br/>
                    <span className="details-header">event type </span>
                    <span className="details-content">
                        {this.state.details !== null?
                        (this.state.details.event_type):
                        "Nada"
                    }</span>

                    <br/>
                    <span className="details-header">date created </span>
                    <span className="details-content">
                        {this.state.details !== null?
                        (this.state.details.created.slice(0,10)):
                        "Nada"
                    }</span>
                    <br/>
                    <span className="details-header"> parent name </span>
                    <span className="details-content">
                        {this.state.details !== null?
                        (this.state.details.parent_name):
                        "Nada"
                    }</span>
                    <br/>
                    <span className="details-header"> start time </span>
                    <span className="details-content">
                        {this.state.details !== null?
                        (this.state.details.start_datetime.slice(11,16)+' hours, '+this.state.details.start_datetime.slice(0,10)):
                        "Nada"
                    }</span>

                </div>
                <div className="col-lg-4 col-xs-4"></div>
                <div className="details-box col-lg-2 col-xs-2"></div>
                <div className="col-lg-6 col-xs-6"></div>
            </div>

            );
    }
}