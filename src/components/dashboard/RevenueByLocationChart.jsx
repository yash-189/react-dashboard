"use client"

import { Card, CardContent } from "@/components/ui/card"
import { WorldMap } from "@/components/charts/world-map"
import Typography from "../ui/Typography"

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128], value: "72K" },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], value: "39K" },
  { name: "Sydney", coordinates: [151.2093, -33.8688], value: "25K" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], value: "61K" },
]

const locations = [
  { name: "New York", value: "72K", numericValue: 72, color: "bg-purple-500" },
  { name: "San Francisco", value: "39K", numericValue: 39, color: "bg-secondary-cyan" },
  { name: "Sydney", value: "25K", numericValue: 25, color: "bg-secondary-cyan" },
  { name: "Singapore", value: "61K", numericValue: 61, color: "bg-secondary-cyan" },
]

const maxValue = Math.max(...locations.map(loc => loc.numericValue))

export function RevenueByLocation() {
  return (
    <Card className="h-full bg-primary-light">
      <CardContent className='flex flex-col gap-4'>
        <Typography variant="card-title">Revenue by Location</Typography>
        
        <div className="h-[14.5rem]">
          <div className="h-[4.5rem]">
            <WorldMap markers={markers} />
          </div>
          
         <div className="flex flex-col gap-4 mt-4"  >
  {locations.map((location) => (
    <div key={location.name} className="space-y-1">
      <div className="flex items-center justify-between">
        <Typography variant="card-subtitle">{location.name}</Typography>
        <Typography variant="card-subtitle" className="font-semibold">{location.value}</Typography>
      </div>
      

      <div className="w-full h-[2px] bg-secondary-cyan/20 relative">
        <div 
          className="h-px bg-secondary-cyan absolute left-0 top-0"
          style={{ width: `${(location.numericValue / maxValue) * 100}%` }}
        />
      </div>
    </div>
  ))}
</div>
        </div>
      </CardContent>
    </Card>
  )
}