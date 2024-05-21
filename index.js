const toggle = document.querySelector('.toggle-list')
const aside = document.querySelector('.aside')
const asideActive = document.querySelector('.aside-active')
const navBar = document.querySelector('.nav')

toggle.addEventListener('click', function () {
  aside.classList.toggle('aside-active')
  if (aside.classList.contains('aside-active')) {
    toggle.style.position = 'fixed'
    toggle.removeChild(toggle.firstElementChild)
    toggle.innerHTML = `<i class="fas fa-close fa-2xl">`
    return
  } else {
    toggle.innerHTML = `<i class="fas fa-bars"></i>`
    toggle.style.position = 'relative'
  }
})

// END OF NAVBAR
//
//
//
let bikeSelected

//
//  SELECT PLAN

const planContainer = document.querySelector('.main-container-plan')
const selectPlan = document.querySelector('.select-plan')

const selectPlanContent = [...selectPlan.children]
console.log(selectPlanContent)

const selectDate = document.querySelector('.select-date')
const selectDateContent = [...selectDate.children]

const options = document.querySelectorAll('.option')
const sectionBikes = document.getElementById('bikes')
const currentOption = document.querySelector('.current-option')
// const priceValue = document.querySelectorAll(".price");
let currentPlan
let selectPlanCollapsed = false

const backButton = document.querySelector('.back')
backButton.addEventListener('click', function () {
  articleCollapse(selectDate, selectPlan)
})

function articleCollapse(firstArticle, secondArticle) {
  //
  const selectPlanContent = [...firstArticle.children]
  const selectDateContent = [...secondArticle.children]

  planContainer.classList.add('bounceAnimation')
  firstArticle.classList.add('collapseAnimation')
  selectPlanContent.forEach((child) => {
    child.classList.add('hideContentAnimation')
    console.log(child)
    selectPlanCollapsed = true
  })
  setTimeout(function () {
    // planContainer.classList.add("displayContainerAnimation");
    //
    // cruicial:
    secondArticle.classList.remove('hidden')
    firstArticle.classList.add('hidden')
    //

    selectDateContent.forEach((child) => {
      child.classList.add('displayContentAnimation')
    })
    secondArticle.classList.add('displayContentAnimation')
    console.log(selectPlan)

    //
    //
    //
  }, 1000)

  setTimeout(function init() {
    planContainer.classList.remove('bounceAnimation')
    firstArticle.classList.remove('collapseAnimation')
    selectPlanContent.forEach((child) => {
      child.classList.remove('hideContentAnimation')
    })

    selectDateContent.forEach((child) => {
      child.classList.remove('displayContentAnimation')
    })
    secondArticle.classList.remove('displayContentAnimation')
    firstArticle.classList.remove('displayContentAnimation')
  }, 2000)
}

// END OF FRIST TRY ONE FUNCTIUON

// SECOND TRY ( BOUNCEANIMATION ADDED TO ARTICLE )

// END OF SECOND TRY
const modalPlanInfo = document.querySelector('.modal-plan-info')

;[...options].map((item) => {
  item.addEventListener('click', (e) => {
    articleCollapse(selectPlan, selectDate)

    if (currentOption.classList.contains('hidden')) {
      currentOption.classList.remove('hidden')
    }
    ;[...options].forEach((element) => {
      element.classList.remove('selected')
    })

    item.classList.add('selected')

    let currentValue
    let currentElement = e.target
    // console.log(currentElement);
    if (currentElement.classList.contains('price')) {
      item.classList.add('selected')
      currentElement = e.target.parentElement
      currentValue = currentElement.textContent
    } else {
      currentValue = currentElement.textContent
    }
    currentOption.innerHTML = `<h3>current plan: <span class="current-plan">${currentValue}</span></h3>`

    currentPlan = currentValue
    modalPlanInfo.textContent = `${currentPlan}`
  })
})

currentOption.addEventListener('click', () => {
  navBar.scrollIntoView({ behavior: 'smooth' })
})

// const sectionBikes
const sectionBikesTop = sectionBikes.offsetTop

function currentOptionScroll() {
  if (window.scrollY >= sectionBikesTop - window.innerHeight + 1) {
    // currentOption.style.color = "blue";
    currentOption.style.position = 'absolute'
    currentOption.style.top = '0%'
    currentOption.style.borderRadius = ' 0px 0px 15px 15px '
    currentOption.style.transition = '0.5s'
  } else {
    currentOption.style.borderRadius = ' 15px 15px 0px 0px '

    // currentOption.style.color = "white";
    currentOption.style.position = 'fixed'
    currentOption.style.top = '95%'

    currentOption.classList.toggle('current-option-scroll')
    currentOption.style.transition = '0s'
    setTimeout(function changeTransformStyle() {
      currentOption.style.transition = '0.5s'
    }),
      600
  }
}
window.addEventListener('scroll', currentOptionScroll)

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//   SLIDER AND MODAL
//   SLIDER AND MODAL
//   SLIDER AND MODAL
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   SLIDER AND MODAL
//
// sectionBikes already declared and === id of section bikes
const bikes = document.querySelectorAll('.bike-card')
const prevButton = document.querySelector('.arrow-left')
const nextButton = document.querySelector('.arrow-right')
const rentBikeButton = document.querySelector('.btn-select')

const modal = document.querySelector('.modal')
// const modalPlanInfo = document.querySelector(".modal-plan-info");
const modalBike = document.querySelector('.modal-bike')

bikes.forEach(function (bike, index) {
  bike.style.left = `${index * 100}%`
})
let currentBike

let counter = 0

prevButton.addEventListener('click', () => {
  resetNotification()
  // bikeSelected = false;
  counter--
  carousel()
  console.log(currentBike)
})

nextButton.addEventListener('click', () => {
  resetNotification()
  // bikeSelected = false;
  counter++
  carousel()
  // console.log(currentBike);
})

function carousel() {
  if (counter === bikes.length) {
    counter = 0
  }
  if (counter < 0) {
    counter = bikes.length - 1
  }
  bikes.forEach(function (bike) {
    bike.style.transform = `translateX(-${counter * 100}%)`
  })
  //
  //
  //
  currentBike = bikes[counter]
}
if (!currentBike) {
  currentBike = bikes[0]
}

let touchStartX = 0
let touchEnd = 0
let deltaX = 0

const slides = Array.from(bikes)
console.log(slides)

slides.forEach((slide, index) => {
  slide.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
    console.log(touchStartX)
  })

  slide.addEventListener('mousedown', (e) => {
    touchStartX = e.clientX
    console.log(touchStartX)
    console.log(currentBike)
  })

  slide.addEventListener('mouseup', (e) => {
    touchEndX = e.clientX
    console.log(touchEndX)
    swipe()
  })

  slide.addEventListener('touchend', (e) => {
    if (e.type.includes('mouse')) {
      return
    } else {
      touchEndX = e.changedTouches[0].clientX
      console.log(touchEndX)
      swipe()
    }
  })

  function swipe() {
    deltaX = touchEndX - touchStartX

    const swipeTreshold = 150

    if (deltaX > swipeTreshold) {
      carousel()
      counter + 1
      counter++
    } else if (deltaX < -swipeTreshold) {
      carousel()
      counter--
      if (counter === -1) {
        counter = 0
      }
      console.log(counter)
    }
  }
  currentBike.style.transform = `translateX${deltaX}px`
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//NOTIFICATION
const notification = document.querySelector('.notification-container')
//
//
//
function notificationMessage() {
  notification.classList.remove('hidden')
  const delay = 3000

  function fadeOut() {
    notification.classList.add('fade-out')
  }

  setTimeout(fadeOut, delay)
  // console.log(notification);
}

function resetNotification() {
  notification.classList.add('hidden')
  notification.classList.remove('fade-out')
  notification.classList.opacity = 1
}
//
//

//
// function resetNotification() {
//   notification.classList.add("hidden");
//   notification.style.opacity = 1;
//   notification.classList.remove("fade-out");
// }
modalPlanInfo.textContent = `${currentPlan}`

rentBikeButton.addEventListener('click', () => {
  bikeSelected = true

  if (!currentBike) {
    currentBike = bikes[0]
  }
  // get info of selected bike
  const bikeImg = currentBike.firstElementChild.firstElementChild.src
  // console.log(bikeImg);
  const bikeInfo = currentBike.querySelector('h2')
  // MODAL
  if (currentPlan && selectedDate) {
    openModal()
  } else {
    navBar.scrollIntoView({ behavior: 'smooth' })
    // add notification
    notificationMessage()
    ss
  }

  // MODAL CONTENT
  modalBike.innerHTML = `Selected bicycle: ${bikeInfo.textContent} <img src="${bikeImg}" alt="bike image" />
  `

  if (
    currentOption.classList.contains('hidden') &&
    notification.classList.contains('hidden') &&
    bikeSelected === true
  ) {
    notificationMessage()
  }
  // console.log(bikeImg);
  // console.log(modalBike.firstElementChild.src);
})
// OPEN MODAL
function openModal() {
  modal.classList.remove('hidden')
  currentOption.classList.add('hidden')
}

// CLOSE MODAL
const closeModalButton = document.querySelector('.close')
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden')
  currentOption.classList.remove('hidden')
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden')
    currentOption.classList.remove('hidden')
  }
})
//
//
//

//
//
//
//
//
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
//
let selectedDate

// const fullDateSelected = document.createElement("p");
const modalDate = document.querySelector('.modal-date')

// let fullDateSelected;
let monthCounter = 0

// const currentMonthGlobal = now.getMonth();
// const currentYearGlobal = now.getFullYear();

// console.log(currentYearGlobal);
const prevCell = document.querySelectorAll('.prev-cell')

function renderCalendar() {
  const now = new Date()

  const currentYear = now.getFullYear()

  const currentMonth = now.getMonth() + monthCounter
  const firstDay = new Date(currentYear, currentMonth, 1)
  console.log(firstDay)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)

  const daysInMonth = lastDay.getDate()
  // console.log(firstDay.getDay());
  const previousMonthLastDay = new Date(currentYear, currentMonth, 0)
  let daysInPrevMonth = previousMonthLastDay.getDate()
  // let nextMonthStart = new Date(currentYear, currentMonth + 1, 1);
  // console.log(nextMonthStart.getDate());

  const monthYear = document.getElementById('month-year')
  // document.getElementById("month-year")

  // if (
  //   currentMonth === currentMonthGlobal &&
  //   currentYear === currentYearGlobal
  // ) {
  //   prevMonthBtn.classList.add("hidden");
  // }

  monthYear.innerText = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(firstDay)

  // if ((monthYear.innerHTML === currentMonth, currentYear)) {
  //   prevMonthBtn.classList.add("hidden");
  // } else {
  //   renderCalendar();
  // }
  const calendarBody = document.getElementById('calendar-body')
  calendarBody.innerHTML = ''

  let day = 1
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td')

      if (i === 0 && j < firstDay.getDay()) {
        cell.textContent = daysInPrevMonth - firstDay.getDay() + j + 1
        cell.classList.add('disabled')
      } else if (day > daysInMonth) {
        let nextCell = 1
        cell.classList.add('disabled')

        //   console.log(td);
        day++
        cell.textContent = day - daysInMonth - 1
      } else {
        cell.innerText = day

        if (
          day === now.getDate() &&
          currentMonth === now.getMonth() &&
          currentYear === now.getFullYear()
        ) {
          cell.classList.add('today')
          prevMonthBtn.classList.add('hidden')
        }
        if (
          cell.textContent < now.getDate() &&
          currentMonth === now.getMonth()
        ) {
          cell.classList.add('disabled')
        }
        cell.addEventListener('click', function (e) {
          chosenDay = e.target.textContent
        })

        cell.onclick = function () {
          if (!this.classList.contains('disabled')) {
            selectedDate = new Date(currentYear, currentMonth, chosenDay)
            console.log(selectedDate.toDateString())

            // const selectedDate =
            // ALERT MESSAGE:

            // alert("Success! You selected " + selectedDate.toDateString());

            // alert("You selected " + selectedDate.toDateString());
          }
        }
        day++
      }

      row.appendChild(cell)
      //
      // may be better:
      cell.addEventListener('click', (e) => {
        dateSelected()

        const td = document.querySelectorAll('td')
        for (let i = 0; i < td.length; i++) {
          td[i].classList.remove('td-selected')
        }
        e.target.classList.add('td-selected')

        modalDate.innerHTML = `${chosenDay} ${months[currentMonth]} ${currentYear}`
      })
    }
    // console.log(row);
    calendarBody.appendChild(row)
  }

  // console.log(currentMonth);
  // console.log(currentMonthGlobal);
  // console.log(currentYearGlobal);
  // console.log(currentYear);
}
// let dateSelected = false;

function prevMonth() {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  if (currentMonth === 0) {
    now.setFullYear(currentYear - 1)
    now.setMonth(11)
  } else {
    // now.setMonth(currentMonth - 1);
    monthCounter--
  }
  renderCalendar()
}

function nextMonth() {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  if (currentMonth === 11) {
    now.setFullYear(currentYear + 1)
    now.setMonth(0)
  } else {
    // now.setMonth(currentMonth + 1);
    monthCounter++
  }
  // prevMonthBtn.classList.remove("hidden");

  renderCalendar()
}
const prevMonthBtn = document.querySelector('.prevMonthBtn')
const nextMonthBtn = document.querySelector('.nextMonthBtn')

// prevMonthBtn.classList.add("hidden");

;[prevMonthBtn, nextMonthBtn].forEach((btn) => {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('prevMonthBtn')) {
      prevMonth()
    } else {
      nextMonth()
      prevMonthBtn.classList.remove('hidden')
    }
  })
})

renderCalendar()

function dateSelected() {
  //
  if (bikeSelected === true && currentPlan) {
    openModal()
  } else {
    prevButton.scrollIntoView({ behavior: 'smooth' })
  }
}

const mainContainerBikes = document.querySelector('.main-container-bikes')

mainContainerBikes.addEventListener('click', () => {
  prevButton.scrollIntoView({ behavior: 'smooth' })
})
