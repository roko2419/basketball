import React, {Component} from "react";

class Scoring extends Component{
    state = {
        match : []
    }

    update_match(point, player_name){
        var joined = [{
            "player_name": player_name,
            "point": point,
            "time": "t"
        }]
        this.props.parentCallback(joined);
    }

    render(){
        const player_name = this.props.player["player_name"].toUpperCase()
        const player_number = this.props.player["player_number"]
        const one = 1, two =2, three = 3

        return (
            <div className="player_details" key={this.props.i}>
                <div className="name_and_number"><h5>{player_name}</h5><h5>{player_number}</h5></div>
                <button onClick={()=>this.update_match(one, player_name)}>+{one}</button>
                <button onClick={()=>this.update_match(two, player_name)}>+{two}</button>
                <button onClick={()=>this.update_match(three, player_name)}>+{three}</button>
            </div>
        );
    }
}

export default Scoring;