let arr = [
  {
    dp: "/home page/img/116399.jpg",
    story:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    names: "harjyoti10",
    HOUR: "• 4h",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1674933214600-483da3cb2d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    story:
      " https://images.unsplash.com/photo-1611603613269-edc01bb67e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    names: "Liam90",
    HOUR: "• 12h",
  },
  {
    dp: "https://images.unsplash.com/photo-1621784564114-6eea05b89863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1623039497026-00af61471107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    names: "Olivia56",
    HOUR: "• 2h",
  },
  {
    dp: "https://images.unsplash.com/photo-1543764477-646365e11da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    story:
      " https://images.unsplash.com/photo-1634295889011-439a70d7799b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    names: "harry4",
    HOUR: "• 9h",
  },
  {
    dp: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    names: "Amelia53",
    HOUR: "• 1h",
  },
  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1611886658071-b51744fac077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    names: "Aiden67",
    HOUR: "• 16h",
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      " https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    names: "Sophia43",
    HOUR: "• 3h",
  },
  // ... rest of your data
];

let clutter = "";
let grow = 0;

arr.forEach(function (elem, index) {
  clutter += ` <div class="story" data-index="${index}">
    <img src="${elem.dp}" alt="error" class="src" id="${index}">
    </div>`;
});

document.querySelector("#storyan").innerHTML = clutter;

document.querySelector("#storyan").addEventListener("click", function (event) {
  const index = event.target.closest(".story").dataset.index;

  document.querySelector("#full-screen").style.display = "initial";
  document.querySelector("#full-con").style.display = "initial";
  document.querySelector(
    "#content"
  ).style.backgroundImage = `url(${arr[index].story})`;

  loadUser(arr[index]);
});

function loadUser(userData) {
  document.querySelector(".userphoto").src = userData.dp;
  document.querySelector(".userAc").textContent = userData.names;
  document.querySelector(".Hour").textContent = userData.HOUR;

  document.querySelector("#close").addEventListener("click", function () {
    document.querySelector("#full-con").style.display = "none";
    document.querySelector("#full-screen").style.display = "none";
  });

  setTimeout(function () {
    document.querySelector("#full-con").style.display = "none";
  }, 3000);

  // Check for the condition before starting the interval
  if (grow <= 100) {
    // Set interval for progress bar growth
    setInterval(function () {
      document.querySelector("#growth").style.width = `${grow++}%`;
    }, 30);
  } else {
    grow = 0;
  }
}

// Select all elements with the class 'story'
var storyElements = document.querySelectorAll(".story");

// Iterate through each element and add a click event listener
storyElements.forEach(function (storyElement) {
  storyElement.addEventListener("click", function () {
    // Change the background color of the clicked 'story' div
    storyElement.style.background = "black";

    // Reset the background color of all other 'story' divs
    storyElements.forEach(function (otherElement) {
      if (otherElement !== storyElement) {
        otherElement.style.background = "";
      }
    });
  });
});

let contentCounter = 0;
// User image data
const userImages = [
  {
    Profile: "/home page/img/116399.jpg",
    name: "harjyoti10",
    post: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
    like: "56,854",
    comment: "wow so beautiful place 🖤🤙",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "mike432",
    count: "28,976",
    hour: "•8h",
  },

  {
    Profile:
      "https://plus.unsplash.com/premium_photo-1674933214600-483da3cb2d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Liam90",
    post: "https://images.unsplash.com/photo-1533488069324-f9265c15d37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    like: "18,854",
    comment: "nice😎",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "Harper22",
    count: "23,342",
    hour: "•18h",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww",
    name: "Amelia53",
    post: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww",
    like: "39,854",
    comment: "so beautiful💕🤙",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "harry4",
    count: "66,832",
    hour: "•13h",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1543764477-646365e11da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Henry87",
    post: "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    like: "32,854",
    comment: "looks good😎",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "mike432",
    count: "12,654",
    hour: "•6h",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1621784564114-6eea05b89863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Olivia56",
    post: "https://images.unsplash.com/photo-1623039497511-ff6a22f2aa86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    like: "1,56,854",
    comment: "wow looking like a wow❤️👌",
    public: "img/Aaron-Bernstein_445x445.jpg",
    publicName: "joy22",
    count: "75,896",
    hour: "•12h",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aiden67",
    post: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    like: "16,854",
    comment: "handsome🖤🤙",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "Mia42",
    count: "5,896",
    hour: "•22h",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    name: "Sophia43",
    post: "https://images.unsplash.com/photo-1583391265517-35bbdad01209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    like: "21,854",
    comment: "wow so beautiful👍❤️",
    public: "img/IMG_20230526_114354.jpg",
    publicName: "mai42",
    count: "25,896",
    hour: "•12h",
  },
  // Add more entries as needed
];
// Function to create and append new content
function createAndAppendNewContent() {
  if (contentCounter < userImages.length) {
    const imageData = userImages[contentCounter];
    const newData = `<div class="social-section">
      <div class="card">
        <div class="heading">
          <img src="${imageData.Profile}" alt="">
          <p>${imageData.name}</p>
          <i class="ri-verified-badge-fill"></i>
          <h5>${imageData.hour}</h5>
          <i class="ri-more-line" id="more"></i>
        </div>
        <img src="${imageData.post}" alt="" class="post">
        <div class="user-interact">
          <i class="ri-heart-fill" id="like"></i>
          <i class="fa-regular fa-comment"></i>
          <i class="ri-send-plane-fill"></i>
          <span><i class="fa-regular fa-bookmark"></i></span> 
          <img src="${imageData.public}" alt="">
          <p>${imageData.like}likes</p>
          <h4>${imageData.publicName} ${imageData.comment}</h4>
          <h5>View all ${imageData.count} comments</h5>
          <input type="text" placeholder="Add comments...">
          <i class="ri-emotion-happy-line" id="smile"></i>
          <div class="line"></div>
        </div>
      </div>
    </div>`;

    appendNewContent(newData);
    contentCounter++; // Increment the counter
  } else {
    clearInterval(intervalId); // Stop the interval when all content is loaded
    hideLoadingIndicator();
  }
}

// Function to append new content to the card
function appendNewContent(newData) {
  const newContainer = document.createElement("div");
  newContainer.classList.add("social-container");
  newContainer.innerHTML = newData;

  const cardElement = document.getElementById("card");
  if (cardElement) {
    cardElement.appendChild(newContainer);
  } else {
    console.error("Element with ID 'card' not found.");
  }
}

// Function to hide loading indicator
function hideLoadingIndicator() {
  document.getElementById("loading").style.display = "none";
}

// Set interval to create and append new content every 2 seconds
const intervalId = setInterval(createAndAppendNewContent, 2000);

// Initial load
createAndAppendNewContent();

//likes btn
let likes = document.querySelectorAll("#like");
likes.forEach(function (like) {
  like.addEventListener("click", function () {
    like.style.color = "#ff3040";
  });
});

document.getElementById("card").addEventListener("click", function (event) {
  if (event.target.id === "like") {
    event.target.style.color = "#ff3040";
  }
});

let search = document.querySelector("#search");
let searchClose = document.querySelector("#search-close");
let searchCon = document.querySelector(".search-con");
let userSearch = document.querySelector(".userSearch");

searchCon.style.display = "none";

search.addEventListener("click", function () {
  // Toggle the display of the search container after a delay
  setTimeout(() => {
    if (searchCon.style.display === "none") {
      searchCon.style.display = "block";
      // Set focus on the input field when the search icon is clicked
      userSearch.focus();
    }
  }, 200); // Adjust the delay time in milliseconds (e.g., 200 milliseconds)
});

searchClose.addEventListener("click", function () {
  // Toggle the display of the search container after a delay
  setTimeout(() => {
    if (searchCon.style.display === "block") {
      searchCon.style.display = "none";
      // Set focus on the input field when the search icon is clicked
      userSearch.focus();
    }
  }, 200); // Adjust the delay time in milliseconds (e.g., 200 milliseconds)
});

let popMenu = document.querySelector("#pop-menu");
let menuPop = document.querySelector(".pop-up");

menuPop.style.display = "none";

popMenu.addEventListener("click", function () {
  if (menuPop.style.display === "none") {
    menuPop.style.display = "flex";
  } else {
    menuPop.style.display = "none";
  }
});
