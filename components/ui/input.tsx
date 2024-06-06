import React from "react";

import styles from '@app-styles/components/input.module.css'

const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return <input type="text" {...props} className={styles.input} data-testid='input'/>
}

export default Input