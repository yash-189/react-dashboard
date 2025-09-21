import { Routes, Route, Navigate } from 'react-router'
import { Suspense, lazy } from 'react'
import Layout from '@/components/layout/Layout'



const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Orders = lazy(() => import('@/pages/Orders'))



const AppRoutes = () => {
  return (
    <Suspense fallback={<div > Loading...</div>}>
      <Routes>
        
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Navigate to="/" replace />} />
          <Route path="/ecommerce/orders" element={<Orders />} />

          
          
          
        </Route>
        
        {/* catch all - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes