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
        <button onclick = "musicComedyVideos(${btn.category_id})" class = "btn btn-sm hover:bg-[#FF1F3D] hover:text-white"> ${btn.category}</button>
        `;
    ctCtn.appendChild(ctDiv);
  }
}
dataApi();

function videoDataApi(allData) {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((promise) => promise.json())
    .then((data) => allVideos(data.videos));
}
function allVideos(videos) {
  const videoSec = document.getElementById("video-sec");
  videoSec.innerHTML = "";
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
                      <img class="w-5 h-5" src="https://img.icons8.com/?  size=48&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-400">${video.others.views}</p>
                </div> 
            </div>
        </div>
    `;
    videoSec.appendChild(videoCard)
  });
}
// videoDataApi();

const musicComedyVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);
  fetch(url)
    .then(pro => pro.json())
  .then(data => allVideos(data.category))
}
