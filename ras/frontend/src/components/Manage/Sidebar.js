import React from "react";
import { NavLink } from "react-router-dom";

function SidebarManage(){
    return (
        <React.Fragment>
            <div className='sidebar-manage'>
                <ul>
                    <li><NavLink to="/manage"><i className="fa fa-book"></i> Boeken</NavLink></li>
                    <li><NavLink to="/manage/challenges"><i className="fa fa-list"></i> Challenges</NavLink></li>
                </ul>
                
            </div>
        </React.Fragment>
    )

}

export default SidebarManage;