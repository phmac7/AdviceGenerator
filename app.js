const form = document.querySelector('.form')

form.addEventListener('click', (e) => {
    e.preventDefault();
})
// getting the data
const data = async () => {
    try {
        const res = await axios.get('https://api.adviceslip.com/advice')
        const data = res.data.slip
        return data
    } catch (err) {
        console.log(err, 'error')
    }

}

const button = document.querySelector('.button')
const wait = document.querySelector('.wait')

let lastClick = 0
button.addEventListener('click', async () => {
    let newClick = new Date().getTime()
    let remainTime = newClick - lastClick
    if (newClick - lastClick > 2000) {
        const dataObject = await data()
        document.querySelector('.advice__text').innerText = dataObject.advice
        document.querySelector('.advice__number').innerText = dataObject.id
        lastClick = newClick
        wait.style.opacity = 0
    } else {
        wait.style.opacity = 1
    }
})
