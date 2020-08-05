import React, { ReactNode } from 'react'
import s from "./Sidebar.scss"
import { ReactComponent as StarterLogo } from 'assets/svg/starter-logo.svg';

import { Home, BookOpen, Book, CreditCard, User, Settings, ArrowUpCircle, ArrowLeft } from 'react-feather';


interface SidebarProps {
    children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar__logo}>

                <StarterLogo />
            </div>

            <ul className={s.sidebar__nav}>
                <li className={s.sidebar__nav__item}>
                    <Home color="black" size={24} /><span className={s.sidebar__nav__item__title}>Dashboard</span>
                </li>

            </ul>

            <div className={s.sidebar__section}>
                <h2 className={s.sidebar__section__title}>Cards</h2>

                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__nav__item}>
                        <BookOpen color="black" size={24} /><span className={s.sidebar__nav__item__title}>Study</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <CreditCard color="black" size={24} /><span className={s.sidebar__nav__item__title}>Add Card</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <Book color="black" size={24} /><span className={s.sidebar__nav__item__title}>Add deck</span>
                    </li>
                </ul>
            </div>

            <div className={s.sidebar__section}>
                <h2 className={s.sidebar__section__title}>User</h2>

                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__nav__item}>
                        <User color="black" size={24} /><span className={s.sidebar__nav__item__title}>User</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <Settings color="black" size={24} /><span className={s.sidebar__nav__item__title}>Settings</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <ArrowUpCircle color="black" size={24} /><span className={s.sidebar__nav__item__title}>Update</span>
                    </li>
                </ul>
            </div>
            <div className={s.sidebar__footer}>
                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__nav__item}>
                        <ArrowLeft color="black" size={24} /><span className={s.sidebar__nav__item__title}>Exit</span>
                    </li>
                </ul>
            </div>

            {children}
        </div>
    )
}
