// Should only be triggered on first page load

let preference_data = {
  date: "",
  org_name: "",
};

let update_data = {
    date: "",
    org_name: "",
    comments: ""
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
    // make api call here
      console.log(preference_data);
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
        console.log(update_data);
      });
  });