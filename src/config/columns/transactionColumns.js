import { TableActions } from '@/components/shared/TableActions/TableActions'
import { StatusBadge } from '@/components/shared/StatusBadge'

export const createTransactionColumns = (actions) => [
  {
    accessorKey: "id", 
    header: "Transaction ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.getValue("amount")}`,
  },
  {
    accessorKey: "status", 
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} type="transaction" />,
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