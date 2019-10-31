import React, {Component} from 'react';
import {Avatar,List} from "antd";
import {Link} from "react-router-dom";
import axios from "axios"
import TxtTag from "../txtTag"
import {connect} from "react-redux";
// import data from "./data"

class IndexList extends Component {
    constructor(ag){
        super(ag)
        this.state={
            page:1
        }

        this.getData(this.props.tab,this.state.page)
    }
    shouldComponentUpdate(nextProps, nextState) {
        //console.log(nextProps);
        if (this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page)
        }
        if (this.props.tab !== nextProps.tab){
            this.setState({
                page:1
            })
            this.getData(nextProps.tab,1)
        }
        return true
    }
    //https://cnodejs.org/api/v1/topics?tab=$1&page=1&limit=10 5db399c6ece3813ad9ba44d5
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
                .then((res)=>{

                    dispatch({
                        type:"LIST_UPDATA",
                        data:res.data
                    })
                })
                .catch((err)=>{
                    alert(err);
                })
        })
    }
    render() {
        let {loading,data} = this.props
        let  pagination = {
            current:this.state.page,
            pageSize:10,
            total:500,
            onChange:(( current )=>{
                // console.log( current )
                this.setState({
                    page:current
                })
            })
        }
        return (
            <div>
                <List
                    loading={loading}
                    dataSource={data}
                    pagination={pagination}
                    renderItem={
                        item => (
                            <List.Item
                                actions={
                                    [
                                        "回复"+item.reply_count,
                                        "访问"+item.visit_count
                                    ]
                                }
                            >
                                <List.Item.Meta
                                    className={'pic'}
                                    avatar={
                                        <Avatar src={item.author.avatar_url}/>
                                    }
                                    title={
                                        <div>
                                            <TxtTag data={item}></TxtTag>
                                            <Link to={"/detalis/"+item.id}>{item.title}</Link>
                                        </div>}
                                    description={
                                        <p>
                                            <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                            发表于:{item.create_at.split("T")[0]}
                                        </p>
                                    }
                                ></List.Item.Meta>
                            </List.Item>
                        )
                    }
                >

                </List>
            </div>
        )
    }
}
export default connect(state =>state.list)(IndexList);
