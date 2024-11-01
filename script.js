// Authentication variables
const authForm = document.getElementById("auth-form");
const authContainer = document.getElementById("auth-container");
const mainContent = document.getElementById("main-content");
const authError = document.getElementById("auth-error");
const girlfriendPhoto = document.getElementById("girlfriend-photo");
const logoutBtn = document.getElementById("logout-btn");

// Event listener for authentication form
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  if (name === "Michelle" && password === "sunshine") {
    authContainer.style.display = "none"; // Hide authentication form
    mainContent.style.display = "block"; // Show main content
  } else {
    authError.textContent = "Incorrect name or password. Please try again.";
  }
});

// Hover effect for alternating images among four photos
let hoverInterval;
let currentImageIndex = 0;
const images = [
  "Gallery/photo_1_2024-10-30_00-34-13.jpg",
  "Gallery/photo_2_2024-10-30_00-34-13.jpg",
  "Gallery/photo_3_2024-10-30_00-34-13.jpg",
  "Gallery/photo_4_2024-10-30_00-34-13.jpg"
];

girlfriendPhoto.addEventListener("mouseover", () => {
  hoverInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    girlfriendPhoto.src = images[currentImageIndex];
  }, 3000);
});

girlfriendPhoto.addEventListener("mouseout", () => {
  clearInterval(hoverInterval);
  girlfriendPhoto.src = images[0]; // Reset to the first image when the mouse is out
});

//Delete from here
// Variable to keep track of the interval
let hoverInterval;
let isTouchActive = false; // Track if touch is active for toggling

// Function to start alternating images
function startAlternatingImages() {
  hoverInterval = setInterval(() => {
    girlfriendPhoto.src = girlfriendPhoto.src.includes("photo_1")
      ? "/New/Gallery/photo_2_2024-10-30_00-34-13.jpg"
      : girlfriendPhoto.src.includes("photo_2")
      ? "/New/Gallery/photo_3_2024-10-30_00-34-13.jpg"
      : girlfriendPhoto.src.includes("photo_3")
      ? "/New/Gallery/photo_4_2024-10-30_00-34-13.jpg"
      : "/New/Gallery/photo_1_2024-10-30_00-34-13.jpg";
  }, 3000);
}

// Function to stop alternating images and reset to the first image
function stopAlternatingImages() {
  clearInterval(hoverInterval);
  girlfriendPhoto.src = "/New/Gallery/photo_1_2024-10-30_00-34-13.jpg";
}

// Mouseover and mouseout for desktop
girlfriendPhoto.addEventListener("mouseover", startAlternatingImages);
girlfriendPhoto.addEventListener("mouseout", stopAlternatingImages);

// Touch event for mobile
girlfriendPhoto.addEventListener("touchstart", () => {
  if (isTouchActive) {
    stopAlternatingImages();
  } else {
    startAlternatingImages();
  }
  isTouchActive = !isTouchActive; // Toggle the state
});
//Delete up to here if it doesn't work

// Select buttons and response element
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const response = document.getElementById("response");

// Event listener for 'Yes' button
yesButton.addEventListener("click", () => {
  response.innerHTML = "I'm the luckiest man alive! 🎉 She said YES!";
  response.style.color = "green";
  girlfriendPhoto.classList.add("shake");

  setTimeout(() => {
    girlfriendPhoto.classList.remove("shake");
    girlfriendPhoto.src = "Gallery/photo_3_2024-10-30_00-34-13.jpg"; // Display only the second image
  }, 5000);

  logoutBtn.style.display = "inline-block"; // Show logout button
});

// Event listener for 'No' button
noButton.addEventListener("click", () => {
  response.innerHTML =
    "Oh well 😣 I still wish you the best in all your endeavours regardless 🤚";
  response.style.color = "red";
  girlfriendPhoto.src = "Gallery/giphy.webp"; // Show heartbreak image
  logoutBtn.style.display = "inline-block"; // Show logout button
});

// Logout button resets the page
logoutBtn.addEventListener("click", () => {
  mainContent.style.display = "none";
  authContainer.style.display = "block";
  response.innerHTML = "";
  girlfriendPhoto.src = "/New/Gallery/photo_1_2024-10-30_00-34-13.jpg"; // Reset to original image
  logoutBtn.style.display = "none";
});
