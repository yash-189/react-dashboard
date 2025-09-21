"use client"
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts"

interface LineChartData {
  name: string
  [key: string]: string | number
}

interface LineChartProps {
  data: LineChartData[]
  lines: Array<{
    dataKey: string
    stroke: string
    strokeWidth?: number
    strokeDasharray?: string
    dot?: boolean
  }>
  className?: string
}

export function LineChart({ data, lines, className = "" }: LineChartProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%" className={'p-0'}>
        <RechartsLineChart data={data} margin={{ top: 25, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--chart-axis-text))" }}
            padding={{ left: 30, right: 20 }}
            type="category"
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--chart-axis-text))" }}
            tickFormatter={(value) => `${value / 1000000}M`}
            domain={[0, 30000000]}
            ticks={[0, 10000000, 20000000, 30000000]}
          />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth || 3}
              strokeDasharray={line.strokeDasharray}
              dot={line.dot || false}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}