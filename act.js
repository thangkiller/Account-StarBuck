let keepN = document.querySelector('.form__card--keep');
keepN.onclick = (e) => {
   let keepList = [...keepN.children];
   console.log(keepList);
   switch(e.target) {
      case keepList[1]: keepList[0].checked = !keepList[0].checked;
                        break;
      case keepList[2]: break;
   }
}