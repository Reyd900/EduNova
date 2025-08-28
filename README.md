# EduNova - AI-Powered Interactive Abacus Learning Platform

## Overview
EduNova is a gamified 2D abacus learning platform that combines traditional mathematical learning with modern interactive technology. Built with React.js, this application provides an engaging way for children to learn abacus skills through three different modes: Tutorial, Free Mode, and Challenge Mode.

## Features

### 🎯 Three Learning Modes
- **Tutorial Mode**: Step-by-step guided learning experience
- **Free Mode**: Unrestricted practice environment
- **Challenge Mode**: Timed challenges with scoring system

### 🧮 Interactive Abacus
- Realistic 8-rod abacus simulation
- Heaven beads (value: 5) and Earth beads (value: 1)
- Visual feedback and animations
- Touch-friendly interface

### 🎮 Gamification Elements
- Score tracking and level progression
- Time-based challenges
- Visual feedback and celebrations
- Responsive UI with smooth animations

### 🎨 Modern Design
- Beautiful gradient backgrounds
- Glassmorphism UI effects
- Responsive design for all devices
- Smooth animations with Framer Motion

## Technology Stack

- **Frontend**: React.js 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Animations**: Framer Motion 6.5.1
- **Styling**: CSS3 with modern features
- **Icons**: Custom SVG components

## Project Structure

```
edunova-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Abacus/          # Abacus-related components
│   │   ├── UI/              # UI screens and layouts
│   │   └── Layout/          # Common layout components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── styles/              # CSS stylesheets
│   ├── App.js
│   ├── index.js
│   └── constants.js
├── package.json
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edunova-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Component Architecture

### Core Components

- **Abacus**: Main abacus component with interactive rods and beads
- **AbacusRod**: Individual rod with heaven and earth beads
- **Bead**: Interactive bead component with animations
- **MenuScreen**: Main navigation screen
- **TutorialScreen**: Guided learning experience
- **GameScreen**: Challenge and free mode gameplay

### Custom Hooks

- **useAbacus**: Manages abacus state and calculations
- **useGameState**: Handles game progression and scoring

### Utilities

- **abacusCalculations**: Mathematical operations for abacus values
- **gameLogic**: Game mechanics and challenge generation

## Performance Optimizations

- **Consistent 60 FPS rendering** through optimized animations
- **Minimal bundle size** with code splitting
- **Fast load times** with optimized assets
- **Responsive design** for smooth user interactions

## Educational Features

### Tutorial System
- Progressive difficulty levels
- Visual highlighting of active elements
- Step-by-step instructions
- Immediate feedback on progress

### Assessment Integration
- Real-time performance tracking
- Adaptive difficulty adjustment
- Progress visualization
- Achievement system

### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Touch and mouse interaction

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**EduNova** - Making learning fun, interactive, and effective! 🚀
