"use client";
export default function Error({ error }: { error: Error }) {
  return <h1>{error.message}</h1>;
}

// error component는 client component여야함(규약)
