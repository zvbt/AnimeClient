const Store = require("electron-store");
const storage = new Store();

function getWindowSettings() {
  const default_url = "http://127.0.0.1:5500/";

  const url = storage.get("page_url");
  if (url) return url;
  else {
    storage.set("page_url", default_url);
    return default_url;
  }
}

function saveBounds(bounds) {
  storage.set("page_url", bounds);
  console.log("URL saved: ", bounds);
}

module.exports = {
  getWindowSettings: getWindowSettings,
  saveBounds: saveBounds,
};
