import React from "react"
import { Link } from "react-router"
import { cn } from "../../lib/utils"

// Navigation & Layout Typography
type NavigationVariant = 
  | 'sidebar-heading'
  | 'sidebar-group' 
  | 'sidebar-item'
  | 'sidebar-child'
  | 'breadcrumb-active'
  | 'breadcrumb-inactive'

// Content Hierarchy Typography  
type ContentVariant =
  | 'page-title'
  | 'page-subtitle'
  | 'section-title'
  | 'card-title'
  | 'card-subtitle'

// Data Display Typography
type DataVariant =
  | 'table-header'
  | 'table-cell'
  | 'metric-value'
  | 'status-text'

// Interactive Typography
type InteractiveVariant =
  | 'tab-active'
  | 'tab-inactive'
  | 'button-text'

// Base Typography
type BaseVariant =
  | 'body'
  | 'caption' 
  | 'label'

type TypographyVariant = 
  | NavigationVariant 
  | ContentVariant 
  | DataVariant 
  | InteractiveVariant 
  | BaseVariant

type TypographySize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'default'
type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'default'
type TypographyColor = 
  | 'primary' | 'secondary' | 'muted' | 'disabled' | 'inverse' 
  | 'danger' | 'success' | 'warning' | 'info' 
  | 'purple' | 'green' | 'yellow' | 'blue' | 'gray' | 'default'

interface TypographyProps {
  variant?: TypographyVariant
  size?: TypographySize
  weight?: TypographyWeight
  color?: TypographyColor
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  to?: string
}

const Typography = React.forwardRef<HTMLElement, TypographyProps & React.HTMLAttributes<HTMLElement>>(
  ({ 
    variant = "body", 
    size = "default", 
    weight = "default", 
    color = "default", 
    children, 
    className, 
    as, 
    to,
    ...props 
  }, ref) => {
    
    const baseStyles = "font-inter"

    const variants: Record<TypographyVariant, string> = {
      // Navigation & Layout
      "sidebar-heading": "text-sm font-normal text-primary",
      "sidebar-group": "text-sm font-normal text-primary/40",
      "sidebar-item": "text-sm leading-5 font-normal text-primary",
      "sidebar-child": "text-sm leading-5 font-normal text-primary/60",
      "breadcrumb-active": "text-sm font-normal text-primary",
      "breadcrumb-inactive": "text-sm font-normal text-primary/40",

      // Content Hierarchy
      "page-title": "text-sm  font-semibold text-primary mb-4",
      "page-subtitle": "text-sm leading-normal font-normal text-primary/60",
      "section-title": "text-sm leading-normal font-semibold text-primary",
      "card-title": "text-sm font-semibold text-primary",
      "card-subtitle": "text-xs leading-[18px] font-normal text-primary",

      // Data Display
      "table-header": "text-xs leading-[18px] font-normal text-primary/40",
      "table-cell": "text-xs leading-[18px] font-normal text-primary",
      "metric-value": "text-2xl leading-9 font-semibold text-primary",
      "status-text": "text-xs leading-tight font-normal",

      // Interactive
      "tab-active": "text-sm leading-normal font-normal text-primary/60",
      "tab-inactive": "text-sm leading-normal font-normal text-primary/20",
      "button-text": "text-sm leading-normal font-medium text-primary",

      // Base Typography
      "body": "text-sm font-normal text-primary",
      "caption": "text-sm font-normal text-primary/40",
      "label": "text-sm leading-normal font-medium text-primary",
    }

    const sizes: Record<TypographySize, string> = {
      xs: "text-xs leading-tight",
      sm: "text-sm leading-normal", 
      base: "text-sm leading-normal",
      lg: "text-lg leading-relaxed",
      xl: "text-xl leading-loose",
      default: "",
    }

    const weights: Record<TypographyWeight, string> = {
      light: "font-light",
      normal: "font-normal", 
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      default: "",
    }

    const colors: Record<TypographyColor, string> = {
      primary: "text-primary",
      secondary: "text-primary/60", 
      muted: "text-primary/40",
      disabled: "text-primary/20",
      inverse: "text-background",
      danger: "text-red-600",
      success: "text-green-600", 
      warning: "text-yellow-600",
      info: "text-blue-600",
      purple: "text-status-purple",
      green: "text-status-green",
      yellow: "text-status-yellow", 
      blue: "text-status-blue",
      gray: "text-primary/40",
      default: "",
    }

    const componentMap: Record<TypographyVariant, React.ElementType> = {
      // Navigation & Layout
      "sidebar-heading": "h4",
      "sidebar-group": "div",
      "sidebar-item": "div", 
      "sidebar-child": "div",
      "breadcrumb-active": "span",
      "breadcrumb-inactive": "span",

      // Content Hierarchy  
      "page-title": "h1",
      "page-subtitle": "p",
      "section-title": "h2",
      "card-title": "h3", 
      "card-subtitle": "p",

      // Data Display
      "table-header": "th",
      "table-cell": "td",
      "metric-value": "div",
      "status-text": "span",

      // Interactive
      "tab-active": "button",
      "tab-inactive": "button", 
      "button-text": "span",

      // Base Typography
      "body": "p",
      "caption": "span",
      "label": "label",
    }

    const Component = as || (to ? Link : componentMap[variant] || "span")
    
    const componentProps: any = {
      ref,
      className: cn(
        baseStyles,
        variants[variant],
        size !== "default" && sizes[size],
        weight !== "default" && weights[weight], 
        color !== "default" && colors[color],
        className,
      ),
      ...(to && { to }),
      ...props,
    }

    return React.createElement(Component, componentProps, children)
  },
)

Typography.displayName = "Typography"

export default Typography