import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import { RouterProvider} from 'react-router-dom'
import { router } from './routes/routesBody.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client= new QueryClient() 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={client}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
  </React.StrictMode>
)