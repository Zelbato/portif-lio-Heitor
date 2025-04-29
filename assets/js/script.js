
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add("abrir-menu")
})

menu.addEventListener('click', () => {
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener('click', () => {
    menu.classList.remove("abrir-menu")
})

const chk = document.getElementById('checkbox')

chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
})



const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.global')

    const windowHalfSize = window.innerHeight * 0.6

    const animateScroll = () => {
        sections.forEach(item => {
            const sectionTop = item.getBoundingClientRect().top

            const isSectionVisible = (sectionTop - windowHalfSize) < 0

            if (isSectionVisible) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }

        })
    }

    animateScroll()

    window.addEventListener('scroll', animateScroll)

}

initAnimationScroll()
