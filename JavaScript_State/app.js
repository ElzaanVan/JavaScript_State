const PageState = function() {
  let currentState = new homeState(this);

  //First function is to initailise change
  this.init = function() {
    this.change(new homeState) //this.change is the second function to change the current state
  }

  this.change = function(state) {
    currentState = state;
  }

}

//Create the different states (Home, About, Contact)

//Home state
const homeState = function(page) {
  document.querySelector("#heading").textContent = null
  document.querySelector("#content").innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Welcome to the Home page state!</h1>
  <p class="lead">This is a simple JavaScript app, that uses State to change state between Home, About and Contact.</p>
  <hr class="my-4">
  <p>Lorep midas jhdisa poiso mj msahu adnau dajhda jnnda.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `
}

//About state
const aboutState = function(page) {
  document.querySelector("#heading").textContent = "About this App"
  document.querySelector("#content").innerHTML = `
  <h3>This is the About state, pretty cool!</h3>
  `
}

//Contact state
const contactState = function(page) {
  document.querySelector("#heading").textContent = "Contact this state!"
  document.querySelector("#content").innerHTML = `
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `
};

//Instantiate PageState
const page = new PageState();

//Initialise the first state
page.init();

//Add event listeners that will change the state
document.getElementById("about").addEventListener("click", function(e){
  page.change(new aboutState);

  e.preventDefault();
})
document.getElementById("contact").addEventListener("click", function(e){
  page.change(new contactState);

  e.preventDefault();
})
document.getElementById("home").addEventListener("click", function(e){
  page.change(new homeState);

  e.preventDefault();
})