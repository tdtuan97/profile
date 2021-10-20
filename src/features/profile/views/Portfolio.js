import React from 'react';
import {} from '@ant-design/icons';
import {Image, Button} from 'antd';
import {List} from 'antd';
import {GithubOutlined, AliwangwangOutlined} from '@ant-design/icons';
import {Main} from "../layouts/Main";
import user from "../../../mock/profile.json";
import {Link} from "react-router-dom";

function handleClickButtonLink(e) {
    e.preventDefault();
    window.open(e.currentTarget.value, '_blank');
}

export function Portfolio() {
    return (
        <Main>
            <div className="page portfolio-wrapper">
                <section className="section-container">
                    <div className="page-heading">
                        <h2>Portfolio.</h2>
                    </div>
                    <div className="portfolio">
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={false}
                            dataSource={user.projects}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <Button type={"link"}
                                                onClick={event => handleClickButtonLink(event)}
                                                value={item.repository}
                                                className="btn-action"
                                        ><GithubOutlined/> Repository</Button>,
                                        item.review === null ? null :
                                            <Button type={"link"}
                                                    onClick={event => handleClickButtonLink(event)}
                                                    value={item.review}
                                                    className="btn-action"
                                            ><AliwangwangOutlined/> Review</Button>,
                                    ]}
                                    extra={
                                        <img src={item.image} alt=""/>
                                    }
                                >
                                    <List.Item.Meta
                                        title={item.name}
                                        description={item.language}
                                    />
                                    {item.description}
                                </List.Item>
                            )}
                        />
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
                </section>
            </div>
        </Main>
    );
}
