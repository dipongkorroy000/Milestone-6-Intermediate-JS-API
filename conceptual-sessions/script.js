const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  showCategories(data.categories);
};
loadCategory();

const showCategories = (allCate) => {
  //   console.log(allCate);
  allCate.forEach((element) => {
    // console.log(element);
    const categorySec = document.getElementById("category-sec");

    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick = "loadPets('${element.category}')" class = "btn">${element.category}
        <img class = "w-8" src = "${element.category_icon}alt = "icon"/>
        </button>
    `;
    categorySec.appendChild(div);
  });
};

const loadPets = async (categoryName) => {
  loadingShow()
  document.getElementById('heading-notfound').style.display = 'none';
  document.getElementById('pets-div').style.display = 'block';

  const petsUrl = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  );
  const promise = await petsUrl.json();
  pets(promise.data);
};
// loadPets('cat');

function pets(objs) {
  // console.log(objs);
  if (objs.length < 1) {
    loadingHide()
    document.getElementById('heading-notfound').style.display = 'block';
    document.getElementById('pets-div').style.display = 'none';
  }

  objs.forEach((pet) => {

    const petsDivId = document.getElementById("pets-div");
    petsDivId.innerHTML = "";

    const divCreate = document.createElement("div");
    divCreate.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img class = "w-full" src="${pet.image}"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title">${pet.breed}</h2>
            <p>${pet.pet_details}</p>
            <h1 class = "font-bold text-xl">Price: ${pet.price}</h1>
            <h1 class = "font-bold text-lg">Date of Birth: ${pet.date_of_birth}</h1>
            <h1 class = "font-bold text-lg">Gender: ${pet.gender}</h1>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    `;
    loadingHide()
    petsDivId.appendChild(divCreate);
  });
}

function loadingShow() {
  document.getElementById('loading-id').classList.remove('hidden')
}
function loadingHide() {
  document.getElementById('loading-id').classList.add('hidden');
}
