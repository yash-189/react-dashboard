import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router'
import { queryClient } from '@/config/queryClient'
import AppRoutes from '@/routes/AppRoutes'
import { ThemeProvider } from './contexts/ThemeContext'
import { SidebarProvider } from '@/hooks/useSidebar'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <SidebarProvider>
            <AppRoutes />
          </SidebarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App