import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      gcTime: 10 * 60 * 1000,        // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
})

// stale times for different data types
export const STALE_TIMES = {
  ORDERS: 30 * 1000,           // 30 seconds - frequently changing
  TRANSACTIONS: 30 * 1000,     // 30 seconds - frequently changing  
  DASHBOARD: 2 * 60 * 1000,    // 2 minutes - dashboard metrics
}

