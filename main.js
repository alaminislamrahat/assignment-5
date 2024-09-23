const cards = document.getElementById('cards');
let historySection = document.getElementById('history')
const myAmount = document.getElementById('my-amount');
const noakhaliAmount = document.getElementById('noakhali-amount');
const noakhaliTitle = document.getElementById('noakhali-title');



const donationClick = () => {

    document.getElementById('history-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('history-btn').classList.add('btn-outline')
    document.getElementById('donation-btn').classList.remove('btn-outline')
    document.getElementById('donation-btn').classList.add('bg-[#b4f461]')

    addAndRemoveClass(cards, historySection)

}

const historyClick = () => {

    document.getElementById('history-btn').classList.remove('btn-outline')
    document.getElementById('history-btn').classList.add('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.add('btn-outline')

    addAndRemoveClass(historySection, cards)

}


const addAndRemoveClass = (firstElement, secondElement) => {
    firstElement.classList.remove('hidden')
    secondElement.classList.add('hidden')
}



const noakhali = () => {


    my_modal_1.showModal()

    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const noakhaliAmount = document.getElementById('noakhali-amount');

    let noakhaliInputString = document.getElementById('noakhali-input').value;

    equation(noakhaliAmount, noakhaliInputString, myAmount, noakhaliTitle)


}





const feni = () => {

    my_modal_1.showModal()

    const feniTitle = document.getElementById('feni-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const feniAmount = document.getElementById('feni-amount');

    let feniInputString = document.getElementById('feni-input').value;

    equation(feniAmount, feniInputString, myAmount, feniTitle)

}

const qouta = () => {

    my_modal_1.showModal()

    const qoutaTitle = document.getElementById('qouta-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const qoutaAmount = document.getElementById('qouta-amount');

    let qoutaInputString = document.getElementById('qouta-input').value;

    equation(qoutaAmount, qoutaInputString, myAmount, qoutaTitle)

}

const equation = (amount, inputString, myAmount, title) => {
    let myAmountString = myAmount.innerText;
    let amountString = amount.innerText;
    let amountInt = parseInt(amountString);
    let myAmountInt = parseInt(myAmountString);
    let input = parseInt(inputString)
    amount.innerText = input + amountInt;

    myAmount.innerText = myAmountInt - input

    setHistory(title, input)
}


const setHistory = (title, amount) => {
    const historyDiv = document.getElementById('history')
    const historyList = document.createElement('div');
    historyList.innerHTML = `
        <div class="border-2  p-5 rounded-xl mt-4 space-y-4">
               <h1>${amount} taka is ${title}</h1>
                <p>Date: ${new Date()}</p>
            </div>
       `

    historyDiv.appendChild(historyList)

}

let bool = true;
let blogBtn = document.getElementById('blog');
const faq = document.getElementById('faq')
const buttons = document.getElementById('buttons')
const blog = () => {

    bool = !bool

    if (bool) {
        blogBtn.textContent = 'Blog';

        faq.classList.add('hidden');
        buttons.classList.remove('hidden');
        cards.classList.remove('hidden');
    }
    else {
        blogBtn.textContent = 'Home';
        faq.classList.remove('hidden');
       buttons.classList.add('hidden');
       cards.classList.add('hidden');
      
    }




}



