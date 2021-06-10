// Should only be triggered on first page load

let preference_data = {
    "date":"",
    "org_name":""
}

// update-blood-donation-form
window.addEventListener("load", function() {
  document.getElementById('preference-form').addEventListener("submit", function(e) {
    e.preventDefault(); // before the code
    
    // Should be triggered on form submit
    preference_data['date'] = document.querySelector('#preferencetime').value;
    preference_data['org_name'] = document.querySelector('#org').value;

    console.log(preference_data);
})
});