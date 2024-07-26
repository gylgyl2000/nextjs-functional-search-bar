'use client'

import Home from "@/app/home/page"
import { Suspense } from "react"

export default function App() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  )
}