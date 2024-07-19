const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // To Stop the Form Default submit action
 
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category;

    if (bmi < 18.5) {
      category = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'normal weight';
    } else if (bmi >= 25) {
      category = 'overweight';
    }

    //show the result
    results.innerHTML = `<span>Your BMI is ${bmi}. You are ${category}.</span>`;
  }
});

