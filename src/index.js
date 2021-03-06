import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BlogApp } from './BlogApp';
import './sass/styles.scss';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));

root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <BlogApp />
        </BrowserRouter>
    </Provider>
);