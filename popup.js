function init() {
  checkbox = document.getElementById("enable");
  chrome.storage.local.get("stupidenabled", function (result) {
    if (result["stupidenabled"] == false) {
      checkbox.value = "false";
    } else if (result["stupidenabled"] == true) {
      checkbox.checked = "true";
    }
  });

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      chrome.storage.local.set({ stupidenabled: true });
      console.log("Stupidity is enabled");
    } else {
      chrome.storage.local.set({ stupidenabled: false });
      console.log("Stupidity is disabled");
    }
  });
}

init();
