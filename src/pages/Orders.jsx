"use client"

import { useState, useEffect } from "react"
import { MoreHorizontal, ShoppingCart } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/shared/DataTable/DataTable"
import Typography from "@/components/ui/Typography"

const baseOrderData = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    project: "E-commerce Platform",
    address: "Pine Street Seattle",
    date: "2 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    project: "Mobile App UI",
    address: "Broadway New York",
    date: "3 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    project: "Marketing Website",
    address: "Oak Avenue Portland",
    date: "5 hours ago",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    project: "Data Dashboard",
    address: "Main Street Austin",
    date: "1 day ago",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: {
      name: "Lisa Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    project: "Portfolio Website",
    address: "First Avenue Denver",
    date: "2 days ago",
    status: "Rejected",
  }
];

const generateOrderData = (count = 50) => {
  const data = [];
  const baseCount = baseOrderData.length;
  
  for (let i = 0; i < count; i++) {
    const baseIndex = i % baseCount;
    const baseItem = baseOrderData[baseIndex];
    
    data.push({
      ...baseItem,
      id: `#CM${9801 + i}`,
    });
  }
  
  return data;
};


const orderData = generateOrderData(55); // Creates 55 entries

const columns = [
  {
    accessorKey: "id",
    header: "Order ID",
    
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.getValue("user")
      return (
        <div className="flex items-center gap-3">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="size-6 rounded-full object-cover"
          />
          <Typography variant="table-cell" >
            {user.name}
          </Typography>
        </div>
      )
    },
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "address",
    header: "Address",
   
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
 
]

const Orders = ({ simulateLoading = false, simulateError = false, simulateEmpty = false }) => {
  const [isLoading, setIsLoading] = useState(simulateLoading)
  const [error, setError] = useState(simulateError ? new Error("Failed to fetch orders") : null)
  const [data, setData] = useState(simulateEmpty ? [] : orderData)

  useEffect(() => {
    if (simulateLoading) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        if (simulateError) {
          setError(new Error("Network error: Unable to fetch orders"))
        } else if (!simulateEmpty) {
          setData(orderData)
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [simulateLoading, simulateError, simulateEmpty])

  const handleAdd = () => {
    const newOrder = {
      id: `#CM980${data.length + 6}`,
      user: {
        name: "New User",
        avatar: "/professional-woman.png",
      },
      project: "New Project",
      address: "New Address",
      date: "Just now",
      status: "Pending",
    }
    setData([newOrder, ...data])
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setData(orderData)
    }, 1000)
  }

  const emptyStateProps = {
    title: "No orders yet",
    description: "Start by creating your first order to track customer requests and projects.",
    actionLabel: "Create order",
    icon: ShoppingCart,
  }

  return (
   <div className=' min-h-screen'>
        <Typography variant="page-title" >
Order List
            </Typography>
      <DataTable
        columns={columns}
        data={data}
        title="Order List"
        onAdd={handleAdd}
        searchPlaceholder="Search orders..."
        isLoading={isLoading}
        error={error}
        onRetry={handleRetry}
        emptyStateProps={emptyStateProps}
        showCheckbox={true}
        showStatus={true}
        showDate={true}
        showActions={true}
      />
    </div>
  )
}

export default Orders