function handleClick(obj) {
      
      let answer = obj.nextElementSibling;
      let icon = obj.lastElementChild.lastElementChild;
      
      // condition to hide
      if (answer.classList[0] == "answer-show") {
        answer.classList.remove("answer-show");
        answer.classList.add("answer-hide");

        icon.classList.remove("rotated-icon");
        icon.classList.add("icon");


        obj.style.fontWeight = 400;

        // condition to show
      } else {
        icon.classList.remove("icon");
        icon.classList.add("rotated-icon");

        answer.classList.remove("answer-hide");
        answer.classList.add("answer-show");
        obj.style.fontWeight = 700;
      }
    }