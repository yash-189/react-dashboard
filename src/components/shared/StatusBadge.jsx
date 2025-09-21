import { Badge } from '@/components/ui/badge'

export const StatusBadge = ({ status, type = 'order' }) => {
  const getVariant = () => {
    if (type === 'order') {
      switch(status) {
        case 'completed': return 'default'
        case 'pending': return 'secondary' 
        case 'cancelled': return 'destructive'
        default: return 'secondary'
      }
    }
    
    if (type === 'transaction') {
      switch(status) {
        case 'success': return 'default'
        case 'pending': return 'secondary'
        case 'failed': return 'destructive'
        default: return 'secondary'
      }
    }
  }

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status}
    </Badge>
  )
}