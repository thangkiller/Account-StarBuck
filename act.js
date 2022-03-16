let keepN = document.querySelector('.form__card--keep');
let keepList = [...keepN.children];
keepList.forEach( (keepbtnN, i) => {
   keepbtnN.onclick = () => {
      switch(i) {
         case 1: keepList[0].checked = !keepList[0].checked;
                           break;
         case 2: break;
      };
   };
});
