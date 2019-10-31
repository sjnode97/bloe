import React, {Component} from 'react';
import {List,Avatar} from "antd";
import {Link} from "react-router-dom";

class ReplayList extends Component {
    render() {

        let {replise} = this.props
        //console.log(replise,replyCont);
        return (
            <div>
                <List
                    id={"list"}
                    dataSource={replise}
                    renderItem={
                        item=>(
                            <List.Item
                                className={"listItem"}
                                extra={item.ups.length >0?<span className={"answer"}>you{item.ups.length}回复</span> :""}
                            >
                                <List.Item.Meta
                                    className={"abc"}
                                    avatar={
                                        <Avatar src={item.author.avatar_url}/>
                                    }
                                    description={
                                        <span>
                                            <Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>
                                            发表于:{item.create_at.split("T")[0]}
                                        </span>
                                    }
                                >


                                </List.Item.Meta>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:item.content
                                    }}
                                >

                                </div>

                            </List.Item>)

                        }

                >


                </List>
            </div>
        )
    }
}

export default ReplayList;