document.addEventListener("DOMContentLoaded", function () {
  var arr = [
    
    {
      dp: "/home page/img/116399.jpg",
      story: "https://cdn.pixabay.com/vimeo/312432035/pet-20830.mp4?width=640&hash=47ad1c53be8481485859f498211f7e0248d0c6df",
      userName: "harjyoti10",
      title: "cute cat❤️❤️",
      songs: "unstopable😎😎👌👍",
      name: "harjyoti",
      pic: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      like: "20m",
      comment:'5m'
    },

    {
      dp: "/home page/img/116399.jpg",
      story: "https://cdn.pixabay.com/vimeo/166221773/cute-cat-3092.mp4?width=640&hash=bb95d4df6b481e4b16beafa23edc8b4fbd324bac",
      userName: "harjyoti10",
      title: "cute cat funny cat🤣🤣🤣",
      songs: "beliver😎😎👌👍",
      name: "harjyoti",
      pic: "https://images.unsplash.com/photo-1584213610817-948feb8c633a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      like: "12m",
      comment:'1m'
    },
    {
      dp: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/455722667.sd.mp4?s=4b32f2f3343fd86ce97fb250110f5fcbb87f19b5&profile_id=164&oauth2_token_id=57447761",
      userName: "Stella154",
      title: "Enchanting Moments on the Catwalk",
      songs: "Rhythm of the Cosmos",
      name: "Stella",
      pic: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/455722667.sd.mp4?s=4b32f2f3343fd86ce97fb250110f5fcbb87f19b5&profile_id=164&oauth2_token_id=57447761",
        like: "2m",
        comment:'96.4k'
    },

    {
      dp: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/449593857.sd.mp4?s=0b931c2ea9a076e8f866b38f37bace4539cd4cc8&profile_id=165&oauth2_token_id=57447761",
      userName: "Zoey26",
      title: "Fashionista Diaries: Modeling Magic",
      songs: "Sunset Serenity",
      name: "Zoey ",
      pic: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: "1m",
      comment:'76.4k'
    },

    {
      dp: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/380068816.hd.mp4?s=10f5e3077a12e677424ead437ee70d0c57905387&profile_id=174&oauth2_token_id=57447761",
      userName: "Luna 43",
      title: '"Sculpting Beauty: Model Life Exposed"',
      songs: "Whispers in the Wind",
      name: "Luna Serenade",
      pic: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/380068816.hd.mp4?s=10f5e3077a12e677424ead437ee70d0c57905387&profile_id=174&oauth2_token_id=57447761",
        like: "4m",
        comment:'32.4k'
    },

    {
      dp: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600",
      story:
        "https://player.vimeo.com/external/380086674.hd.mp4?s=250dcd962e510ec4bb829ab1810538b119679c90&profile_id=174&oauth2_token_id=57447761",
      userName: "Elara4",
      title: "The Art of Posing: Runway Edition",
      songs: "Melodic Dreams👌👌",
      name: "Elara Monroe",
      pic: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: "3m",
      comment:'56.4k'
    },
  ];

  var postarea = document.querySelector(".post-area");
  var clutter = "";

  arr.forEach(function (elem, idx) {
    clutter += `<div class="post-con">
        <div class="buttons">
          <i class="ri-heart-fill" id="Heart${idx}"></i>
          <h4>${elem.like}</h4>
          <i class="ri-chat-3-fill"><h4>${elem.comment}</h4></i>
          <i class="ri-bookmark-line"></i>
          <i class="ri-more-line"></i>
          <span class="img"><img src=${elem.pic} alt="error"></span>
        </div>
        <div class="post">
          <i class="ri-volume-mute-fill" id="volume"></i>
          <video src="${elem.story}" alt="" muted autoplay class="vedios"></video>
          <img src="${elem.dp}" alt="" class="profile">
          <p>${elem.userName}<i class="ri-verified-badge-fill"></i></p>
          <button>Follow</button>
          <h6>${elem.title}</h6>
          <h5><i class="ri-music-2-fill"></i> ${elem.name} ·<marquee> ${elem.songs}</marquee></h5>
        </div>
      </div>`;
  });

  postarea.innerHTML = clutter;

  // Now, add the event listeners for each like button
  arr.forEach(function (elem, idx) {
    const likeButton = document.querySelector(`#Heart${idx}`);
    let isLiked = false;

    likeButton.addEventListener("click", function () {
      isLiked = !isLiked;
      likeButton.style.color = isLiked ? "#ff3040" : "white";
    });
  });
});
