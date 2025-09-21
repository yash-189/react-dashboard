"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PieChart } from "@/components/charts/pie-chart"
import Typography from "../ui/Typography"

const data = [
  { name: "Direct", value: 300.56, color: "hsl(var(--primary))" },
  { name: "Affiliate", value: 135.18, color: "hsl(var(--secondary-indigo))" },
  { name: "Sponsored", value: 154.02, color: "hsl(var(--secondary-blue))" },
  { name: "E-mail", value: 48.96, color: "hsl(var(--secondary-mint))" },
]

const total = data.reduce((sum, item) => sum + item.value, 0)

export function TotalSales() {
  return (
    <Card className="h-full bg-primary-light">
      <CardContent className='flex flex-col gap-4'>
        <Typography variant="card-title">Total Sales</Typography>
        
        <div className="h-[14.5rem]">
          <div className="h-[4.5rem] flex items-center justify-center">
            <div className="relative">
              <div className="h-[120px] w-[120px]">
                <PieChart 
                  data={data} 
                  innerRadius={35} 
                  outerRadius={55} 
                  paddingAngle={4} 
                  cornerRadius={3} 
                />
              </div>

             
             </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4 mt-4">
            {data.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="h-2 w-2 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <Typography variant="card-subtitle">{item.name}</Typography>
                </div>
                <Typography variant="card-subtitle" className="font-semibold">
                  ${item.value.toFixed(2)}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}