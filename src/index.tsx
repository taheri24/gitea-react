import * as React from 'react';
import * as ReactDOM from "react-dom";

import { MainLayout } from './app/layout/main-layout';
import "./styles.less";

const mountNode = document.getElementById("app");
ReactDOM.render(<MainLayout name="Jane" />, mountNode);
