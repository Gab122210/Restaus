/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        jost: ['Jost', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        lora: ['Lora', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },

        textShadow: {
        glow: "0 0 5px #fff, 0 0 10px #fff",
      },

          /*----custom-ping---*/
          animation: {
        "custom-ping": "custom-ping 3s cubic-bezier(0, 0,0.2, 1) infinite",
      },
          
            keyframes: {
        "custom-ping": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
        
    },
  },
  plugins: [],
}

