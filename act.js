let $ = document.querySelector.bind(document);
let $$ = (css) => [...document.querySelectorAll(css)];



let decrip = {
   keepdetail: 'Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.',
   forgotname: 'You can now use your email instead of a username.'
}


$$('.decrip').forEach( (decripN, i) =>
   decripN.insertAdjacentHTML('beforeend', 
      `<div class="decrip--more">
         ${Object.values(decrip)[i]}
         <button>got it</button>
      </div>`)
);



let help = () => {
   console.log(1)
}


let keepList = [...$('.form__card--keep').children];
keepList.forEach( (keepbtnN, i) => {
   keepbtnN.onclick = () => {
      switch(i) {
         case 1: keepList[0].checked = !keepList[0].checked;
                           break;
         case 2: help();
                 break;
      };
   };
});
