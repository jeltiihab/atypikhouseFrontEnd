import React from "react";
import classNames from "classnames";
import buttonStyle from "./Buttons.module.css"

const AppButton = (props) => {
    return (

            <button type="button" className={props.styleparam}>
                {props.Content}
            </button>
    );
};

export default AppButton;