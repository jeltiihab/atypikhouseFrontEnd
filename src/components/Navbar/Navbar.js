import React from "react";
import classNames from "classnames";
import Image from "next/image"
import styles from "./Navbar.module.css";
import {MenuIcon, UserCircleIcon} from "@heroicons/react/solid";
import Link from 'next/link'
import ButtonStyle from '../Buttons/Buttons.module.css'
import Logo from '../../../public/images/logo.png'

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
            <button className={ButtonStyle.redLgButton}>
                Devenir partenaire
            </button>
            <div className={styles.user}>
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
            </div>
        </nav>
    );
};

export default Navbar;