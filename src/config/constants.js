
// app config
export const APP_CONFIG = {
  APP_NAME: 'Dashboard',
  ITEMS_PER_PAGE: 10,
}

// api configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
}


// status options
export const ORDER_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

export const TRANSACTION_STATUS = {
  SUCCESS: 'success',
  PENDING: 'pending',
  FAILED: 'failed',
}

// filter options for dropdowns
export const FILTER_OPTIONS = {
  ORDER_STATUS: [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
  ],
  TRANSACTION_STATUS: [
    { value: 'all', label: 'All Transactions' },
    { value: 'success', label: 'Success' },
    { value: 'pending', label: 'Pending' },
    { value: 'failed', label: 'Failed' },
  ],
}

// chart colors
export const CHART_COLORS = {
  PRIMARY: '#3B82F6',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  DANGER: '#EF4444',
}

// theme
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
}

// storage keys
export const STORAGE_KEYS = {
  THEME: 'dashboard-theme',
  FILTERS: 'dashboard-filters',
}