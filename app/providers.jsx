
'use client'

import { NextUIProvider } from '@nextui-org/react'

export function ThemeProvider({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
