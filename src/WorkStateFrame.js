import React from "react";
import './AppStyle.css';
import {
    Button,
    Table,
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    Form,
    FormCheck
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
}from 'react-router-dom';
export default function WorkStateFrame(){
    return(
        <Router>
            <div>
                <div className="menu">
                    <center>
                    <b> 
                        <h1 className="mt-3" style={{
                            "color":"yellow"}}>&lt;&lt;NCU&gt;&gt;<br></br></h1>
                        <h1>工時管理系統</h1>
                        <h3>計時人員</h3>
                    </b>
                    </center>
                    <hr></hr>
                    <ul>
                        <li><MenuLink 
                            to="/"
                            activeOnlyWhenExact={true}
                            label="員工資訊"></MenuLink></li>
                        <li><MenuLink 
                            to="/schedule"
                            label="選擇班表"></MenuLink>
                        </li>
                        <li><MenuLink 
                            to="/choosenSchedule"
                            label="我的時段"></MenuLink></li>
                        <li><MenuLink 
                            to="/salary"
                            label="薪資紀錄"></MenuLink></li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route exact path="/">
                    <WorkerInfo/>
                </Route>
                <Route path="/choosenSchedule">
                    <ChoosenSchedule/>
                </Route>
                <Route path="/schedule">
                    <Schedule/>
                </Route>
                <Route path="/salary">
                    <Salary/>
                </Route>
                <Route path="/addworker">
                    <AddWorker/>
                </Route>
            </Switch>
        </Router>
    );
}

function MenuLink ({activeOnlyWhenExact,to,label}){
    let match = useRouteMatch ({
        exact:activeOnlyWhenExact,
        path:to
    })
    return(
        <div>
            <Link to={to} style={
                {color:"white",
                textDecoration:"none",
                fontFamily:"微軟正黑體",
                fontWeight:"Bold"}}>
                    {label}
            </Link>
        </div>
    );
}

function WorkerInfo(){
    return(
        <div className="content">
            <h1><b>員工資訊</b></h1>
                <Table responsive style={{maxWidth:"40vw"}}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>員工姓名</th>
                            <th>修改</th>
                            <th>在職狀態</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Albert</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="outline-danger">離職</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Eric</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="outline-success">在職</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tom</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="outline-success">在職</Button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Amber</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="outline-success">在職</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="primary"><Link to="/addworker"style={
                {color:"white",
                textDecoration:"none",
                fontFamily:"微軟正黑體"}}>新增員工</Link></Button>
                <Button variant="danger" style={{marginLeft:"20px"}}>刪除員工</Button>                
            </div>
    );
}
function event1(){
    alert("輸入有誤");
}
function Schedule(){
    return(
        <div className="content">
            <h2><b>2019/12/26-29班表</b></h2>
            <Table striped bordered hover style={{maxWidth:"60vw"}}>
                <thead>
                    <tr>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                        <td>12:00-14:00<br/>17:00-20:00</td>
                    </tr>
                    <tr>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                        <td>
                            <center>
                                <Button variant="success">新增</Button><br/>
                                <Button variant="danger" className="mt-3">刪除</Button><br/>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
function ChoosenSchedule (){
    return(
        <div className="content">
            <Table bordered style={{maxWidth:"60vw"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期七</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>我的時段</th>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                        <td>12:00-14:00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
function Salary () {
    return(
        <div className="content">
            <h2>2019/12/26-29薪資計算結果:</h2>
            <h3>時薪:150</h3>
            <h3>目前累計小時數:30hr</h3>
            <h3>目前累計薪資:4500</h3>
        </div>
    );
}
function AddWorker(){
    return(
        <div className="content" style={{maxWidth:"50vw"}}>
            <Form>
                <Form.Group controlID="WorkerInfo">
                    <Form.Label>員工編號</Form.Label>
                    <Form.Control placeholder="輸入編號" ></Form.Control>
                    <Form.Label>員工姓名</Form.Label>
                    <Form.Control placeholder="輸入姓名"></Form.Control>
                    <Form.Label>員工信箱</Form.Label>
                    <Form.Control type="email" placeholder="輸入信箱"></Form.Control>
                    <Form.Label>員工電話號碼</Form.Label>
                    <Form.Control placeholder="輸入電話號碼"></Form.Control>
                </Form.Group>
                <Button variant="primary">新增</Button>
                <Button variant="secondary" style={{marginLeft:"20px"}}>取消</Button>
            </Form>
        </div>
    );
}