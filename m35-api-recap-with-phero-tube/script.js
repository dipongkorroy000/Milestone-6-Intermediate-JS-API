function dataApi() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => btnCategory(data.categories));
}
function btnCategory(btns) {
  const ctCtn = document.getElementById("category-ctn");
  for (let btn of btns) {
    // 3 data step by step--
    const ctDiv = document.createElement("div");
    ctDiv.innerHTML = `
    <button id = "btn-${btn.category_id}"
    onclick = "musicComedyVideos(${btn.category_id})"
    class = "btn btn-sm hover:bg-[#FF1F3D] hover:text-white">
    ${btn.category}
    </button>
    `;
    ctCtn.appendChild(ctDiv);
  }
}
function musicComedyVideos(id) {
  loading();
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);
  fetch(url)
    .then((pro) => pro.json())
    .then((data) => {
      const clickedBtn = document.getElementById(`btn-${id}`);
      //remove active btns red color--
      colorRemove();
      clickedBtn.classList.add("active-btn-color");
      // console.log(clickedBtn);
      allVideos(data.category);
      // console.log(data.category)
    });
}
function colorRemove() {
  const activeBtns = document.getElementsByClassName("active-btn-color");
  for (let btn of activeBtns) {
    btn.classList.remove("active-btn-color");
  }
}
dataApi();

function videoDataApi(searchText = '') {
  loading();
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((promise) => promise.json())
    .then((data) => {
      colorRemove();
      document.getElementById("btn-all").classList.add("active-btn-color");
      allVideos(data.videos);
    });
}
function allVideos(videos) {
  const videoSec = document.getElementById("video-sec");
  videoSec.innerHTML = "";

  if (videos.length === 0) {
    videoSec.innerHTML = `
    <div class="col-span-full my-72">
      <div class="w-72 m-auto flex flex-col justify-center items-center text-center">
        <img class="" src="./assets/Icon.png" alt="">
        <h2 class="font-bold text-2xl">Oops!! Sorry, There is no content here</h2>
      </div>
    </div>
    `;
    loadingHide();
  }
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
            <figure class="relative">
                <img class = "w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-3 text-sm rounded-sm">3hrs 56min
                    ago</span>
            </figure>

            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>

                <div class="intro">
                    <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                    <p class="text-sm text-gray-400 flex gap-1">
                      ${video.authors[0].profile_name}
                      ${video.authors[0].verified == true ?
                        `<img class="w-5 h-5" src="https://img.icons8.com/?  size=48&id=98A4yZTt9abw&format=png" alt="">` : ``}
                    </p>
                    <p class="text-sm text-gray-400">${video.others.views}</p>
                </div> 
            </div>
            <button onclick = videoDetails('${video.video_id}') class = "btn btn-block">Show Details</button>
        </div>
    `;
    videoSec.appendChild(videoCard);
  });
  loadingHide();
}
// videoDataApi();

function videoDetails(videoId) {
  // console.log(videoId)
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
}
function displayVideoDetails(vidObj) {
  // console.log(object);
  document.getElementById("video_details").showModal();
  const detailsCtnId = document.getElementById("details-ctn-id");

  detailsCtnId.innerHTML = `
  <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${vidObj.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>
  `;
}

//search box--
document.getElementById('search-input').addEventListener('keyup', function (e) {
  const input = e.target.value;
  // console.log(input);
  videoDataApi(input);
});

function loading() {
  document.getElementById('loader').classList.remove('hidden')
  document.getElementById('video-sec').classList.add('hidden')
}
function loadingHide() {
  document.getElementById('loader').classList.add('hidden')
  document.getElementById('video-sec').classList.remove('hidden')
}
