"use client"

import { useEffect, useState } from "react"

interface Props {
  name: string
}

const Hello = ({ name }: Props) => {
  const [response, setResponse] = useState<string | undefined>(undefined)

  function getHello(name: string) {
    setResponse(undefined)
    fetch(`/api/hello?name=${name}`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log(json)
        setResponse(json)
      })
  }

  useEffect(() => {
    getHello("World")
  }, [name])

  return (
    <>
      <h1>{response || "..."}</h1>

      <button onClick={() => getHello('Button')}>GET</button>
    </>
  )
}

export default Hello
