import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import Root from './routes/root'
import ErrorPage from './error-page'

import './App.scss'
import Layout from './layouts/Layout'
import Contact from './components/contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  return (
    <Layout className='App'>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
