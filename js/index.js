// const aboutImages = document.querySelectorAll('.about_image-item')

// aboutImages.forEach(aboutImage=>{
//     aboutImage.addEventListener('mouseover',(e)=>{
//         document.querySelector('.about_image-item.active').classList.remove('active')
//         e.srcElement.classList.add('actitve')
//         console.log(e);
//     })
// })

const aboutTabs = document.querySelectorAll('.about_container-tabs')
const aboutPanes = document.querySelectorAll('.about_pane-item')

aboutTabs.forEach((aboutTab,index)=>{
    aboutTab.addEventListener('click',()=>{
        document.querySelector('.about_pane-item.active').classList.remove('active')
        var currentPane = aboutPanes[index].classList.add('active')

        document.querySelector('.about_container-tabs.active').classList.remove('active')
        aboutTab.classList.add('active')
    })
})


// handle send message
const contactButton = document.querySelector('.contact_left-wrapper button')

contactButton.addEventListener('click',()=>{
    const contactLeftForm = document.querySelector('.contact_left-form')
    contactLeftForm.style.opacity = 0
    contactLeftForm.style.height = 0

    document.querySelector('.contact_left-animate').classList.add('active')

    setTimeout(()=>{
        document.querySelector('.contact_left-load').classList.add('hide')
        document.querySelector('.check_icon').classList.add('active')
    },2000)
})