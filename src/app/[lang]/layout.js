import '@/globals.css'
import { ThemeProvider } from '@/providers'
import { ThemeSwitcher } from "@/components/themeSwitcher";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSwitcher />
            <main>
              {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  )
}
