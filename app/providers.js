"use client"

import { store } from "@/app/store/redux-store"
import { Provider } from "react-redux"

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}
