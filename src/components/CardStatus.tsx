import React, { FC } from 'react'

interface Health {
  success: boolean
  message: string
  hostname: string
  time: number | null
  name: string
}

const CardStatus: FC<Health> = ({ name, success, time, message, hostname }) => {
  return (
    <>
      <div className="card">
        <h2>{name?.toLocaleUpperCase()}</h2>
        <span className={success ? 'success' : 'error'}>
          {message.toUpperCase()}
        </span>
        <p className={!success ? 'error-text' : 'null'}>{hostname}</p>
        <p>{time !== 0 ? time : null}</p>
      </div>
    </>
  )
}

export default React.memo(CardStatus)
