const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

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
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}