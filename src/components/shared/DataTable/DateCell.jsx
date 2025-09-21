import Typography from "@/components/ui/Typography"
import { Calendar } from "lucide-react"

export function DateCell({ date }) {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="h-4 w-4 text-foreground" />
                              <Typography variant="table-cell">

      {date}
      </Typography>
    </div>
  )
}
