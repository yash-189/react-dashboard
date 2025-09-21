"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { LineChart } from "@/components/charts/line-chart"
import Typography from "../ui/Typography"

const data = [
  { name: "Jan", current: 12000000, previous: 8000000 },
  { name: "Feb", current: 8000000, previous: 18000000 },
  { name: "Mar", current: 6000000, previous: 12000000 },
  { name: "Apr", current: 10000000, previous: 15000000 },
  { name: "May", current: 18000000, previous: 19000000 },
  { name: "Jun", current: 20000000, previous: 21000000 },
]

const lines = [
  {
    dataKey: "current",
    stroke: "#000000",
    strokeWidth: 3,
    dot: false,
        strokeDasharray: "8 4",

  },
  {
    dataKey: "previous",
    stroke: "#A8C5DA",
    strokeWidth: 3,
    dot: false,
  },
]

export function RevenueChart() {
  return (
       <Card className=" h-full bg-primary-light">

      
      
        
      <CardContent >
        <div className="flex items-center gap-4 ">
                        <Typography variant="card-title" >Revenue</Typography>

<span className="text-foreground/20">|</span>
         
         
          <div className="flex items-center gap-2">
          
           <span className="size-[6px] bg-foreground rounded-full" />
                        <Typography variant="card-subtitle">
                            Current Week   {" "} 
                            <span className="font-semibold">

                             $58,211
                            </span>
                        </Typography>

         
            
          </div>

            <div className="flex items-center gap-2">
          
           <span className="size-[6px] bg-secondary-cyan rounded-full" />
                        <Typography variant="card-subtitle">
                            Previous Week     {" "} 
                            <span className="font-semibold">

                             $68,768
                            </span>
                        </Typography>

         
            
          </div>
        </div>
        <div className="h-[14.5rem]" >
          <LineChart className="h-[14.5rem]" data={data} lines={lines} />
        </div>
      </CardContent>
    </Card>
  )
}