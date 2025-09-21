"use client"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts"

interface BarChartData {
  name: string
  [key: string]: string | number
}

interface BarChartProps {
  data: BarChartData[]
  bars: Array<{
    dataKey: string
    fill: string
    radius?: [number, number, number, number]
    stackId?: string
  }>
  className?: string
}

export function BarChart({ data, bars, className = "" }: BarChartProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%" className={'h-[10rem]'}>
        <RechartsBarChart
          data={data}
          margin={{ top: 25, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="1" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--chart-axis-text))" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--chart-axis-text))" }}
            tickFormatter={(value) => `${value / 1000000}M`}
            domain={[0, 30000000]}
            ticks={[0, 10000000, 20000000, 30000000]}
          />
          {bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              fill={bar.fill}
              radius={bar.radius || [0, 0, 0, 0]}
              maxBarSize={40}
              stackId={bar.stackId || "stack"}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}