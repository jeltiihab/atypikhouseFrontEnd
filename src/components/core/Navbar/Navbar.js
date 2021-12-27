import React from "react";
import classNames from "classnames";
import Image from "next/image"
import styles from "./Navbar.module.css";
import {MenuIcon, UserCircleIcon} from "@heroicons/react/solid";
import Link from 'next/link'
import ButtonStyle from '../../ui/Buttons/Buttons.module.css'
import Logo from '../../../../public/images/logo.png'

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={Logo} layout="fill" objectFit="contain"/>
            </div>
            <ul className={styles.navItems}>
                {navigationData.map((item, index) => (
                    <li
                        className={classNames([
                            styles.navItem,
                            currentRoute === item && styles.selectedNavItem,
                        ])}
                        key={index}
                        onClick={() => setCurrentRoute(item.name)}
                    >
                        <Link href={item.linkParent}>
                            <a>
                                {item.name}
                            </a>
                        </Link>

                    </li>
                ))}
            </ul>
            <button className={styles.redWideButton}>
                Devenir partenaire
            </button>
            <div>
                <div className={styles.user}>
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;