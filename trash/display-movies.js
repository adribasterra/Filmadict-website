
/* ----- Variables -------- */

  var allFilms = document.getElementsByClassName("images");

  var favs = document.getElementsByClassName("favs");

  // Genres

    var comedy = document.getElementsByClassName("comedy");
    var others = document.getElementsByClassName("others");
    var terror = document.getElementsByClassName("terror");
    var thriller = document.getElementsByClassName("thriller");

  // Mood

    var good = document.getElementsByClassName("good");
    var hbroken = document.getElementsByClassName("hbroken");
    var company = document.getElementsByClassName("company");
    var low = document.getElementsByClassName("low");
    var inlove = document.getElementsByClassName("inlove");

  // What you want

    var realEvents = document.getElementsByClassName("realEvents");
    var inspirational = document.getElementsByClassName("inspirational");
    var mind = document.getElementsByClassName("mind");
    var dontknow = document.getElementsByClassName("dontknow");

/* --xxx-- Variables --xxx-- */

/* ------- Methods ------- */

  // Main function

    function selected(option){
      hideAll();
      switch (option.id) {
        case "good":
            display(good);
          break;
        case "hbroken":
            display(hbroken);
          break;
        case "company":
            display(company);
          break;
        case "low":
            display(low);
          break;
        case "inlove":
            display(inlove);
          break;

        case "comedy":
            display(comedy);
          break;
        case "terror":
            display(terror);
          break;
        case "thriller":
            display(thriller);
          break;
        case "others":
            display(others);
          break;

        case "realEvents":
            display(realEvents);
          break;
        case "inspirational":
            display(inspirational);
          break;
        case "mind":
            display(mind);
          break;
        case "dontknow":
            display(dontknow);
          break;

        case "favs":
            display(favs);
          break;
        default:
            alert("Something went wrong.");
          break;
      }
    }

  // Secondary

    function display(array){
      for (var i = 0; i < array.length; i++) {
        array[i].parentElement.style.display = "inline-block";
      }
    }

    function hideAll(){
      for (var i = 0; i < allFilms.length; i++) {
        allFilms[i].style.display = "none";
      }
    }

/* --xxx-- Methods --xxx-- */
