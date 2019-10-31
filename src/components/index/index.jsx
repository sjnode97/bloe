import React, {Component} from 'react';
import {Row,Col} from "antd";
import IndexMenu from "./indexMenu"
import IndexList from "./indexList"


class Index extends Component {



    render() {

        let tab = this.props.match.params.id

        return (
           <Row className={"wrap"}>
               <Col md={6}>
                   <IndexMenu id={"MenuIndex"}/>
               </Col>
               <Col md={18} className={'IndexList '}>
                   <IndexList  tab={tab}/>
               </Col>
           </Row>
        )
    }
}

export default Index;