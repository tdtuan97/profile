import React from 'react';

import './main.scss';
import {Sidebar} from "../components/Sidebar";

export function Main(props) {
    return (
        <div className="profile-wrapper">
            <Sidebar/>
            {props.children}
        </div>
    );
}
