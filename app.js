// local reviews data
const reviews = [
  {
    id: 1,
    name: 'assel zaliyeva',
    job: 'software developer',
    img: 'https://scontent.fala3-2.fna.fbcdn.net/v/t1.6435-9/46486346_2198512003735080_2515702941021634560_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xxO-vpLFEhAAX-pQz90&_nc_ht=scontent.fala3-2.fna&oh=00_AT_M9c7qBis7Rf6dnTUZqQe4ziIYFYcqe2XaKo-hAZqEXQ&oe=6364A16E',
    text: "I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]
// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
})

// show person based on item
function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello')

  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})
