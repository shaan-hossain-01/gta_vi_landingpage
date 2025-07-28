# GTA VI Landing Page Concept

This project is a conceptual, animated landing page for Grand Theft Auto VI, built with React and GSAP.

## Features

- **Immersive Scroll-Based Storytelling:** The page uses GSAP's ScrollTrigger to create a cinematic experience that unfolds as the user scrolls.
- **Dynamic Video Control:** Videos are programmatically controlled and scrubbed through based on scroll position.
- **Responsive Design:** The layout is designed to work well on all devices, from desktops to mobile phones.
- **Modern Tech Stack:** Built with React, Vite, and Tailwind CSS for a fast and efficient development experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development.
- **GSAP (GreenSock Animation Platform):** A professional-grade JavaScript animation library.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/shaan-hossain-01/gta_vi_landingpage.git
   ```

2. Navigate to the project directory
   ```bash
   cd gta_vi_landingpage
   ```

3. Install the necessary packages
   ```bash
   npm install
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## GSAP Animations Deep Dive

This project relies heavily on GSAP to create its dynamic and interactive animations. Here's a breakdown of the core features and concepts used:

### Core GSAP Concepts

#### 1. `gsap.to()`

This is the most fundamental method in GSAP. It animates a target object (like a DOM element) from its current state **to** a new state that you define.

- **Usage in the code:**
  ```javascript
  // In Hero.jsx
  tl.to(".scale-out", { scale: 1, ease: "power1.inOut" });
  ```

- **Explanation:** This line animates any element with the class `.scale-out` to have a `scale` of 1. The `ease` property makes the animation feel more natural by controlling its acceleration and deceleration.

#### 2. `gsap.set()`

This method immediately sets properties of an object without any animation. It's useful for defining the initial state of an element before an animation begins.

- **Usage in the code:**
  ```javascript
  // In Hero.jsx
  gsap.set(".mask-wrapper", {
    maskPosition: initialMaskPos,
    maskSize: initialMaskSize,
  });
  ```

- **Explanation:** This instantly sets the `mask-position` and `mask-size` CSS properties of the `.mask-wrapper` element to predefined values, preparing it for the main animation sequence.

#### 3. `gsap.timeline()`

A timeline is a powerful tool for sequencing multiple animations. It allows you to chain animations together, control their timing precisely, and manage them as a single, cohesive unit.

- **Usage in the code:**
  ```javascript
  // In Hero.jsx
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "+=200%",
      scrub: 2.5,
      pin: true,
    },
  });

  tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
    .to(".scale-out", { scale: 1, ease: "power1.inOut" }, "<");
  ```

- **Explanation:** A timeline `tl` is created and linked to a `scrollTrigger`. Animations are then added to this timeline. The `.to()` methods are chained, meaning they will play in sequence. The `<` at the end of the second `.to()` call is a position parameter, telling GSAP to start this animation at the same time as the previous one, creating an overlapping effect.

### ScrollTrigger Plugin

This is a very powerful plugin that allows you to trigger animations based on the scroll position.

- **`trigger`**: The element that triggers the animation when it enters the viewport.
  - **Usage**: `trigger: ".hero-section"`

- **`start`**: Defines the point at which the animation should start. It's a string with two values: the first for the trigger element and the second for the viewport.
  - **Usage**: `start: "top top"` (starts when the top of the trigger hits the top of the viewport).

- **`end`**: Defines the point at which the animation should end.
  - **Usage**: `end: "+=200%"` (ends when the scroll position has moved 200% of the viewport's height past the start point).

- **`scrub`**: This makes the animation "scrub" with the scrollbar. Instead of playing once, the animation's progress is directly linked to the scroll position. A numeric value (like `2.5`) adds a slight delay, making the animation smoother.
  - **Usage**: `scrub: 2.5`

- **`pin`**: This pins the trigger element to the viewport while the animation is active.
  - **Usage**: `pin: true`

### Animation Properties

These are the CSS properties that you are animating.

- **`opacity`**: Controls the transparency of an element. A value of `0` is fully transparent, and `1` is fully opaque.

- **`scale`**: Changes the size of an element. `scale: 1` is the original size, `scale: 1.25` is 25% larger, and so on.

- **`y`**: Moves an element vertically. A positive value moves it down, and a negative value moves it up.

- **`currentTime`**: This is a special property for `<video>` elements. Animating `currentTime` allows you to scrub through the video's timeline.

### Easing

- **`ease`**: Easing functions control the rate of change of an animation over time. `power1.inOut` is a specific easing function that starts and ends slowly, with a more constant speed in the middle. GSAP provides a wide variety of easing functions to create different animation styles.

## Project Structure

```
src/
├── components/
│   └── LoadingSpinner.jsx
├── sections/
│   ├── Hero.jsx
│   ├── Nav.jsx
│   ├── ComingSoon.jsx
│   ├── FirstVideo.jsx
│   ├── Jason.jsx
│   ├── SecondVideo.jsx
│   ├── Lucia.jsx
│   ├── PostCard.jsx
│   ├── Final.jsx
│   └── Outro.jsx
├── constants/
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational and demonstration purposes only. Grand Theft Auto VI is a trademark of Rockstar Games.

## Contact

**Shaan Hossain** - [@shaan-hossain-01](https://github.com/shaan-hossain-01)

Project Link: [https://github.com/shaan-hossain-01/gta_vi_landingpage](https://github.com/shaan-hossain-01/gta_vi_landingpage)
