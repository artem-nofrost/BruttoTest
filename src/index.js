import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { fade_in, fly } from './style/animations';
import FontStyles from './fonts/fontStyles';
import 'antd/dist/antd.css';
import { colors } from './style/colors';

const Global = createGlobalStyle`
    html {
        font-family: 'Rubik', Helvetica, Arial, sans-serif;
        font-size: 12px;
        animation: ${fade_in} 1.5s ease 1;
        & h1, h2, h3, h4, h5, h6 {
            font-family: 'Lato', Helvetica, Arial, sans-serif;
        }
    }

    body {
        margin: 0;
        padding: auto 2rem;
        color: rgb(0, 0, 0);
        box-sizing: border-box;
        background-color: ${colors.darkGrey};
    }

    input {
        border-color: #c5c5c5 !important;
    }

    input:focus {
        border-color: #c5c5c5 !important;
        box-shadow: 0 0 0 #80bdff00 !important;
    }

    a:hover {
        text-decoration: none !important;
    }

    .ant-image-mask {
        display: none!important;
    }

    .ant-form-item-label {
        label {
            font-family: 'Rubik', Helvetica, Arial, sans-serif;
            color: #ffffffcc;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 130%;
        }
    }

    .preload {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        
    }

    .preload img {
        max-width: 70px;
        max-height: 70px;
        animation: ${fly} 0.2s infinite linear;
    }
`;

ReactDOM.render(
    <Router>
        <FontStyles />
        <Global />
        <App />
    </Router>,
    document.getElementById('site-wrap'),
);
