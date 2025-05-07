
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// 360 DigiSigns RGB theme colors
				'digi-red': '#ea2027',
				'digi-green': '#6ab04c',
				'digi-blue': '#4834d4',
				'digi-black': '#121212',
				'digi-white': '#ffffff',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-rgb': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(234, 32, 39, 0.7)' 
					},
					'25%': { 
						boxShadow: '0 0 20px rgba(106, 176, 76, 0.7)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(72, 52, 212, 0.7)' 
					},
					'75%': { 
						boxShadow: '0 0 20px rgba(234, 32, 39, 0.7)' 
					},
				},
				'flow-rgb': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'glow-pulse': {
					'0%, 100%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' },
					'50%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.7)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'border-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
				},
				'scanlines': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '0 100%' }
				},
				'rgb-shift': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(180deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				},
				'light-sweep': {
					'0%': { transform: 'translateX(-100%) rotate(45deg)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'translateX(100%) rotate(45deg)', opacity: '0' }
				},
				'light-sweep-reverse': {
					'0%': { transform: 'translateX(100%) rotate(-45deg)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'translateX(-100%) rotate(-45deg)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-rgb': 'pulse-rgb 6s ease-in-out infinite',
				'flow-rgb': 'flow-rgb 8s ease infinite',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'border-glow': 'border-glow 2s ease-in-out infinite',
				'scanlines': 'scanlines 4s linear infinite',
				'rgb-shift': 'rgb-shift 10s linear infinite',
				'light-sweep': 'light-sweep 8s ease-in-out infinite',
				'light-sweep-reverse': 'light-sweep-reverse 8s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-rgb': 'linear-gradient(45deg, #ea2027, #6ab04c, #4834d4, #ea2027)',
			},
			backgroundSize: {
				'300%': '300% 300%',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
