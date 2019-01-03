var budgetController = (function () {
  // Some code
})()

var UIController = (function () {
  // Some code
})()

var controller = (function (BudgCtrl, UICtrl) {
  // Some code
  document.querySelector('.add__btn').addEventListener('click', function () {
    console.log('Button was clicked.')
    // Get input data
    // Add item to budget controller
    // Add item to user interface
    // Calculate budget
    // Display updated budget in UI


  })

  document.addEventListener('keypress', function (event) {
    if (key === 'Enter') {
    }
  })
})(budgetController, UIController)
