(function () {
  'use strict';
  var locale = 'en-EN';
  document.addEventListener("DOMContentLoaded", function (event) {
    Txt.render({
      id: '695c6c04-10d6-4c2e-b05d-72f5fcaaea6b',
      locale: locale,
    });
    console.log(locale);
  });

  // Txt.get("about", function (data) {
  //   //prints the keys and contents of the file home
  //   console.log("contents", data);
  // });
  // console.log(locale);
})();
