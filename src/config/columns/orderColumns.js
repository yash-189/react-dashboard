import { TableActions } from '@/components/shared/TableActions/TableActions'
import { StatusBadge } from '@/components/shared/StatusBadge'

export const createOrderColumns = (actions) => [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "product", 
    header: "Product",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.getValue("amount")}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} type="order" />,
  },
  {
    accessorKey: "date",
    header: "Date", 
    cell: ({ row }) => new Date(row.getValue("date")).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <TableActions item={row.original} actions={actions} />
  },
]