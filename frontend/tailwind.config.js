/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'green':'#2CB0A8',
      'greenlight':'#2CB0A838',
      'yellowlight': '#FFE60038',
      'bleulight': '#2452AA38',
      'redlight': '#D13A3A38',
      'purple': '#AE2CB0',
      'purplelight': '#AE2CB038',
      'bleu':'#2452AA',
      'dark':'#141024',
      'light':'#ffffff',
      'gris':'#14102488',
    },
    extend: {
      backgroundImage: {
        'Group': "url('Group.png')",
        'a': "url('a.png')",
        'search': "url('search.png')",
        'Filter': "url('Filter.png')",
        'Group 19': "url('Group 19.png')",
        'Group 20': "url('Group 20.png')",
        'Group 21': "url('Group 21.png')",
        'Group 22': "url('Group 22.png')",
        'Group 23': "url('Group 23.png')",
      }
    }
  },
  plugins: [],
}
