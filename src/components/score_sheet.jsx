import React, {Component} from "react";
import { Card } from "react-bootstrap";
import Player from "./team";

class ScoreSheet extends Component{
    state = {
        start_time : this.set_time(),
        teams: this.props.players,
        match: []
    }

    set_time(){
        var t = new Date()
        console.log(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds())
        const time = t.getUTCHours()*3600 + t.getUTCMinutes()*60+ t.getUTCSeconds()
        console.log(time)
        return time
    }

    handleCallbackA = (childData) =>{
        console.log(childData)
        const team_data = this.state.match.concat({team_a: childData})
        this.setState({match: team_data})

    }
    handleCallbackB = (childData) =>{
        console.log(childData)
        const team_data = this.state.match.concat({team_b: childData})
        this.setState({match: team_data})
    }

    render(){
        const team_a = this.state.teams.team_a
        const team_b = this.state.teams.team_b
        const {start_time} = this.state
        console.log(this.state.match)

        return(
                <div className='score_sheet'>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>TEAM 1</Card.Title>
                            <Player start_time={start_time} team={team_a}parentCallback={this.handleCallbackA}></Player>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>TEAM 2</Card.Title>
                            <Player start_time={start_time} team={team_b} parentCallback={this.handleCallbackB}></Player>
                        </Card.Body>
                    </Card>
                </div>
        );
    }
}

export default ScoreSheet;