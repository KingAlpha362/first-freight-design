/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand:        'var(--ff-red)',
        'brand-deep': 'var(--ff-red-deep)',
        orange:       'var(--ff-orange)',
        'orange-lt':  'var(--ff-orange-lt)',
        graphite:     'var(--ff-graphite)',
        ink:          'var(--ff-ink)',
        paper:        'var(--ff-paper)',
        mist:         'var(--ff-mist)',
        line:         'var(--ff-line)',
        'line-2':     'var(--ff-line-2)',
        fog:          'var(--ff-fog)',
        slate:        'var(--ff-slate)',
        steel:        'var(--ff-steel)',
        'steel-deep': 'var(--ff-steel-deep)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        cond:    ['var(--font-cond)'],
      },
      borderRadius: {
        xs:   'var(--r-xs)',
        sm:   'var(--r-sm)',
        md:   'var(--r-md)',
        lg:   'var(--r-lg)',
        pill: 'var(--r-pill)',
      },
      boxShadow: {
        sm:    'var(--sh-sm)',
        md:    'var(--sh-md)',
        lg:    'var(--sh-lg)',
        brand: 'var(--sh-brand)',
      },
      transitionTimingFunction: {
        ff: 'cubic-bezier(.2,.7,.2,1)',
      },
      transitionDuration: {
        ff: '180ms',
      },
    },
  },
  plugins: [],
}

