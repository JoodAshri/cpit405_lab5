// ===== Task 1: Dark / Light Mode =====
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

// ===== Task 2: Show More / Show Less =====
const toggleAboutBtn = document.getElementById("toggle-about");
const moreAbout = document.getElementById("more-about");

toggleAboutBtn.addEventListener("click", function () {
  moreAbout.classList.toggle("hidden");

  if (moreAbout.classList.contains("hidden")) {
    toggleAboutBtn.textContent = "Show More";
  } else {
    toggleAboutBtn.textContent = "Show Less";
  }
});

// ===== Task 3: Dynamic Projects =====
const projects = [
  {
    title: "Lost & Found System",
    description: "A team project for Advanced Programming: a desktop application where users can report and search for lost and found items.",
    category: "Programming",
    technologies: ["Java", "Swing", "MySQL", "Socket Programming"]
  },
  {
    title: "Municipal Inspection System",
    description: "A team project for Software Engineering that manages municipal inspections and generates reports.",
    category: "Programming",
    technologies: ["Java", "Layered Architecture", "PDF Generation"]
  },
  {
    title: "Unix Shell Simulator",
    description: "A team project for Operating Systems that simulates a Unix shell with a graphical interface.",
    category: "Programming",
    technologies: ["Java", "Swing", "ProcessBuilder"]
  },
  {
    title: "Clothing Brand Website",
    description: "A solo project: a website designed for a clothing brand.",
    category: "Web",
    technologies: ["Wix", "Web Design"]
  }
];

const projectsList = document.getElementById("projects-list");

function renderProjects(category) {
  // clear old cards first so cards are never duplicated
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    if (category !== "All" && project.category !== category) {
      continue;
    }

    const card = document.createElement("div");
    card.className = "project";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const categoryText = document.createElement("p");
    categoryText.textContent = "Category: " + project.category;

    const tech = document.createElement("p");
    tech.textContent = "Technologies: " + project.technologies.join(", ");

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(categoryText);
    card.appendChild(tech);

    projectsList.appendChild(card);
  }
}

// show all projects when the page loads
renderProjects("All");

// ===== Task 4: Project Filtering =====
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    renderProjects(button.dataset.category);
  });
});

// ===== Task 5: Print / Save as PDF =====
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function () {
  window.print();
});
