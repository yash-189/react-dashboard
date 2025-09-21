import { AccountIcon, AnalyticsIcon, BlogIcon, BookIcon, BuildingIcon, ChartIcon, ChatIcon, CorporateIcon, DocumentIcon, EcommerceIcon, FolderIcon, OnlineLearningIcon, ProjectsIcon, SettingsIcon, ShoppingCartIcon, SocialIcon, UserIcon, UserProfileIcon } from "@/components/icons";

export const navigationConfig = {
  header: {
    title: "ByeWind",
    avatar: "B",
    href: "/"
  },
 
  tabs: [
    { name: "Favorites", active: true, href: "/favorites" },
    { name: "Recently", active: false, href: "/recently" }
  ],
 
  quickLinks: [
    { name: "Overview", href: "/overview" },
    { name: "Projects", href: "/projects" }
  ],
  
  sections: [
    {
      id: "dashboards",
      title: "Dashboards",
      items: [
        {
          name: "Default",
          icon: AnalyticsIcon,
          collapsible: false,
          href: "/dashboard"
        },
        {
          name: "eCommerce",
          icon: EcommerceIcon,
          collapsible: true,
          href: "/ecommerce",
          children: [
            { name: "Dashboard", href: "/" },
            { name: "Orders", href: "/ecommerce/orders" },
            { name: "Customers", href: "/ecommerce/customers" },
            { name: "Analytics", href: "/ecommerce/analytics" }
          ]
        },
        {
          name: "Projects",
          icon: ProjectsIcon,
          collapsible: true,
          href: "/projects",
          children: [
            { name: "All Projects", href: "/projects/all" },
            { name: "Active", href: "/projects/active" },
            { name: "Completed", href: "/projects/completed" },
            { name: "Archive", href: "/projects/archive" }
          ]
        },
        {
          name: "Online Courses",
          icon: OnlineLearningIcon,
          collapsible: true,
          href: "/courses",
          children: [
            { name: "My Courses", href: "/courses/my" },
            { name: "Browse", href: "/courses/browse" },
            { name: "Certificates", href: "/courses/certificates" }
          ]
        }
      ]
    },
    {
      id: "pages",
      title: "Pages",
      items: [
        {
          name: "User Profile",
          icon: UserProfileIcon,
          collapsible: true,
          expanded: true,
          href: "/profile",
          children: [
            { name: "Overview", href: "/profile/overview" },
            { name: "Projects", href: "/profile/projects" },
            { name: "Campaigns", href: "/profile/campaigns" },
            { name: "Documents", href: "/profile/documents" },
            { name: "Followers", href: "/profile/followers" }
          ]
        },
        {
          name: "Account",
          icon: AccountIcon,
          collapsible: true,
          href: "/account",
          children: [
            { name: "Settings", href: "/account/settings" },
            { name: "Security", href: "/account/security" },
            { name: "Billing", href: "/account/billing" },
            { name: "Notifications", href: "/account/notifications" }
          ]
        },
        {
          name: "Corporate",
          icon: CorporateIcon,
          collapsible: true,
          href: "/corporate",
          children: [
            { name: "Company", href: "/corporate/company" },
            { name: "Team", href: "/corporate/team" },
            { name: "Departments", href: "/corporate/departments" }
          ]
        },
        {
          name: "Blog",
          icon: BlogIcon,
          collapsible: true,
          href: "/blog",
          children: [
            { name: "All Posts", href: "/blog/posts" },
            { name: "Published", href: "/blog/published" },
            { name: "Drafts", href: "/blog/drafts" },
            { name: "Categories", href: "/blog/categories" }
          ]
        },
        {
          name: "Social",
          icon: SocialIcon,
          collapsible: true,
          href: "/social",
          children: [
            { name: "Feed", href: "/social/feed" },
            { name: "Messages", href: "/social/messages" },
            { name: "Groups", href: "/social/groups" },
            { name: "Events", href: "/social/events" }
          ]
        }
      ]
    }
  ]
};