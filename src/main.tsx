import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { App } from './App'
import { DefaultTheme, setup } from 'goober'
import { createGlobalStyles } from 'goober/global'
import { createElement, createContext, useContext } from 'react'
import '@fontsource/inter'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

const theme: DefaultTheme = { 
  colors: {
    bg0: "hsl(0, 0%, 8%)",
    bg1: "hsl(0, 0%, 12%)",
    bg2: "hsl(0, 0%, 16%)",

    fg: "hsl(0, 0%, 95%)",
    fgDim: "hsl(0, 0%, 80%)",

    pri: "skyBlue",
    onPri: "hsl(120, 20%, 80%)",
    priCon: "#fff",
    onPriCon: "#fff",
  },
  states: {
    // states
    dis: 0.38,

    hover: 0.08,
    focus: 0.10,
    press: 0.10,
    drag: 0.16,
  },
  types: {
    // sizes
    p1: '0.25rem',
    p2: '0.5rem',
    p3: '0.75rem',
    p4: '1rem',
    p5: '1.25rem',
    p6: '1.5rem',
    p7: '1.75rem',
    p8: '2rem',

    br1: '0.125rem',
    br2: '0.25rem',
    br3: '0.5rem',
    br4: '1rem',

    ts: '0.75rem',
    tr: '1rem',
    tl: '1.5rem',
    txl: '2.25rem',
    txxl: '3.375rem',
  }
};
const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

setup(createElement, undefined, useTheme)
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
