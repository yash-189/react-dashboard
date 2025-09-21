"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Typography from "../ui/Typography"

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.50,
    quantity: 37,
    amount: 4754.50
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36
  },
  {
    name: "Lightweight Jacket",
    price: 20.00,
    quantity: 184,
    amount: 3680.00
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81
  }
]

export function TopSellingProducts() {
  return (
    <Card className="h-full bg-primary-light">
      <CardContent className="flex flex-col gap-4">
        <Typography variant="card-title">Top Selling Products</Typography>
        
        <Table>
          <TableHeader>
            <TableRow className="border-b border-foreground/20">
              <TableHead>
                <Typography variant="card-subtitle" className="text-foreground/40">
                  Name
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography variant="card-subtitle" className="text-foreground/40">
                  Price
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography variant="card-subtitle" className="text-foreground/40">
                  Quantity
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography variant="card-subtitle" className="text-foreground/40">
                  Amount
                </Typography>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="card-subtitle">
                    {product.name}
                  </Typography>
                </TableCell>
                <TableCell className="text-center">
                  <Typography variant="card-subtitle">
                    ${product.price.toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell className="text-center">
                  <Typography variant="card-subtitle">
                    {product.quantity}
                  </Typography>
                </TableCell>
                <TableCell className="text-center">
                  <Typography variant="card-subtitle">
                    ${product.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}