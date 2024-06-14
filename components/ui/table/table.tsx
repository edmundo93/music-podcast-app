import React from 'react'

import styles from './table.module.css'

interface IProps {
  headValues: string[]
  bodyValues: any[][]
}

const Table = (props: IProps) => {
  const renderHeads = () =>
    props.headValues?.map((value, index) => (
      <th key={`${index}${value}`}>{value}</th>
    ))

  const renderValues = () => {
    return props.bodyValues.map((line, i) => (
      <tr key={`line-${i}`}>
        {line.map((value, j) => (
          <td key={`value-${j}`} data-label={props.headValues[j]}>
            {value}
          </td>
        ))}
      </tr>
    ))
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>{renderHeads()}</thead>
        <tbody className={styles.body}>{renderValues()}</tbody>
      </table>
    </div>
  )
}

export default Table
