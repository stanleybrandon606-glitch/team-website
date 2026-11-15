// ==========================================
// PART 4: JAVASCRIPT FUNCTIONALITY
// ==========================================

// 1. Update the footer year
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// 2. Mobile navigation menu
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // Close the menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 3. Dark and light theme toggle
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("teamByteTheme");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

// Apply the saved theme, or use light mode by default
applyTheme(savedTheme || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("teamByteTheme", newTheme);
  });
}

// 4. Projects data
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing personal information and skills.",
    category: "html",
  },
  {
    title: "Student Registration Page",
    description:
      "A simple web page designed to collect student registration information.",
    category: "html",
  },
  {
    title: "Responsive Landing Page",
    description:
      "A modern landing page with responsive layouts and reusable styles.",
    category: "css",
  },
  {
    title: "CSS Card Design",
    description:
      "A collection of attractive cards created using CSS Grid and Flexbox.",
    category: "css",
  },
  {
    title: "Interactive Calculator",
    description:
      "A calculator that performs basic mathematical operations using JavaScript.",
    category: "js",
  },
  {
    title: "Task Management App",
    description:
      "A simple application that allows users to add and manage daily tasks.",
    category: "js",
  },

  {
    title: "RentHub - Rental Management App",
    description:
      "A mobile application designed to help users discover rental properties, explore available listings and connect with property owners.",
    category: "mobile",
  },
  {
    title: "Employee Workflow Optimization Dashboard",
    description:
      "A responsive dashboard built with React.js to improve employee task management, visualise data and streamline workflows.",
    category: "js",
  },
];

// 5. Project filtering and rendering
const projectList = document.getElementById("project-list");
const projectCount = document.getElementById("project-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectSearch = document.getElementById("project-search");

let activeCategory = "all";

function displayProjects(category = activeCategory) {
  if (!projectList) return;

  activeCategory = category;

  const searchTerm = projectSearch
    ? projectSearch.value.trim().toLowerCase()
    : "";

  projectList.textContent = "";

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    const searchableText =
      `${project.title} ${project.description}`.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const categoryLabel = document.createElement("span");
    categoryLabel.classList.add("project-category");
    categoryLabel.textContent = project.category.toUpperCase();

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(categoryLabel);

    projectList.appendChild(card);
  });

  if (projectCount) {
    projectCount.textContent = `Showing ${filteredProjects.length} project(s)`;
  }

  if (filteredProjects.length === 0) {
    projectList.textContent =
      "No projects match your search or selected category.";
  }
}

if (projectList) {
  displayProjects();

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      displayProjects(selectedCategory);

      filterButtons.forEach((filterButton) => {
        filterButton.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  if (projectSearch) {
    projectSearch.addEventListener("input", () => {
      displayProjects(activeCategory);
    });
  }
}

// 6. Contact form character counter and validation
const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("char-count");
const formStatus = document.getElementById("form-status");

const maximumMessageLength = 500;

function updateCharacterCount() {
  if (!messageInput || !charCount) return;

  charCount.textContent = `${messageInput.value.length}/${maximumMessageLength}`;
}

if (messageInput) {
  messageInput.addEventListener("input", updateCharacterCount);
  updateCharacterCount();
}

// Display a field error
function showError(field, errorElement, message) {
  if (errorElement) {
    errorElement.textContent = message;
  }

  if (field) {
    field.setAttribute("aria-invalid", "true");
  }
}

// Clear a field error
function clearError(field, errorElement) {
  if (errorElement) {
    errorElement.textContent = "";
  }

  if (field) {
    field.removeAttribute("aria-invalid");
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const topic = document.getElementById("topic");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const topicError = document.getElementById("topic-error");
    const messageError = document.getElementById("message-error");

    const invalidFields = [];

    // Clear previous errors
    clearError(name, nameError);
    clearError(email, emailError);
    clearError(topic, topicError);
    clearError(message, messageError);

    if (formStatus) {
      formStatus.textContent = "";
    }

    // Validate name
    if (!name.value.trim()) {
      showError(name, nameError, "Please enter your name.");
      invalidFields.push(name);
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {
      showError(email, emailError, "Please enter your email address.");
      invalidFields.push(email);
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, emailError, "Please enter a valid email address.");
      invalidFields.push(email);
    }

    // Validate topic
    if (!topic.value) {
      showError(topic, topicError, "Please select a topic.");
      invalidFields.push(topic);
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, messageError, "Please enter your message.");
      invalidFields.push(message);
    } else if (message.value.trim().length < 10) {
      showError(
        message,
        messageError,
        "Your message must contain at least 10 characters.",
      );
      invalidFields.push(message);
    } else if (message.value.length > maximumMessageLength) {
      showError(
        message,
        messageError,
        "Your message cannot exceed 500 characters.",
      );
      invalidFields.push(message);
    }

    // Focus the first invalid field
    if (invalidFields.length > 0) {
      invalidFields[0].focus();

      if (formStatus) {
        formStatus.textContent = "Please correct the errors before submitting.";
      }

      return;
    }

    // Display confirmation
    if (formStatus) {
      formStatus.textContent =
        "Thank you! Your message has been received successfully.";
    }

    // Reset the form and character counter
    contactForm.reset();
    updateCharacterCount();
  });
}
