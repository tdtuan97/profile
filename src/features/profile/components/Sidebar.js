import React from 'react';
import {
    Link, useLocation
} from "react-router-dom";

import {Button} from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    MenuOutlined,
    ContainerOutlined,
    ReconciliationOutlined,
    MailOutlined,
    FacebookOutlined,
    GithubOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
import './sidebar.scss';
import user from "../../../mock/profile.json";

function handleClickSocial(e) {
    e.preventDefault();
    window.open(e.currentTarget.value, '_blank');
}

export function Sidebar() {
    let location = useLocation();
    const cls_home = location.pathname === '/home' || location.pathname === '/' ? 'active' : '';
    const cls_about = location.pathname === '/about' ? 'active' : '';
    const cls_resume = location.pathname === '/resume' ? 'active' : '';
    const cls_portfolio = location.pathname === '/portfolio' ? 'active' : '';
    const cls_contact = location.pathname === '/contact' ? 'active' : '';

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="box-avatar">
                    <span className="avatar-circle">
                        <img  src={user.avatar_img} alt={user.full_name}/>
                    </span>
                    <h2 className="profile-name">{user.full_name}</h2>
                </div>
                <div className="box-menu">
                    <ul>
                        <li>
                            <Link to="/home" className={cls_home}><HomeOutlined/> <span className="label">Home</span></Link>
                        </li>
                        <li>
                            <Link to="/about" className={cls_about}><UserOutlined/> <span className="label">About</span></Link>
                        </li>
                        <li>
                            <Link to="/resume" className={cls_resume}><ReconciliationOutlined/> <span className="label">Resume</span></Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={cls_portfolio}><ContainerOutlined/> <span className="label">Portfolio</span></Link>
                        </li>
                        <li>
                            <Link to="/contact" className={cls_contact}><MailOutlined/> <span className="label">Contact</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="box-footer">
                    <ul className="social">
                        <li>
                            <Button type="link" value={user.facebook}
                                    onClick={(e) => handleClickSocial(e)}><FacebookOutlined/></Button>
                        </li>
                        <li>
                            <Button type="link" value={user.linkedin}
                                    onClick={(e) => handleClickSocial(e)}><LinkedinOutlined/></Button>
                        </li>
                        <li>
                            <Button type="link" value={user.github}
                                    onClick={(e) => handleClickSocial(e)}><GithubOutlined/></Button>
                        </li>
                    </ul>
                    <div className="copy">
                        <p>
                            2021 © Tran Tuan.
                            <br/>
                            All Right Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
