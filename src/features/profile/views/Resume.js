import React from 'react';
import {} from '@ant-design/icons';
import {Row, Col, Timeline, Progress, Button} from 'antd';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

export function Resume() {
    return (
        <Main>
            <div className="page resume-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>My Resume.</h2>
                    </div>
                    <div className="resume">
                        <Row gutter={30}>
                            <Col span={12}>
                                <div className="section-sub">
                                    <div className="subheading">
                                        <h3>EXPERIENCE</h3>
                                    </div>
                                    {user.experience.map(function (item, idx) {
                                        return <div className="timeline" key={idx}>
                                            <Timeline mode="left" className="line-left">
                                                <Timeline.Item label={item.to}>
                                                </Timeline.Item>
                                                <Timeline.Item label={item.from}>
                                                </Timeline.Item>
                                            </Timeline>
                                            <div className="content-wrapper">
                                                <div className="content">
                                                    <h4>
                                                        {item.title}
                                                    </h4>
                                                    <h5>
                                                        {item.company}
                                                    </h5>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="section-sub">
                                    <div className="subheading">
                                        <h3>EDUCATION</h3>
                                    </div>
                                    {user.education.map(function (item, idx) {
                                        return <div className="timeline" key={idx}>
                                            <Timeline mode="left" className="line-left">
                                                <Timeline.Item label={item.to}>
                                                </Timeline.Item>
                                                <Timeline.Item label={item.from}>
                                                </Timeline.Item>
                                            </Timeline>
                                            <div className="content-wrapper">
                                                <div className="content">
                                                    <h4>
                                                        {item.degree}
                                                    </h4>
                                                    <h5>
                                                        {item.school}
                                                    </h5>
                                                    <p>
                                                        {item.field_of_study}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="skills">
                        <Row gutter={30}>
                            <Col span={12}>
                                <div className="section-sub">
                                    <div className="subheading">
                                        <h3>FRONT-END SKILLS</h3>
                                    </div>
                                    <div className="skill-wrapper">
                                        {
                                            user.skills.map(function (item, idx) {
                                                if (item.type !== 'front-end') {
                                                    return '';
                                                }
                                                return <div className="skill-detail" key={idx}>
                                                    <h4>{item.name}</h4>
                                                    <Progress percent={item.level} status="active" showInfo={false}/>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="section-sub">
                                    <div className="subheading">
                                        <h3>BACK-END SKILLS</h3>
                                    </div>
                                    <div className="skill-wrapper">
                                        {
                                            user.skills.map(function (item, idx) {
                                                if (item.type !== 'back-end') {
                                                    return '';
                                                }
                                                return <div className="skill-detail" key={idx}>
                                                    <h4>{item.name}</h4>
                                                    <Progress percent={item.level} status="active" showInfo={false}/>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="action-more">
                        <span className="btn-wrapper btn-back">
                            <Link to={'about'}>
                                <Button ghost className="base-button" size="large">Back</Button>
                            </Link>
                        </span>
                        <span className="btn-wrapper btn-next">
                            <Link to={'portfolio'}>
                                <Button ghost className="base-button" size="large">Next</Button>
                            </Link>
                        </span>
                     </div>
                </section>
            </div>
        </Main>
    );
}
