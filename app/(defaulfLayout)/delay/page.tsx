type ResponseValue = {
  message: string
  time: string // ISO 8601
}

export default async function AsyncPage() {
  const res = await fetch('https://api.heropy.dev/v0/delay?t=1000', {
    next: {
      //재검증
      revalidate: 60 //sec
    }
  })
  const data: ResponseValue = await res.json()
  return <h1>{data.time}</h1>
  // 2024-04-02T17:47:09.678Z
}
