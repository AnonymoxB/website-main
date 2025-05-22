import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
      "beauty-salon-script": ["BeautySalon Script", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2xs': ['10px', {
          lineHeight: '0.75rem',
        }],
        'web-h1-bold': ['60px', {
          fontWeight: '700',
        }],
        'tab-h1-bold': ['35px', {
          fontWeight: '700',
        }],
        'mob-h1-bold': ['24px', {
          fontWeight: '700',
        }],
        'web-body-lead-regular': ['18px', {
          lineHeight: '28px',
        }],
        'web-paragraft-reguler': ['16px', {
          lineHeight: '24px'
        }],
        'tab-body-lead-regular': ['14px', {
          lineHeight: '25px',
        }],
        'mob-small-regular': ['12px', {
          lineHeight: '150%'
        }],
        'mob-paragraft-reguler': ['14px', {
          lineHeight: '150%'
        }],
        'mob-extrasmall-reguler': ['12px', {
          lineHeight: '16px'
        }],
        'mob-tiny-reguler': ['10px', {
          lineHeight: '150%'
        }],


      },
      colors: {
        neutral: {
          DEFAULT: '#F9FAFB',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        blue: {
          50: '#E6F2FF',
          100: '#CCE6FF',
          200: '#99CDFF',
          300: '#67B3FF',
          400: '#349AFF',
          500: '#0181FF',
          600: '#0167CC',
          700: '#014D99',
          800: '#003466',
          900: '#001A33'
        },
        green: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        yellow: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12'
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D'
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        gradient: {
          blue: {
            start: '#00C1FF',
            end: '#0061FF'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
