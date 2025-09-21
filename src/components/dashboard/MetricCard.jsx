import { cn } from "@/lib/utils"
import { Card, CardContent } from "../ui/card"
import Typography from "../ui/Typography"
import { TrendingIcon } from "../icons"

const MetricCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  variant = "neutral",
  className,
  ...props
}) => {
  const getChangeColor = (type) => {
    switch(type) {
      case 'positive': return 'text-green-500'
      case 'negative': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }
 
  const getVariantStyles = (variant) => {
    switch(variant) {
      case 'primary': return 'bg-primary-blue dark:bg-primary-blue'
      case 'secondary': return 'bg-primary-light dark:bg-primary-light/5'
      case 'purple': return 'bg-primary-purple dark:bg-primary-purple'
      case 'neutral':
      default: return 'bg-white border-gray-200'
    }
  }
  
  const getTextColor = (variant) => {
    switch(variant) {
      case 'primary':
         return 'text-primary dark:text-black'
      case 'purple':
         return 'text-primary dark:text-black'
      case 'secondary':
         return 'text-black dark:text-white'
      case 'neutral':
      default:
        return 'text-primary dark:text-secondary'
    }
  }
  
  const getIconColorClass = (variant) => {
    switch(variant) {
      case 'primary':
        return 'text-black dark:text-black'
      case 'purple':
        return 'text-red-500 dark:text-black'
      case 'secondary':
        return 'text-black dark:text-white'
      case 'neutral':
      default:
        return 'text-black dark:text-white'
    }
  }
 
  return (
    <Card className={cn("min-h-24 sm:min-h-28 lg:max-h-28", getVariantStyles(variant), className)} {...props}>
      <CardContent className="h-full flex flex-col gap-2 justify-between p-4 sm:p-6">
        <Typography variant="card-title" className={getTextColor(variant)}>{title}</Typography>
        <div className="flex items-center justify-between gap-2">
          <Typography variant="metric-value" className={getTextColor(variant)}>{value}</Typography>
          {change && (
            <div className="flex items-center gap-1">
              <Typography variant="metric-value" className={cn("text-xs leading-[18px] font-normal", getTextColor(variant))}>{change}</Typography>
              <span className={getIconColorClass(variant)}>
                <TrendingIcon className={cn("size-4")} />
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default MetricCard