import { Suspense } from 'react'
import Abc from '../Parallel/@abc/page'
import Loader from '@/app/components/Loader'
import Xyz from '../Parallel/@xyz/page'


export default async function AsyncPage() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      async page
      <Suspense fallback={<Loader />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Xyz />
      </Suspense>
    </>
  )
}
