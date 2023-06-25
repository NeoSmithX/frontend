import React,{useState} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useHistory, useLocation, Redirect, matchPath} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageLearningCenter from '@site/src/components/HomepageLearningCenter';
import HomepageTarget from '@site/src/components/HomepageTarget';
import {Contributor} from '../components/Contributor/index';

import styles from './index.module.css';
import {DiscordLogoSvg} from "../svg";


function HomepageHeader() {
    
    const bannerTitleImg = require('@site/static/img/polkadot_log.png').default;
    const bannerBgImg = require('@site/static/img/polkadot_log.png').default;

    return (
        <header>
            <div className={styles.wtfBanner}>
                <div className={styles.wtfBannerTitle}>
                    <div className={styles.wtfBannerMainName}>
                        <img src={bannerTitleImg}/>
                        <span className={styles.wtfBannerMainText}>
              <Translate id="home.title">
                Academy
              </Translate>
            </span>
                    </div>
                    <h2 className={styles.wtfTitle}>
                        <Translate id="home.tagline.1">Web3 Open University for Developers</Translate>
                    </h2>
                    <h4 className={styles.wtfDesc}>
                        <Translate id="home.tagline.2">Learn, Contribute, and Get Certificates</Translate>
                    </h4>
                    <div className={styles.wtfBannerBtnBox}>
                        {/* <Link to="/learning-center">
                            <div className={styles.wtfBannerBtn}>
                                <Translate id="home.StartLearning">
                                    Start Learning
                                </Translate>
                            </div>
                        </Link> */}
                        <Link to="https://discord.com/">
                            <div className={styles.discordBtn}>
                                <DiscordLogoSvg className={styles.discordLogo} />
                                <Translate id="home.joinDiscord">Join WTF Community</Translate>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.wtfBannerImg}>
                    <img src={bannerBgImg}/>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}, Web3 Open University`}
            description="WTF Academy is Web3 Open University, we create open-source tutorials in Solidity, Ethers.js, and more.">
            <HomepageHeader/>
            <main>
                {/* <HomepageLearningCenter/> */}
                <HomepageTarget/>
                {/* <Contributor/> */}
            </main>
        </Layout>
    );
        
}
