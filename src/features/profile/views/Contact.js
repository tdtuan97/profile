import React from 'react';
import {
    FacebookOutlined,
    MailOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import {Row, Col, Timeline, Progress, Button} from 'antd';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";


function handleClickSocial(e) {
    e.preventDefault();
    window.open(e.currentTarget.value, '_blank');
}

function handleClickMail(e) {
    e.preventDefault();
    window.open('mailto:' + e.currentTarget.value, '_blank');
}

export function Contact() {
    return (
        <Main>
            <div className="page contact-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>Contact Me.</h2>
                    </div>
                    <div className="contact">
                        <div className="section-sub contact-social">
                            <Row gutter={30}>
                                <Col span={24}>
                                    <div className="subheading">
                                        <h3>LET'S TALK</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={8}>
                                    <div className="social-item">
                                        <Button type="link" value={user.email}
                                                onClick={(e) => handleClickMail(e)}>
                                            <div className="icon">
                                                <MailOutlined/>
                                            </div>
                                            <h4>Email</h4>
                                        </Button>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="social-item">
                                        <Button type="link" value={user.facebook}
                                                onClick={(e) => handleClickSocial(e)}>
                                            <div className="icon">
                                                <FacebookOutlined/>
                                            </div>
                                            <h4>Facebook</h4>
                                        </Button>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="social-item">
                                        <Button type="link" value={user.linkedin}
                                                onClick={(e) => handleClickSocial(e)}>
                                            <div className="icon">
                                                <LinkedinOutlined/>
                                            </div>
                                            <h4>Linkedin</h4>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="action-more">
                        <span className="btn-wrapper btn-back">
                            <Link to={'home'}>
                                <Button ghost className="base-button" size="large">Go Back</Button>
                            </Link>
                        </span>
                    </div>
                </section>
            </div>
        </Main>
    );
}
