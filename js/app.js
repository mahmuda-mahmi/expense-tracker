function input(inputId) {
       const inputText = document.getElementById(inputId).value;
       const inputValue = parseFloat(inputText);
       return inputValue;
}
function innerTextChange(id, setText) {
       const text = document.getElementById(id);
       text.innerText = setText;
}
function total() {
       const foodInput = input('food-input');
       const rentInput = input('rent-input');
       const clothesInput = input('clothes-input');
       // error handle 
       if (isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) == true) {
              innerTextChange('food-input', '');
              innerTextChange('rent-input', '');
              innerTextChange('clothes-input', '');
              alert('Please enter a number as input!')
       }
       else if (foodInput < 0 || rentInput < 0 || clothesInput < 0) {
              innerTextChange('food-input', '');
              innerTextChange('rent-input', '');
              innerTextChange('clothes-input', '');
              alert('Please enter a positive value')
       }
       else {
              const expenseTotal = foodInput + rentInput + clothesInput;
              return expenseTotal
       }
}

// calculate button handle
document.getElementById('calculate-btn').addEventListener('click', function () {
       const incomeInput = input('income-input');
       if (isNaN(total()) == true) {
              alert('Please enter a number as input!')
       }
       else {
              const balanceTotal = incomeInput - total();
              innerTextChange('total-expense', total());
              // error handle 
              if (balanceTotal < 0) {
                     alert('you are in debt, aren\'t you? :( ');
              }
              innerTextChange('total-balance', balanceTotal);
       }
})

// save button handle 
document.getElementById('save-btn').addEventListener('click', function () {
       const incomeInput = input('income-input');
       const balanceTotal = incomeInput - total();
       const saveInput = input('save-input');

       // save money calculation
       const savingAmount = (saveInput / 100) * incomeInput;
       const remainingAmount = incomeInput - total() - savingAmount;

       // error handling
       if (isNaN(saveInput) == true || isNaN(incomeInput)) {
              innerTextChange('income-input', '');
              innerTextChange('save-input', '')
              alert('Please enter a number as input');
       }
       else if (saveInput < 0 || incomeInput < 0) {
              innerTextChange('income-input', '');
              innerTextChange('save-input', '')
              alert('Please enter a positive value')
       }
       else if (savingAmount > incomeInput || savingAmount > balanceTotal || saveInput > 100) {
              innerTextChange('save-input', '')
              alert('You cannot save more than you have!')
       }

       else {
              innerTextChange('saved-money', savingAmount);
              innerTextChange('remaining-money', remainingAmount);
       }

})
