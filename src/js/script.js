function askAgeAndDisplay() {
    let age = prompt("Будь ласка, введіть ваш вік:");
    if (!age || isNaN(age)) {
        alert("Будь ласка, введіть коректне числове значення.");
        return;
    }

    age = parseInt(age, 10);
    let ageWord = 'років';
    if (age % 10 === 1 && age % 100 !== 11) {
        ageWord = 'рік';
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        ageWord = 'роки';
    }
    alert(age + " " + ageWord);
}
askAgeAndDisplay();
