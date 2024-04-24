import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from 'path-to-regexp'
import { auth } from '@/auth'

const matchersForAuth = [
  '/dashboard/:path*',
  '/myaccount/:path*',
  '/settings/:path*',
  '...'
]

export async function middleware(request: NextRequest) {
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await auth()) // 세션 정보 확인
      ? NextResponse.next()
      : NextResponse.redirect(
          new URL(`/signin?callbackUrl=${request.url}`, request.url)
        )
  }
  return NextResponse.next()
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some(url => !!match(url)(pathname))
}

// 참고 https://www.heropy.dev/p/n7JHmI

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {
//   if (
//     // 로그인이 필요한 페이지 확인
//     isMatch(request.nextUrl.pathname, [
//       '/dashboard',
//       '/myaccount',
//       '/settings',
//       '...'
//     ])
//   ) {
//     const session = await auth()
//     if (session) {
//       return NextResponse.next()
//     }
//     return NextResponse.redirect(new URL('/signin', request.url))
//   }
//   return NextResponse.next()
// }

// // 일치하는 경로에서만 미들웨어가 호출됩니다.
// // 내보내기를 생략하면, 모든 경로에서 미들웨어가 호출됩니다.
// export const config = {
//   matcher: ['/:path*'] // 명시적 모든 경로 일치
//   // matcher: ['/dashboard/:path*', '/myaccount/:path*', '/settings/:path*'] // 특정 경로만 일치
// }

// function isMatch(pathname: string, matchers: string[]) {
//   return matchers.some(matcher => pathname.startsWith(matcher))
// }
