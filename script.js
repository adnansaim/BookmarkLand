const faqAns = document.querySelectorAll('.faq_question-ans')
const faqSect = document.querySelectorAll('.faq_question')
window.onload = function () {
    for (let i = 0; i < 4; i++) {
        faqSect[i].value = i
    }
}

const firstFeature = document.getElementById('firstFeature')
const secondFeature = document.getElementById('secondFeature')
const thirdFeature = document.getElementById('thirdFeature')
const hrDesign = document.querySelector('.hr-design')
featureDesign = document.querySelectorAll('.features_display-design')

const tab1 = document.getElementById('tab1')
const tab2 = document.getElementById('tab2')
const tab3 = document.getElementById('tab3')

//design
const firstDes = document.querySelector('#first-des')
const secondDes = document.querySelector('#second-des')
const thirdDes = document.querySelector('#third-des')

firstFeature.addEventListener('click', function () {
    hrDesignMover('35%', 0)
    tabHider(tab1, tab2, tab3)
    desCng(0, '300px', '0')
    if (!firstDes.className) {
        designMove(firstDes, secondDes, thirdDes)
    }



})
secondFeature.addEventListener('click', function () {
    hrDesignMover('35%', '36%')
    tabHider(tab2, tab1, tab3)
    desCng(1, '350px', '50px')
    designMove(secondDes, firstDes, thirdDes)
})
thirdFeature.addEventListener('click', function () {

    hrDesignMover('30%', '70%')
    tabHider(tab3, tab1, tab2)
    desCng(2, '350px', '50px')
    designMove(thirdDes, secondDes, firstDes)
})

function hrDesignMover(width, left) {
    hrDesign.style.width = width
    hrDesign.style.left = left
}

function tabHider(one, two, three) {
    one.classList.remove('hide')
    two.classList.add('hide')
    three.classList.add('hide')
}

function desCng(num, val1, val2) {
    featureDesign[num].style.height = val1;
    featureDesign[num].style.bottom = val2
}

function designMove(first, second, third) {
    first.className = 'btn-design'
    second.className = ''
    third.className = ''
}

const featureBtnsSec = document.querySelector('.features_btns')
const featureBtns = document.querySelectorAll('.features_btns-btn')

const mquery = window.matchMedia('(min-width:820px)')

//faq section
const ansArr = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
    ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor,
    ut condimentumurna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
    sollicitudin ex et ultricies bibendum`,
    `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod
    dui. Aliquamvitae neque eget nisl gravida pellentesque non ut velit.`
]

function faqPAppend(val, pClass) {
    const p = document.createElement('p')
    if (pClass) {
        p.classList.add(pClass.value)
    }


    p.textContent = val;

    return p
}



faqSect.forEach(item => {
    item.addEventListener('click', function () {

        const arrowImg = this.children[0].children[1]

        if (arrowImg.className == 'upside-down') {
            arrowImg.classList.remove('upside-down')
            const addedPara = this.lastElementChild
            addedPara.style.animation = 'upward 0.3s'
            addedPara.addEventListener('animationend', function () {
                this.remove()
            })


        } else {
            arrowImg.classList.add('upside-down')

            const val = this.value

            item.appendChild(faqPAppend(ansArr[val], { value: 'faq_question-ans' }))
        }

    })
})

//joining form

const joinForm = document.querySelector('.join_input')
const emailInp = document.querySelector('.email-input')
const errMsgtext = document.querySelector('.err_msg-text')

//errmsg values
const errArr = [
    `Email address cannot be empty`,
    `Whoops! Make sure it's an correct email`
]


const errMsgDiv = document.querySelector('.err-msg')
joinInpDiv = document.querySelector('.join_input-div')
errImg = document.querySelector('#err-img')

joinForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (ValidateEmail(emailInp.value)) {
        errMsgDiv.classList.add('hide')
        joinInpDiv.classList.remove('err-border')
        errImg.classList.add('hide')
    } else {
        if (!emailInp.value) {
            errMsgtext.textContent = errArr[0]
        } else {
            errMsgtext.textContent = errArr[1]

        }
        errMsgDiv.classList.remove('hide')
        joinInpDiv.classList.add('err-border')
        errImg.classList.remove('hide')

    }
})

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    } else {
        return (false)
    }

}

//slider

const hamburgerIcon = document.querySelector('.nav_ham');
const mobileNavDiv = document.querySelector('.mobile_nav')
const cutMobileNav = document.querySelector('.closeNav')

hamburgerIcon.addEventListener('click', function () {
    mobileNavDiv.style.right = '0'
})

cutMobileNav.addEventListener('click', function () {
    mobileNavDiv.style.right = '-100%'
})