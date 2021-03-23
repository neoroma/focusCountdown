import styles from './RoundedButton.module.scss'
import React, { FC } from 'react'
import cn from 'classnames'

export interface RoundedButtonProps {
  handleClick(): void
}

export const RoundedButton: FC<RoundedButtonProps> = ({ children, handleClick }) => {
  return (
    <>
      <div onClick={handleClick} className={cn(styles.flexCenterColumn, styles.rounded)}>
        {children}
      </div>
    </>
  )
}
