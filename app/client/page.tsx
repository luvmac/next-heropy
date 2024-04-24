'use client'


import { useEffect, useState } from 'react'
import { wait } from '../serverActions'

export default function ClientPage() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    wait(2000).then(res => setMessage(res.message))
  }, [])
  return (
    <>
      <h1>client page</h1>
      {message}
    </>
  )
}
