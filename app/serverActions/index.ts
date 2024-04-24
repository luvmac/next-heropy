'use server'
import { redirect } from 'next/navigation'
// 서버에서만 실행되는 함수
// 호출은 클라이언트, 서버컴포넌트 둘 다 가능

export async function wait(duration = 1000): Promise<{ message: string }> {
  console.log(`Run 'wait' function`)
  return new Promise(resolve => {
    setTimeout(() => resolve({ message: `Waited for ${duration}ms` }), duration)
  })
}

export async function signIn(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(email, password)

  // ...

  redirect('/') // 로그인 성공 시, 메인 페이지로 이동!
}
