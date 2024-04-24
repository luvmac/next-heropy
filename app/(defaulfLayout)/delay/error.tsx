'use client'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  return <h2>{error.message}</h2>
  // <h2>뭔가 문제가 있어요..</h2>
}