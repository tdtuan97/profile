import React from 'react';
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import {Button} from 'antd';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <Main>
            <div className="page home-wrapper">
                <section className="home-content banner-section page-active"
                         style={{backgroundImage: "url('" + user.background_img + "')"}}>
                    <div className="banner-content">
                        <h1>
                            {user.full_name}
                        </h1>
                        <p className="cd-headline clip is-full-width">
                            <span className="base-text">I am a</span>
                            <span className="cd-words-wrapper">
                            <span className="cd-words">
                                <b className="is-visible">{user.title}</b>
                            </span>
                        </span>
                        </p>
                    </div>
                    <div className="action-more homepage">
                        <span className="ico">
                            <ArrowRightOutlined width="3em"/>
                        </span>
                        <span className="btn-wrapper">
                            <Link to={'about'}>
                                <Button ghost className="base-button" size="large">See more...</Button>
                            </Link>
                        </span>
                    </div>
                </section>
            </div>
        </Main>
    );
}
