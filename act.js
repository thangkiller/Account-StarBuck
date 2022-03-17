let keepN = document.querySelector('.form__card--keep');


let keepdetail = 'Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.';
let forgotname = 'You can now use your email instead of a username.';





let help = () => {
   
}


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
