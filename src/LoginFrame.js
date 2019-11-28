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

function LoginFrame()
{
    return(     
        <div style={{"fontFamily":"微軟正黑體"}}>
            <div className="title">
                <h1>NCU<br></br>工時管理系統</h1>
                <h3>輸入您的帳號密碼以進行登入</h3>  
            </div>
            <div>  
                <Container style={{
                    "maxWidth": "50vw",
                }}>
                    <Row>
                        <Col className="mt-4"><b>使用者名稱：</b>
                            <InputGroup className="mt-2">
                            <FormControl
                            placeholder="請輸入使用者名稱"
                            />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-2"><b>密碼：</b>
                            <InputGroup className="mt-2">
                            <FormControl
                            placeholder="請輸入密碼" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col><br></br></Col>
                    </Row>
                    <Row >
                        <Col></Col>
                        <Col>
                            <Button variant="primary">登入</Button>
                        </Col>
                        <Col>
                            <Button variant="secondary">忘記密碼?</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>  
        </div>        
    );
}
    
export default LoginFrame;