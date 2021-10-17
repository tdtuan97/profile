import React from 'react';
import {} from '@ant-design/icons';
import {Row, Col, Timeline, Progress, Button} from 'antd';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

export function Portfolio() {
    return (
        <Main>
            <div className="page resume-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>Portfolio.</h2>
                    </div>
                    <div className="portfolio">
                    </div>
                </section>
            </div>
            <div className="action-more">
                <span className="btn-wrapper btn-back">
                    <Link to={'resume'}>
                        <Button ghost className="base-button" size="large">Back</Button>
                    </Link>
                </span>
                <span className="btn-wrapper btn-next"><Link to={'contact'}>
                    <Button ghost className="base-button" size="large">Next</Button></Link>
                </span>
            </div>
        </Main>
    );
}
