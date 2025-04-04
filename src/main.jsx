import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <MantineProvider>
      <App />
      </MantineProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
