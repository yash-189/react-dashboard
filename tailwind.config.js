/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		screens: {
    'xs': '30rem',    /* 480px */
    '2xl': '80rem',   /* 1280px */
    '3xl': '90rem',   /* 1440px */
    '4xl': '112.5rem' /* 1800px */
},
  		borderRadius: {
  			DEFAULT: 'var(--radius)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				blue: 'hsl(var(--primary-blue))',
  				light: 'hsl(var(--primary-light))',
  				purple: 'hsl(var(--primary-purple))',
  				'brand-light': 'hsl(var(--primary-brand-light))',
  				'brand-dark': 'hsl(var(--primary-brand-dark))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				cyan: 'hsl(var(--secondary-cyan))',
  				indigo: 'hsl(var(--secondary-indigo))',
  				blue: 'hsl(var(--secondary-blue))',
  				mint: 'hsl(var(--secondary-mint))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			status: {
  				purple: 'hsl(var(--status-purple))',
  				green: 'hsl(var(--status-green))',
  				yellow: 'hsl(var(--status-yellow))',
  				blue: 'hsl(var(--status-blue))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'sidebar-stroke': 'hsl(var(--sidebar-stroke))',
  			'subgroup-text': 'hsl(var(--subgroup-text))',
  			'chart-axis-text': 'hsl(var(--chart-axis-text))',
  			'chart-bg': 'hsl(var(--chart-bg))',
  			'table-border': 'hsl(var(--table-border))',
  			'header-bg': 'hsl(var(--header-bg))'
  		},
  		spacing: {
  			'xs': 'var(--spacing-xs)',
  			'sm': 'var(--spacing-sm)',
  			'md': 'var(--spacing-md)',
  			'lg': 'var(--spacing-lg)',
  			'xl': 'var(--spacing-xl)'
  		},
  		fontSize: {
  			// 'xs': ['var(--text-xs)', 'var(--leading-tight)'],
  			// 'sm': ['var(--text-sm)', 'var(--leading-normal)'],
  			// 'lg': ['var(--text-lg)', 'var(--leading-relaxed)']
  		},
  		width: {
  			'sidebar': 'var(--sidebar-width)',
  			'icon-sm': 'var(--icon-sm)',    /* 20px */
  			'icon-md': 'var(--icon-md)',    /* 24px */
  			'icon-lg': 'var(--icon-lg)'     /* 28px */
  		},
  		height: {
  			'icon-sm': 'var(--icon-sm)',    /* 20px */
  			'icon-md': 'var(--icon-md)',    /* 24px */
  			'icon-lg': 'var(--icon-lg)'     /* 28px */
  		},
  		size: {
  			'icon-sm': 'var(--icon-sm)',    /* 20px */
  			'icon-md': 'var(--icon-md)',    /* 24px */
  			'icon-lg': 'var(--icon-lg)'     /* 28px */
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}