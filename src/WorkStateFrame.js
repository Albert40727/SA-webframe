import React from "react";
import './AppStyle.css';
import {
    Table,
    Button
} from 'react-bootstrap';

function WorkStateFrame(){
    return(
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
                    <li><b>個人資訊</b></li>
                    <li><b>我的時段</b></li>
                    <li><b>檢視我的班表</b></li>
                    <li><b>薪資紀錄</b></li>
                </ul>
            </div>
            <div className="content">
                <h1><b>員工資料</b></h1>
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
        </div>
    );
}
export default WorkStateFrame;