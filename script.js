const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

btn.addEventListener('click', navToggle);

function onTabClick(e){
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-b-orange-500',
            'border-b-4',
            'md:border-b-0'
        )
    })

    panels.forEach((panel) => panel.classList.add('hidden'))

    e.target.classList.add('border-b-orange-500', 'border-b-4');
    const classString = e.target.getAttribute('data-target');
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
}

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if(menu.classList.contains('flex')){
        logo.setAttribute('src', './assets/logo-white.svg');
    } else {
        logo.setAttribute('src', './assets/logo.svg');
    }
}