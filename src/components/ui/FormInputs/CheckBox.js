import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./formIputs.module.css";

function Checkbox (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label className="ml-6" htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <span className={styles.errorSpan}><ErrorMessage name={name} /></span>
        </div>
    )
}

export default Checkbox