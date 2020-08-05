import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

/* import { ReactComponent as Logo } from 'assets/svg/ueno-logo.svg';
import { ReactComponent as Dribbble } from 'assets/svg/dribbble.svg';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Github } from 'assets/svg/github.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';
 */
import { helmet } from 'utils/helmet';
/* import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/HeaderLink';
import { Footer } from 'components/footer/Footer'; */
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />


    {children}

    {isDev && <Devtools />}
  </div>
);
