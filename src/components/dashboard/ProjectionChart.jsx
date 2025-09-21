import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@/components/charts/bar-chart"
import Typography from "../ui/Typography"

const data = [
  { name: "Jan", actuals: 18000000, projections: 2000000 }, // actuals first (bottom), projections on top
  { name: "Feb", actuals: 22000000, projections: 3000000 },
  { name: "Mar", actuals: 19000000, projections: 3000000 },
  { name: "Apr", actuals: 26000000, projections: 2000000 },
  { name: "May", actuals: 16000000, projections: 2000000 },
  { name: "Jun", actuals: 24000000, projections: 2000000 },
]

const bars = [
  {
    dataKey: "actuals",
    fill: "#A8C5DA", // darker blue for bottom section
    stackId: "stack",
    radius: [0, 0, 0, 0], // no radius for bottom
  },
  {
    dataKey: "projections", 
    fill: "#CFDEEA", // lighter blue for top section
    stackId: "stack",
    radius: [4, 4, 0, 0], // rounded top corners only
  },
]

export function ProjectionsVsActuals() {
  return (
    <Card className=" h-full ">
              

    
    
      <CardContent className='flex flex-col h-full'>
        <>
          <Typography variant="card-title">{'Projections vs Actuals'}</Typography>
          <BarChart data={data} bars={bars}  />
        </>
      </CardContent>
    </Card>
  )
}