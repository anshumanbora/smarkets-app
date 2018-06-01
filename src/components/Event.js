import React,{Component} from 'react';
import {Link} from 'react-router-dom';

/*
* Component to render individual events. Each event in turn is a link
* to the its Details component. Props are received from the EventView
* parent Component.
* */
export default class Event extends Component{

    constructor(props){
        super(props);
        this.state = {
            //Name of the event
            name: props.event.name,
            //unique id of the event
            id: props.id
        }
    }

    /*
    * The link routes the user to show details about the event. The Link
    * component takes two parameters:
     * 1. pathname: is the route name of the link
     * 2. state: contains props which are to be passed to the Details component
    * */
    render(){
        return(

            <div className="event">
                <Link className="event-link" to={{pathname:"/details",
                        state:{
                            name:this.state.name,
                            id:this.state.id
                            }
                        }}>{this.state.name}
                </Link>
            </div>
        );
    }
}