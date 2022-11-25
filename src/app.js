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
          <p>Give it a try!</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS Vanilla</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://gorgeous-babka-cf9dca.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">
              Play Pasapalabra Game
            </button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/pasapalabra"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="app-photo">
          <img
            src="images/weather-app.png"
            alt="Weather app"
            class="img-fluid rounded shadow p-2 border border-dark border-3"
          />
        </div>
        <div class="app-content mx-4">
          <h2 class="my-3">Weather App</h2>
          <p>Go and check if you need to carry an umbrella!</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS Vanilla</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://lively-scone-575ed6.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">Launch Weather App</button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/weather-app"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
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
          <p>Want to check some Github users?</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS Vanilla</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://glowing-sprite-f2375f.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">
              Github User Search App
            </button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/github-search"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
          </form>
        </div>
      </div>
        <div class="my-5">
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

let contactButtons = document.querySelectorAll(".contact-toggle");
contactButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    let contactContent = document.querySelector(".contact-content");
    if (contactContent.classList.contains("d-none")) {
      contactContent.classList.remove("d-none");
    } else {
      contactContent.classList.add("d-none");
    }
  });
});

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
