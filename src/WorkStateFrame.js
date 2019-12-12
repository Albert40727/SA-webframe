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
    FormCheck
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
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
                        <li><NavLink activeStyle={{color:"white"}} to="/WorInfo"><b>員工資訊</b></NavLink></li>
                        <li><NavLink activeStyle={{color:"white"}} to="/choosenSchedule"><b>我的時段</b></NavLink></li>
                        <li><NavLink activeStyle={{color:"white"}} to="/Schedule"><b>選擇班表</b></NavLink></li>
                        <li><NavLink activeStyle={{color:"white"}} to="/Salary"><b>薪資紀錄</b></NavLink></li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route exact path="/WorInfo">
                    <WorkerInfo/>
                </Route>
                <Route path="/choosenSchedule">
                    <ChoosenSchedule/>
                </Route>
                <Route path="/Schedule">
                    <Schedule/>
                </Route>
                <Route path="/Salary">
                    <Salary/>
                </Route>
            </Switch>
        </Router>
    );
}

function WorkerInfo()
{
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
                            <td><Button variant="danger">離職</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Eric</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="success">在職</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tom</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="success">在職</Button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Amber</td>
                            <td><Button variant="secondary">修改</Button></td>
                            <td><Button variant="success">在職</Button></td>
                        </tr>
                    </tbody>
                </Table>
        </div>
    );
}
function event1(){
    alert("輸入有誤");
}
function Schedule(){
    return(
        <div className="content">
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
function ChoosenSchedule ()
{
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
            <h3>時薪:150</h3>
            <h3>目前累計薪資:4500</h3>
        </div>
    );
}