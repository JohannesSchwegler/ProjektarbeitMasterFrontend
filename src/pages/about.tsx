import React from 'react';
import { Helmet } from 'react-helmet';
import Dashboard from "../components/dashboard/Dashboard"

import SidebarAbout from "../pageComponents/about/SidebarAbout"

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="About" />

    <Dashboard sidebar={<SidebarAbout/>} content={"Wird aufgefüllt"} />
  </>
);
