(function(window, undefined) {
  var dictionary = {
    "f4f6932f-c0de-48a8-8efc-060f53b060b9": "Transportation",
    "07af6c11-63c9-4deb-8698-f2889e475692": "FAQ",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "39477b7d-1961-4ad9-8d04-6de8831b9030": "Activities",
    "f49f9390-3da1-4804-b43b-c4421bb40743": "Lodging",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);