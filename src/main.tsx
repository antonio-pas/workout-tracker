import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { App } from './App'
import { setup } from 'goober'
import { createGlobalStyles } from 'goober/global'
import { createElement } from 'react'
import '@fontsource/inter'
setup(createElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])
setup(createElement)
const GlobalStyles = createGlobalStyles`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
}

`
createRoot(document.getElementById('app')!).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>,
)
