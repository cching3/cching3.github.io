# Personal Portfolio Website

A modern, responsive personal portfolio website built with React to showcase my projects and skills.

## Project Structure

```
personal-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Card.js
│   ├── pages/
│   │   ├── index.js
│   │   └── about.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Project showcase section
- Skills and experience highlights
- Contact form
- Dark/light mode toggle

## Technologies Used

- React.js
- CSS3 with custom properties
- JavaScript ES6+
- React Router for navigation
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/personal-portfolio.git
   ```

2. Navigate to the project directory
   ```
   cd personal-portfolio
   ```

3. Install dependencies
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000`

## Customization

- Update the personal information in `src/data/profile.js`
- Add your projects in `src/data/projects.js`
- Customize styles in the `src/styles` directory
- Replace images in `public/assets/images` with your own

## Deployment

This site can be easily deployed to platforms like:
- GitHub Pages
- Netlify
- Vercel
- AWS Amplify

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images (if used)