import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Root'
import { RouterProvider } from 'react-router'
import ContextProvider from './context/ContextProvider'


createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
