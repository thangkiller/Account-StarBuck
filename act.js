let $ = document.querySelector.bind(document);
let $$ = (css) => [...document.querySelectorAll(css)];



let decrip = {
   keepdetail: 'Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.',
   forgotname: 'You can now use your email instead of a username.'
}


$$('.decrip').forEach( (e, i) =>
   e.insertAdjacentHTML('beforeend', 
      `<div class="decrip--more disappear">
            ${Object.values(decrip)[i]}
            <button>got it</button>
      </div>`)
);



let tooltip = (key) =>
   $$('.decrip--more')[Object.keys(decrip).findIndex( cur => cur == key)].classList.toggle('disappear');


$('.form__card--keep>span').onclick = () =>
   $('.form__card--keep>input').checked = !$('.form__card--keep>input').checked;

$$('.decrip').forEach( (e, i) =>
   e.onclick = () =>
      tooltip( (i == 0) ? 'keepdetail' : 'forgotname')
);
