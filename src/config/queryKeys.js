
export const QUERY_KEYS = {
  dashboard: ['dashboard'],
  dashboardMetrics: ['dashboard', 'metrics'],
  
  orders: (filters) => ['orders', filters],
  order: (id) => ['orders', id],
  
  transactions: (filters) => ['transactions', filters],
  transaction: (id) => ['transactions', id],
}