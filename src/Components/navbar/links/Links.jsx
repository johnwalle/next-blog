'use client';
import { FaBars, FaTimes } from 'react-icons/fa';

import Link from "next/link";
import styles from './links.module.css';
import NavLink from "./navLink/NavLink";
import { useState } from "react";

const Links = () => {

    const [open, setOpen] = useState(false);
    const clickHandler = () => {
        setOpen(!open);
    };

    const navlinks = [
        {
            title: "Homepage",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blog",
            path: '/blog'
        }
    ];


    //Temporary
    const session = false;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {navlinks.map(link => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={clickHandler}>
            <FaBars  className={styles.menuIcon} />
            </button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            navlinks.map((link) => (
                                <NavLink item={link} key={link.title} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Links;