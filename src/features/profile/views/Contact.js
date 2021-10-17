import React from 'react';
import {} from '@ant-design/icons';
import {Row, Col, Timeline, Progress, Button} from 'antd';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

export function Contact() {
    return (
        <Main>
            <div className="page resume-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>Contact Me.</h2>
                    </div>
                    <div className="contact">
                    </div>
                    <div className="action-more">
                        <span className="btn-wrapper btn-back">
                            <Link to={'home'}>
                                <Button ghost className="base-button" size="large">Go To Home</Button>
                            </Link>
                        </span>
                    </div>
                </section>
            </div>
        </Main>
    );
}
