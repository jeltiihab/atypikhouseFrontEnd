import React, { useCallback } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faDungeon, faEnvelope, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import styles from "./Tabbar.module.css";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {

    const getTabIcon = useCallback((item) => {
        <FontAwesomeIcon size="xs" icon={faHome} />
        switch (item) {
            case "Accueil":
                return <FontAwesomeIcon size="xs" icon={faHome} />;
            case "Nos biens":
                return <FontAwesomeIcon size="xs" icon={faDungeon} />;
            case "Contact":
                return <FontAwesomeIcon size="xs" icon={faEnvelope} />;
            case "FAQ":
                return <div><FontAwesomeIcon size="xs" icon={faInfoCircle} /></div>;
        }
    }, []);

    return (
        <nav className={styles.tabbar}>
            {navigationData.map((item, index) => (
                <span
                    key={index}
                    className={classNames([
                        styles.tabItem,
                        currentRoute === item.linkParent && styles.tabItemActive,
                    ])}
                    onClick={() => setCurrentRoute(item.linkParent)}
                >
          <span className={styles.icon}>{getTabIcon(item.name)}</span>
                </span>
            ))}
        </nav>
    );
};

export default Tabbar;