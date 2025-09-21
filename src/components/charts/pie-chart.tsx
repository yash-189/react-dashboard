"use client"
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface PieChartData {
  name: string
  value: number
  color: string
}

interface PieChartProps {
  data: PieChartData[]
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
  cornerRadius?: number
  className?: string
}

export function PieChart({
  data,
  innerRadius = 20,
  outerRadius = 100,
  paddingAngle = 1,
  cornerRadius = 8,
  className = "",
}: PieChartProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}
            cornerRadius={cornerRadius}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
