import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let twitter = " ";
  if (variables.twitter) {
    twitter =
      '<a href="https://twitter.com/' +
      variables.twitter +
      ' " target= "blank"><i class="fab fa-twitter"></i></a>';
  } else {
    twitter = '<a href="#"><i class="fab fa-twitter"></i></a>';
  }

  let linkedin = " ";
  if (variables.linkedin) {
    linkedin =
      '<a href="https://www.linkedin.com/in/' +
      variables.linkedin +
      ' " target= "blank"><i class="fab fa-linkedin"></i></a>';
  } else {
    linkedin = '<a href="#"><i class="fab fa-linkedin"></i></a>';
  }

  let github = " ";
  if (variables.github) {
    github =
      '<a href="https://github.com/' +
      variables.github +
      ' " target= "blank"><i class="fab fa-github"></i></a>';
  } else {
    github = '<a href="#"><i class="fab fa-github"></i></a>';
  }

  let instagram = " ";
  if (variables.instagram) {
    instagram =
      '<a href="https://www.instagram.com/' +
      variables.instagram +
      ' " target= "blank"><i class="fab fa-instagram"></i></a>';
  } else {
    instagram = '<a href="#"><i class="fab fa-instagram"></i></a>';
  }

  // reset the website body with the new html output
  document.getElementById("widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : " "} ${
    variables.lastname ? variables.lastname : ""
  }</h1>
          <h2>${variables.role ? variables.role : ""}</h2>
          <h3>${variables.city ? variables.city : ""} ${
    variables.country ? variables.country : ""
  }</h3>
          <ul class="${variables.socialMediaPosition}">
            <li>${twitter}</li>
            <li>${github}</li>
            <li>${linkedin}</li>
            <li>${instagram}</li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_Tk5_O9eu6TykhDkfYIZNyLZrdY9V0Ti_w&s",
    // this is the url for the profile avatar
    avatarURL:
      "https://png.pngtree.com/png-clipart/20200819/ourlarge/pngtree-sexy-female-curly-hair-avatar-png-image_2326123.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
