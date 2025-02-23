// Function to open a link in a new tab, used for social media links etc.
function openLinkInNewTab(url) {
  window.open(url, "_blank").focus();
}

// Function to open a mail client with my mail pre-filled
function mailTo() {
  window.location.href = "mailto:chaitanyasai2021@gmail.com";
}

// For navigation menu dropdown list
document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("header-navigation-button");
  const navList = document.getElementById("header-navigation-list");

  // Toggle the navigation menu on click
  navButton.addEventListener("click", function () {
    if (navList.style.display === "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
    }
  });

  // Close menu if clicked outside
  document.addEventListener("click", function (event) {
    if (!navButton.contains(event.target) && !navList.contains(event.target)) {
      navList.style.display = "none";
    }
  });
});

// Function to open a link in a new tab
function openLinkInNewTab(url) {
  window.open(url, "_blank");
}

// Project section buttons for GitHub and demo
document
  .getElementById("project-1-github-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://github.com/vhogberg/kotlin_bucket_list_app");
  });

document
  .getElementById("project-1-demo-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://www.youtube.com/watch?v=mAOkPEfctAw");
  });

document
  .getElementById("project-2-github-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://github.com/vhogberg/gridguru_f1_quiz");
  });

document
  .getElementById("project-2-demo-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://gridguruf1quiz.vercel.app/");
  });

document
  .getElementById("project-3-github-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://github.com/vhogberg/midnattsloppet_app_frontend");
  });

document
  .getElementById("project-3-demo-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://youtube.com/shorts/nnDU-ftcbvU?feature=share");
  });

document
  .getElementById("project-4-github-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://github.com/vhogberg/portfolio");
  });

document
  .getElementById("project-4-demo-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://viktorhogberg.com");
  });

document
  .getElementById("project-5-github-button")
  .addEventListener("click", function () {
    alert(
      "Då denna utvecklades i samband med en oavslutad kurs får koden inte laddas upp ännu tyvärr! Men det går att spela med andra knappen bredvid!"
    );
  });

document
  .getElementById("project-5-demo-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://people.dsv.su.se/~viho3970/assignment-3/");
  });

// Button for IEEE Paper link
document
  .getElementById("ieee-paper-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://ieeexplore.ieee.org/document/10725711");
  });

// Header photography portfolio button listener
document
  .getElementById("header-photography-portfolio-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://www.photos.viktorhogberg.com/");
  });

// Sidebar button listeners
document
  .getElementById("sidebar-resume-button")
  .addEventListener("click", function () {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1ko6YJcgwaNSFovzffVD9ntclJnnVz_x_/view?usp=sharing"
    );
  });
document
  .getElementById("sidebar-social-github-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://github.com/chaitanyasai-2021");
  });
document
  .getElementById("sidebar-social-linkedin-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://www.linkedin.com/in/chaitanyanutakki/");
  });
document
  .getElementById("sidebar-social-email-button")
  .addEventListener("click", function () {
    mailTo("Chaitanyasai2021@gmail.com");
  });
document
  .getElementById("sidebar-social-instagram-button")
  .addEventListener("click", function () {
    openLinkInNewTab("https://www.instagram.com");
  });

// Function to toggle light/dark mode (default is dark mode)
document.getElementById("theme-toggle-button").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");

  // Get all GitHub icons since they are white and so disappear in light mode
  const githubIcons = document.querySelectorAll(".github-icon");
  githubIcons.forEach((icon) => {
    // Check if the icon is already in light mode
    if (icon.src.endsWith("github-icon-light-mode.svg")) {
      icon.src = "assets/icons/github-icon.svg";
    } else {
      icon.src = "assets/icons/github-icon-light-mode.svg";
    }
  });
});
