import React from 'react';

import {useNavigate} from "react-router-dom";

import style from './Logo.module.css'

const Logo = () => {

    let navigate = useNavigate();

    return (
        <div onClick={() => {navigate('/', {replace: true})}}>
            <svg className={style.wrapLogo}  width="143" height="48" viewBox="0 0 143 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.2393 22.1076H50.892C50.8537 19.7745 48.9361 18.1637 46.0213 18.1637C43.1513 18.1637 41.0483 19.7489 41.0611 22.1268C41.0547 24.0572 42.4162 25.163 44.6278 25.6935L46.0533 26.0515C47.4787 26.3967 48.2713 26.8058 48.2777 27.6879C48.2713 28.6467 47.3636 29.2987 45.9574 29.2987C44.5192 29.2987 43.4837 28.6339 43.3942 27.3235H40.7159C40.7862 30.1552 42.8125 31.619 45.9893 31.619C49.1854 31.619 51.0646 30.0913 51.071 27.6942C51.0646 25.5146 49.4219 24.3576 47.1463 23.8462L45.9702 23.565C44.8324 23.3029 43.88 22.881 43.8991 21.9414C43.8991 21.0977 44.647 20.4776 46.0021 20.4776C47.3253 20.4776 48.1371 21.0785 48.2393 22.1076ZM53.4727 31.4336H56.2405V27.1893H58.5672C61.5778 27.1893 63.3292 25.3931 63.3292 22.7788C63.3292 20.1772 61.6098 18.3427 58.6375 18.3427H53.4727V31.4336ZM56.2405 24.9712V20.6055H58.1069C59.705 20.6055 60.4784 21.4748 60.4784 22.7788C60.4784 24.0763 59.705 24.9712 58.1197 24.9712H56.2405ZM65.667 31.4336H74.5136V29.1516H68.4348V26.0259H74.0342V23.744H68.4348V20.6246H74.488V18.3427H65.667V31.4336ZM77.2285 31.4336H86.0751V29.1516H79.9962V26.0259H85.5957V23.744H79.9962V20.6246H86.0495V18.3427H77.2285V31.4336ZM93.4306 31.4336C97.4192 31.4336 99.8354 28.9663 99.8354 24.8754C99.8354 20.7972 97.4192 18.3427 93.4689 18.3427H88.79V31.4336H93.4306ZM91.5577 29.0621V20.7141H93.3219C95.7765 20.7141 97.0741 21.967 97.0741 24.8754C97.0741 27.7965 95.7765 29.0621 93.3155 29.0621H91.5577ZM102.426 31.4336H110.806V29.1516H105.193V18.3427H102.426V31.4336ZM115.946 18.3427H113.179V31.4336H115.946V18.3427ZM129.713 18.3427H126.958V26.5756H126.843L121.192 18.3427H118.763V31.4336H121.531V23.1942H121.627L127.322 31.4336H129.713V18.3427ZM132.54 31.4336H141.386V29.1516H135.308V26.0259H140.907V23.744H135.308V20.6246H141.361V18.3427H132.54V31.4336Z" fill="#152739"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60547 0.553711L33.014 24.0001L6.60547 47.4465V36.3004L20.9103 23.997L6.60547 11.6935V0.553711Z" fill="#EE950F"/>
                <path d="M17.5369 24.4862L0 9.34375V39.6287L17.5369 24.4862Z" fill="#EE950F"/>
            </svg>
        </div>
    );
};

export default Logo;