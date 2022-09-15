window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      if(loader == true){
        document.body.removeChild(loader);
      }
    });
  });