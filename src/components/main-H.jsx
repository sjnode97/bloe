import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Layout,Row,Col,Divider,Menu,Icon} from "antd";
import "antd/dist/antd.css"
class MainHead extends Component {
    render() {
        return (
            <div>
                <Layout.Header className={"dwrap"}>
                    <Row className={"wrap"}>
                        <Col md={6}>
                            <h1 id={"logo"}><Link to={"/"} className={"logo-m"}>discussion</Link></h1>
                        </Col>
                        <Col md={18}>
                            <Divider type={"vertical"} className={"headerDivider"}></Divider>
                            <Menu mode={"horizontal"} theme={"light"} className={"T-Menu"} id={"menu"}>
                                <Menu.Item><Link to={"/"}><Icon type="home"/>首页</Link></Menu.Item>
                                <Menu.Item><Link to={"/book"}><Icon type='book'/>教程</Link></Menu.Item>
                                <Menu.Item><Link to={"/about"}><Icon type='info-circle-o'/>关于</Link></Menu.Item>
                            </Menu>
                        </Col>

                    </Row>
                    
                </Layout.Header>
            </div>
        )
    }
}

export default MainHead;