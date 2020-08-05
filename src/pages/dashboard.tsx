import React from 'react'
import { Helmet } from 'react-helmet';

import Dashboard from "../components/dashboard/Dashboard"



// tslint:disable no-default-export
export default () => (
    <>
        <Helmet title="Dashboard" />
        <Dashboard />

    </>
);
