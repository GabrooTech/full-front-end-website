// paginator
const ulTag = document.getElementById("pgul")
let totalPages = 6;  
function element(totalPages, page){
  let liTag = ''  
  let activeLi
  let beforePages = page - 1;
  let afterPages = page + 1;
  if(page > 1){
    liTag += `<li class="button-pag prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
  }
  if(page > 2){
    liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`
    if(page > 3){
      liTag += `<li class="dots"><span>...</span></li>`
    }
  }
  if(page == totalPages){
    beforePages = beforePages - 2;
}else if(page == totalPages - 1){
    beforePages = beforePages - 1;
}
if(page == 1){
  afterPages = afterPages + 2;
}else if(page == 2){
  afterPages = afterPages + 1;
}
  for(let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++){
    if(pageLenght > totalPages){
      continue;
    }
    if(pageLenght == 0){
      pageLenght = pageLenght + 1;
    }
    if(page == pageLenght){
      activeLi = "active"
    }else{
      activeLi = ""
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLenght})"><span>${pageLenght}</span></li>`
  }
  if(page < totalPages - 1){
    if(page < totalPages - 2){
      liTag += `<li class="dots"><span>...</span></li>`
    }
    liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
  }
  if(page < totalPages){
    liTag += `<li class="button-pag next" onclick="element(totalPages, ${page + 1})" next"><span> Next <i class="fas fa-angle-right"></i></span></li>`
  }
  ulTag.innerHTML = liTag
}
element(totalPages, 1)