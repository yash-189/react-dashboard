import React from 'react'
import Typography from './Typography'

const Breadcrumb = ({ items }) => (
  <nav className="flex items-center gap-4 rounded px-2 py-1">
    {items.map((item, index) => (
      <React.Fragment key={item.name}>
        <Typography 
          variant={item.active ? "breadcrumb-active" : "breadcrumb-inactive"}
        >
          {item.name}
        </Typography>
        {index < items.length - 1 && (
          <Typography variant="sidebar-group" className="text-gray-400">/</Typography>
        )}
      </React.Fragment>
    ))}
  </nav>
)

export default Breadcrumb