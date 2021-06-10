// post example

function post_preference_data() {
  fetch("http://localhost:5000/update/preference", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preference_data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function post_update_data() {
  fetch("http://localhost:5000/update/donation", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preference_data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let preference_data = {
  date: "",
  org_name: "",
  org_id: "",
};

let update_data = {
  date: "",
  org_name: "",
  comments: "",
};

// update-blood-donation-form
window.addEventListener("load", function () {
  document
    .getElementById("preference-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // before the code

      // Should be triggered on form submit
      preference_data["date"] = document.querySelector("#preferencetime").value;
      preference_data["org_name"] = document.querySelector("#org").value;
      preference_data["org_id"] = document.querySelector("#org_id").value;
      // make api call here
      post_preference_data();
    });
});

window.addEventListener("load", function () {
  document
    .getElementById("update-blood-donation-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // before the code

      // Should be triggered on form submit
      update_data["date"] = document.querySelector("#datetime").value;
      update_data["org_name"] = document.querySelector("#org").value;
      update_data["comments"] = document.querySelector("#comment").value;
      // make api call here
      post_update_data();
      // console.log(update_data);
    });
});
