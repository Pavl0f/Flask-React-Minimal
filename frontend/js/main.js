import React, { Component } from "react";
import {Button} from "./ui/buttons"
import {TextBox} from './ui/texts'
import request from "superagent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "arg":""
        };
    }

    onClick(e){
        request.post('/testapi').set('Content-Type', 'application/json; charset=utf-8').send(this.state).end((error, res) => {                
            var res = JSON.parse(res.text);
            console.log(res);
        });        
    }

    render() {

        return (
            <div>
                <TextBox id="arg" label="arg" value={this.state["arg"]} onChange={(e)=>this.setState({"arg":e.target.value})}/>
                <Button color="BLUE" onClick={(e)=>this.onClick(e)}>送信</Button>
            </div>

        );
    }
}

export default Main;
