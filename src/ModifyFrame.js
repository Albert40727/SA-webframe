import React from 'react';
import './AppStyle.css';
import {
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    FormControl
} from 'react-bootstrap';

function event1(){
    alert("輸入有誤");
}
function ModifyFrame(){
    return(
        <div style={{fontFamily:"微軟正黑體"}}>
            <div className="title">
                <h1>-NCU-<br></br>工時管理系統</h1>
                <h3 >計時人員</h3>  
            <Container className="topic" style={{
                    "maxWidth": "100vw",
            }}>
                <Row>
                    <Col className="item" ><b><label onClick = {event1} >個人資訊</label></b></Col>
                    <Col className="item"><b><label onClick = {event1} >我的時段</label></b></Col>
                    <Col className="item"><b><label onClick = {event1} >檢視我的班表</label></b></Col>
                    <Col className="item"><b><label onClick = {event1} >薪資紀錄</label></b></Col>
                </Row>
            </Container>
            </div>
            <Container style={{
                "maxWidth":"50vw"
            }}>
                <Row>
                    <Col><h1 className="mt-4">修改密碼</h1></Col>
                </Row>
                <Row>
                    <Col><b>舊密碼:</b>                           
                        <InputGroup className="mt-2 mb-2">
                            <FormControl
                            placeholder="請輸入舊密碼"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col><b>新密碼:</b>                           
                        <InputGroup className="mt-2 mb-2">
                            <FormControl
                            placeholder="請輸入新密碼"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col><b>再次輸入新密碼:</b>                            
                        <InputGroup className="mt-2 mb-2">
                            <FormControl
                            placeholder="確認密碼"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col><Button variant="success mt-2">送出</Button></Col>
                </Row>
            </Container>
        </div>
    );
}
export default ModifyFrame;