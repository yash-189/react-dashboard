import MetricCard from '@/components/dashboard/MetricCard'
import { ProjectionsVsActuals } from '@/components/dashboard/ProjectionChart'
import { RevenueByLocation } from '@/components/dashboard/RevenueByLocationChart'
import { RevenueChart } from '@/components/dashboard/RevenueChart'
import { TopSellingProducts } from '@/components/dashboard/TopSellingProducts'
import { TotalSales } from '@/components/dashboard/TotalSalesChart'
import Typography from '@/components/ui/Typography'
import { metricsData } from '@/data/mockData'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      <Typography variant="page-title">
        eCommerce
      </Typography>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
          {metricsData?.map((metric) => (
            <MetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              className={metric.className}
              variant={metric.variant}
            />
          ))}
        </div>
        
        <div className='col-span-1 sm:col-span-2 lg:col-span-2 max-h-none lg:max-h-[15.75rem]'>
          <ProjectionsVsActuals />
        </div>
        
        <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
          <RevenueChart />
        </div>
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <RevenueByLocation />
        </div>
        
        <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
          <TopSellingProducts />
        </div>
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <TotalSales />
        </div>
      </div>
    </div>
  )
}

export default Dashboard