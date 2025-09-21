import Typography from "@/components/ui/Typography"

export function StatusBadge({ status }) {
  const getTextColor = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "text-[#8A8CD9]"
      case "complete":
        return "text-[#4AA785]"
      case "pending":
        return "text-[#59A8D4]"
      case "approved":
        return "text-[#FFC555]"
      case "rejected":
        return "text-[#1C1C1C66] dark:text-gray-500"
      default:
        return "text-gray-700"
    }
  }

  const getDotColor = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-[#8A8CD9]"
      case "complete":
        return "bg-[#4AA785]"
      case "pending":
        return "bg-[#59A8D4]"
      case "approved":
        return "bg-[#FFC555]"
      case "rejected":
        return "bg-[#1C1C1C66] dark:bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <span className={`inline-flex items-center `}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getDotColor(status)}`} />
      <Typography variant="table-cell" className={getTextColor(status)}>
        {status}
      </Typography>
    </span>
  )
}