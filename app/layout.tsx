
import './styles/global.scss'
import { roboto } from './styles/font'

export const metadata = {
  title: {
    template: '%s | 나의 사이트',
    default: '나의 사이트'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={roboto.variable}>
      {/* classname은 직접 연결 */}
      <body>{children}</body>
    </html>
  )
}
