import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tugas-3/tailwind.css'
import FormBudget from './tugas-3/FormBudget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormBudget />
  </StrictMode>,
)
