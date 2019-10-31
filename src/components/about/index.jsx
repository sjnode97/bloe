import React, {Component} from 'react';
import data from "./data"
import {Card} from "antd";

class Bbout extends Component {
    render() {

        return (
            <div className={"wrap"}>

                {
                    data.map((item,index)=>{
                        return(
                            <Card
                                key={index}
                                title={item.title}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:item.content
                                    }}
                                ></div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Bbout;