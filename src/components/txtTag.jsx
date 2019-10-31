import React, {Component} from 'react';
import {Tag} from "antd";
import "antd/dist/antd.min.css"

let tab ={
    top:{
        color:'red',
        txt:'置顶'
    },
    good:{
        color:'lime',
        txt:'精华'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    job:{
        color:'magenta',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    },
    share:{
        color:'orange',
        txt:'分享'
    }

}

function getTab(item) {
    return(
        item.top?"top":
            item.good?"good":
                item.tab
    )
}
class Index extends Component {
    render() {
        // console.log(this.props);
        let noTag = tab[getTab(this.props.data)];
        return (

            <div>
                <Tag color={noTag.color}>{noTag.txt} </Tag>
            </div>
        )
    }
}

export default Index;