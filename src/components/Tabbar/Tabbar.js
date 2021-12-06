import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FcFaq } from "react-icons/fc";
import { GiTreehouse } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./Tabbar.module.css";
import Image from "next/image";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case "Accueil":
                return <AiFillHome />;
            case "Nos biens":
                return <GiTreehouse />;
            case "Contact":
                return <AiFillPhone />;
            case "FAQ":
                return <FaQuestionCircle />;
        }
    }, []);

    return (
        <nav className={styles.tabbar}>
            {navigationData.map((item, index) => (
                <span
                    key={index}
                    className={classNames([
                        styles.tabItem,
                        currentRoute === item && styles.tabItemActive,
                    ])}
                    onClick={() => setCurrentRoute(item)}
                >
          <span className={styles.icon}>{getTabIcon(item)}</span>
        </span>
            ))}
        </nav>
    );
};

export default Tabbar;