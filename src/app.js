function renderProjects() {
  let element = document.querySelector(".projects-info");
  element.innerHTML = ``;
  element.innerHTML = `<div class="col-lg-4 col-md-6 mt-5">
          <div class="app-photo">
            <img
              src="images/pasapalabra.png"
              alt="Pasapalabra"
              class="img-fluid rounded shadow p-2 border border-dark border-3"
            />
          </div>
          <div class="app-content mx-4">
            <h2 class="my-3">Pasapalabra Game</h2>
            <p>
              Pasapalabra is a Spanish television game show. The game gives for each letter of the alphabet a definition of a word starting with or containing that letter. The player responds with a word, or passes by clicking "pasapalabra".
              </br> </br> This app was developed as a coding challenge a colleage of mine gave me. It includes lots of Javascript, and plenty of logic behind.
              <div class="row row-cols-5"><div class="col-sm bubble">HTML</div><div class="col-sm bubble">CSS</div><div class="col-sm bubble">JS Vanilla</div><div class="col-sm bubble">Netlify</div><div class="col-sm bubble">Github</div></div>
              </br> Give it a try!
            </p>
            <form
              action="https://gorgeous-babka-cf9dca.netlify.app/"
              target="_blank"
            >
              <button class="app-button button-1 my-5">
                Launch Pasapalabra Game
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-5">
            <div class="app-photo ">
              <img
                src="images/weather-app.png"
                alt="Weather app"
                class="img-fluid rounded shadow p-2 border border-dark border-3"
              />
            </div>
            <div class="app-content mx-4">
            <h2 class="my-3">Weather App</h2>
            <p>
              This weather app will tell you the current weather and the seven day forecast for any specific place you manually input in the search bar. 
              Also you can check the weather and forecast of your current location. 
              </br> </br> This app was developed as a project on the SheCodes workshop I took on 2022. It uses Open Weather Map API as a source of information.
              <div class="row row-cols-5"><div class="col-sm bubble">HTML</div><div class="col-sm bubble">CSS</div><div class="col-sm bubble">JS Vanilla</div><div class="col-sm bubble">Netlify</div><div class="col-sm bubble">Github</div></div>
              </br> Go and check if you need to carry an umbrella!
            </p>
            <form
              action="https://lively-scone-575ed6.netlify.app/"
              target="_blank"
            >
              <button class="app-button button-1 my-5">
                Launch Weather App
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-5">
          <div class="app-photo">
            <img
              src="images/github.png"
              alt="Github user search"
              class="img-fluid rounded shadow p-2 border border-dark border-3"
            />
          </div>
          <div class="app-content mx-4">
            <h2 class="my-3">Github Search</h2>
            <p>
              Github user search will return user information based on the username given in the search bar. Information shown will be the name of the user, the avatar, and the repositories, with the forks and the stars they have.
              </br> </br> This app was developed as a coding challenge a colleage of mine gave me. It's the first app I have ever written.
              <div class="row row-cols-5"><div class="col-sm bubble">HTML</div><div class="col-sm bubble">CSS</div><div class="col-sm bubble">JS Vanilla</div><div class="col-sm bubble">Netlify</div><div class="col-sm bubble">Github</div></div>
              </br> Want to check some Github users?
            </p>
            <form
              action="https://glowing-sprite-f2375f.netlify.app/"
              target="_blank"
            >
              <button class="app-button button-1 my-5">
                Github User Search App
              </button>
            </form>
          </div>
        </div>
        <div>
          <h4>Hide projects</h4>
          <button class="less-info-button">
            <i class="fa-solid fa-angles-up less-info-icon"></i>
          </button>
        </div>
        `;
}

function hideProjects() {
  let element = document.querySelector(".projects-info");
  element.innerHTML = ``;
  element.innerHTML = `<div>
          <h4>Show projects</h4>
          <button class="more-info-button">
            <i class="fa-solid fa-angles-down more-info-icon"></i>
          </button>
        </div>`;
}

let container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("more-info-button") ||
    e.target.classList.contains("more-info-icon")
  ) {
    renderProjects();
  }
  if (
    e.target.classList.contains("less-info-button") ||
    e.target.classList.contains("less-info-icon")
  ) {
    hideProjects();
  }
});
