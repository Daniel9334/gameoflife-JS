# Game of Life Application

The **Game of Life** is a cellular automaton simulation created by mathematician John Conway. This web-based implementation uses JavaScript, HTML, and CSS to visually represent how cells evolve based on a set of predefined rules.

---

## Features

### 1. Interactive Grid
- **Canvas-Based Rendering**: The simulation is displayed on an HTML `<canvas>` element for smooth and dynamic visual updates.
- **Resolution Customization**: Each cell on the grid has a size determined by the `resolution` variable, allowing easy adjustment of the grid's density.

---

### 2. Core Functionality

#### Rules of the Game of Life
- Each cell in the grid can be **alive (1)** or **dead (0)**.
- The state of a cell in the next generation depends on its **eight neighbors** and follows these rules:
  1. **Underpopulation**: A living cell with fewer than 2 neighbors dies.
  2. **Overpopulation**: A living cell with more than 3 neighbors dies.
  3. **Survival**: A living cell with 2 or 3 neighbors survives.
  4. **Reproduction**: A dead cell with exactly 3 neighbors becomes alive.

#### Dynamic Grid Updates
- **Grid Initialization**: The simulation starts with an empty grid or can be randomized for immediate gameplay.
- **Automatic Updates**: The grid is updated in real-time using `requestAnimationFrame`, ensuring smooth and responsive animations.

#### Neighbor Counting
- The `countNeighbors` function calculates the sum of all neighboring cells for a given position, wrapping around the edges for a seamless experience.

---

### 3. User Interface
- **Interactive Controls**: Buttons allow users to:
  1. **Start**: Begin the simulation.
  2. **Stop**: Pause the simulation.
  3. **Clear**: Reset the grid to an empty state.
  4. **Randomize**: Fill the grid with a random pattern of live and dead cells.
- **Real-Time Visualization**:
  - Alive cells are represented in black.
  - Dead cells are displayed in white.

---

### 4. Responsive Design
- A centered layout ensures the application is user-friendly on various screen sizes.
- Simple and elegant styling with a border around the canvas enhances usability.

---

### 5. Extensibility
- **Adjustable Settings**:
  - Change the `resolution` to modify the size of the cells.
  - Increase or decrease the `canvas` dimensions for larger or smaller grids.
- **Custom Patterns**: Users can modify the initial grid state in the JavaScript code

---

## Summary

This application is an excellent foundation for exploring more complex simulations or adding advanced features like user-drawn patterns or performance optimizations.
