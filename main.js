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
    let noakhaliInputString = document.getElementById('noakhali-input').value;
    if(noakhaliInputString == '' || noakhaliInputString < 0){
        alert('you have to add amount');
        return;
    }

    my_modal_1.showModal()

    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const noakhaliAmount = document.getElementById('noakhali-amount');

    

    equation(noakhaliAmount, noakhaliInputString, myAmount, noakhaliTitle)


}





const feni = () => {

    let feniInputString = document.getElementById('feni-input').value;
    if(feniInputString == '' || feniInputString < 0){
        alert('you have to add amount');
        return;
    }

    my_modal_1.showModal()

    const feniTitle = document.getElementById('feni-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const feniAmount = document.getElementById('feni-amount');

   

    equation(feniAmount, feniInputString, myAmount, feniTitle)

}

const qouta = () => {

    let qoutaInputString = document.getElementById('qouta-input').value;

    if(qoutaInputString == '' || qoutaInputString < 0){
        alert('you have to add amount');
        return;
    }


    my_modal_1.showModal()

    const qoutaTitle = document.getElementById('qouta-title').innerText;

    const myAmount = document.getElementById('my-amount');
    const qoutaAmount = document.getElementById('qouta-amount');

   

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










