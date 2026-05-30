# Charuka P - Machine Learning Engineer Portfolio

A premium, interactive personal portfolio website showcasing the skills, projects, and professional background of **Charuka P**, a Machine Learning Engineer and Python Developer.

The site is built with modern, clean HTML5, CSS3 styling (dark theme with vibrant gradient glow details), and interactive vanilla JavaScript logic (animations, filtering, and a recruiter assistant chatbot).

## 🚀 Live Demo & Links
- **GitHub Repository**: [https://github.com/charupraba2/](https://github.com/charupraba2/)
- **LinkedIn**: [Charuka P on LinkedIn](https://www.linkedin.com/in/charuka-p-91578b311/)

---

## ✨ Key Features

1. **Interactive Recruiter Chatbot**:
   - A client-side simulated AI assistant integrated directly into the page.
   - Provides instant answers regarding Charuka's skills, work experience, specific projects, and resume download.
   - Implements typing animations, realistic message delays, and suggested quick-query prompts.

2. **Dynamic Project Filtering**:
   - Filter portfolio cards seamlessly across categories: *ML & AI*, *Web & Full Stack*, and *Data Analytics*.
   - Uses optimized animations to transition matching cards in/out.

3. **Smooth Scroll Reveal Animations**:
   - Automatically animates components and triggers skill progress bars to fill as they enter the browser viewport using `IntersectionObserver`.

4. **Modern Fluid UI/UX**:
   - Responsive navbar with mobile-toggle drawer support.
   - Dark theme styling with radial glow elements and modern typography (Outfit, Inter, and Fira Code fonts).
   - Fully accessible SVG icons.

5. **Contact Form Validation & Simulation**:
   - Interactive feedback showing custom spinners and validation status upon message submission.

---

## 🛠️ Tech Stack & Skills

- **Front-End**: HTML5, Vanilla CSS3 (Custom Properties, Flexbox, Grid), JavaScript (ES6+)
- **Machine Learning & Data**: Python, Scikit-learn, Pandas, NumPy, OpenCV, NLTK, Jupyter Notebooks
- **Web Development**: Django, FastAPI, Flask, Streamlit, SQLite
- **DevOps & Cloud**: Git, GitHub, Docker, Linux, AWS Cloud
- **Business Intelligence**: Power BI, Tableau, Excel

---

## 📂 Project Structure

```text
resume_portfolio/
├── index.html        # Main HTML layout, SEO meta tags, and section details
├── styles.css        # Responsive layouts, gradients, animations, and dark-theme variables
├── script.js        # Navigation logic, IntersectionObserver animations, project filters, and chatbot replies
├── resume.pdf        # Downloadable PDF copy of the professional resume
├── .gitignore        # Standard git ignore patterns
└── README.md         # Documentation file
```

---

## 💻 Featured Projects Mentioned

- **Smart Attendance System**:
  - *Tech*: Python, OpenCV, Streamlit, SQLite, Scikit-learn
  - *Details*: Automates attendance via real-time facial recognition. Reached **98.2% validation accuracy** and optimized to run efficiently on standard CPU architectures.
- **AI Chatbot (Emotion-Based)**:
  - *Tech*: Python, FastAPI, NLTK, Scikit-learn
  - *Details*: Real-time sentiment classification and conversational context engine.
- **Car Price Prediction**:
  - *Tech*: Python, Scikit-learn, Pandas, Flask
  - *Details*: Regression analysis and predictive API endpoint for vehicle valuation.
- **Fake Job Posting Detection**:
  - *Tech*: Python, Scikit-learn, Streamlit, NLP
  - *Details*: TF-IDF classification model for preventing job scams.
- **Weather Prediction & Analysis**:
  - *Tech*: Python, Streamlit, Power BI, Pandas
  - *Details*: Historical data analytics, time-series prediction, and dashboard reporting.
- **PredictaFlow**:
  - *Tech*: Python, Scikit-learn, Web Interface, Machine Learning
  - *Details*: A smart AI-powered prediction system that processes data smoothly and efficiently, delivering real-time machine learning predictions through a clean web interface.
- **Employee Management System**:
  - *Tech*: Python, Django, SQLite, HTML5, CSS3, JS
  - *Details*: Role-based access control database dashboard.

---

## 🔧 Local Development Setup

To run this portfolio website locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/charupraba2/resume_portfolio.git
   cd resume_portfolio
   ```

2. **Run a local web server**:
   Since it is built on vanilla web technologies, you can open `index.html` directly in any web browser. 
   Alternatively, you can run a local server (e.g., using Python's built-in HTTP server module):
   ```bash
   python -m http.server 8000
   ```
   Now, navigate to `http://localhost:8000` in your web browser.

---

## 📄 License
This project is open-source and available under the MIT License. Feel free to use it as a reference for your own portfolio.
