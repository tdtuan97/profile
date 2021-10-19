import React from 'react';
import {
    AntDesignOutlined,
    CodeSandboxOutlined,
    GithubOutlined,
    SlackOutlined,
    Html5Outlined, ArrowRightOutlined,
} from '@ant-design/icons';
import {Row, Col} from 'antd';
import {Main} from "../layouts/Main";
import {Button, Avatar} from 'antd';
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

export function About() {
    const now = new Date();
    const age = now.getFullYear() - user.born;

    return (
        <Main>
            <div className="page about-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>About Me.</h2>
                    </div>
                    <div className="about">
                        <Row gutter={32}>
                            <Col xs={24} lg={14} xl={16}>
                                <div className="about-block personal-info">
                                    <h3>{user.title}</h3>
                                </div>
                                {user.descriptions.map(function (content, key) {
                                    return <p key={key}>{content}</p>
                                })}
                            </Col>
                            <Col xs={24} lg={10} xl={8}>
                                <div className="about-block about-info">
                                    <h3>Personal Information</h3>
                                    <ul>
                                        <li>
                                            <span className="title">Name</span>
                                            <span className="value">{user.full_name}</span>
                                        </li>
                                        <li>
                                            <span className="title">Age</span>
                                            <span className="value">{age}</span>
                                        </li>
                                        <li>
                                            <span className="title">Address</span>
                                            <span className="value">{user.address}</span>
                                        </li>
                                        <li>
                                            <span className="title">Email</span><span
                                            className="value">{user.email}</span>
                                        </li>
                                        <li>
                                            <span className="title">Phone</span><span
                                            className="value">{user.phone_number}</span>
                                        </li>
                                        <li>
                                            <span className="title">Freelance</span>
                                            <span className="value">Available</span>
                                        </li>
                                    </ul>
                                    <div className="resume-button">
                                        <Button ghost
                                                className="base-button"
                                                size="large"
                                        >Download Resume</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section-sub services">
                        <Row gutter={16}>
                            <Col span={24}>
                                <div className="subheading">
                                    <h3>Services</h3>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="service-item">
                                    <div className="icon"><AntDesignOutlined/></div>
                                    <h4>Design</h4>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="service-item">
                                    <div className="icon"><CodeSandboxOutlined/></div>
                                    <h4>Development</h4>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="service-item">
                                    <div className="icon"><GithubOutlined/></div>
                                    <h4>Deploy</h4>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="service-item">
                                    <div className="icon"><SlackOutlined/></div>
                                    <h4>Monitor</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section-sub skills">
                        <Row gutter={16}>
                            <Col span={24}>
                                <div className="subheading">
                                    <h3>Skills</h3>
                                </div>
                            </Col>
                            {user.skills.map(function (skill, idx) {
                                return <Col xs={12} sm={12} md={8} xxl={4} key={idx}>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <Avatar
                                                size={100}
                                                src={skill.image}
                                            />
                                        </div>
                                        <h4>{skill.name}</h4>
                                    </div>
                                </Col>
                            })}
                        </Row>
                    </div>
                    <div className="action-more">
                        <span className="btn-wrapper btn-back">
                            <Link to={'home'}>
                                <Button ghost className="base-button" size="large">Back</Button>
                            </Link>
                        </span>
                        <span className="btn-wrapper btn-next"><Link to={'resume'}>
                            <Button ghost className="base-button" size="large">Next</Button></Link>
                        </span>
                    </div>
                </section>
            </div>
        </Main>
    );
}
