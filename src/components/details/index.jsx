import React, {Component} from 'react';
import data from "./data"
import Replay from "./replayList"
import TxtData from "./txtData"
export default class Details extends Component {
    render() {
        return (
            <div className={"wrap"}>
                <TxtData></TxtData>
                <Replay
                    replise={data.data.replies}
                    replyCont={data.data.reply_count}
                ></Replay>


            </div>
        )

    }
}