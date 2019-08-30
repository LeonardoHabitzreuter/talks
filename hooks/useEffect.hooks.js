import React, { useState, useEffect } from 'react'

const FriendStatus = ({ status }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => console.log(status), 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [status])
}
