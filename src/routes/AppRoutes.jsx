import { Routes, Route, Navigate } from 'react-router'
import { Suspense, lazy } from 'react'
import Layout from '@/components/layout/Layout'
import LoadingSkeleton from '@/components/shared/LoadingSkeleton'



const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Orders = lazy(() => import('@/pages/Orders'))



const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSkeleton/>}>
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