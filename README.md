# 🎓 Student Result Analytics Portal

### 📝 Project Overview
The **Student Result Analytics Portal** is a sophisticated, single-page web application developed using **React.js**. It is designed to streamline the academic evaluation process by providing students and educators with an instantaneous, data-driven breakdown of semester performance. Moving beyond a simple form, this tool serves as a comprehensive performance dashboard that transforms raw marks into actionable academic insights.

### 🎯 Core Objectives
The primary goal of this assessment was to demonstrate mastery over **React State Management** and **Dynamic UI Rendering**. By utilizing a "Controlled Component" approach, the application captures user input across seven diverse subjects, processes the data through mathematical logic, and triggers a seamless transition from the input interface to a high-fidelity results dashboard.

### 🛠️ Key Technical Features
* **Reactive Data Handling:** Employs the `useState` hook to manage an object-based data structure, ensuring efficient updates without unnecessary re-renders.
* **Intelligent Analytics:** Calculates weighted averages and assigns grades based on a strict academic hierarchy (A+ to F).
* **Performance Visualization:** Features a custom SVG-based **Circular Progress Ring** that updates in real-time to match the student's percentage.
* **Automated Insights:** Identifies the user's "Star Subject" (highest score) and generates a status-specific badge (e.g., "Promoted" vs "Academic Probation").

### 🎨 UI/UX Philosophy
The application follows a **Modern Arctic Aesthetic**, utilizing a bright, high-contrast palette of Indigo and Slate.
* **Neumorphic Depth:** Subtle shadows and 32px rounded corners create a premium "App-like" feel.
* **Responsive Architecture:** A dual-pane grid layout optimized for all screen sizes.
* **Interactive Feedback:** Input fields feature active focus states and smooth transitions.

### 🚀 Installation & Setup
1. Clone the repo: `git clone https://github.com/your-username/repo-name.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`

### 📊 Grading Scale
| Average Score | Grade | Status |
| :--- | :--- | :--- |
| **80% - 100%** | **A+** | Promoted |
| **60% - 79%** | **B** | Promoted |
| **40% - 59%** | **C** | Promoted |
| **Below 40%** | **F** | Probation |

---
**Developed by Sanjay**
