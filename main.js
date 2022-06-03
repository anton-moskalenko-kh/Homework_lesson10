document.addEventListener('DOMContentLoaded', function () {
    for (let year = 2022; year <= 2050; year++) {
        let options = document.createElement("OPTION");
        document.querySelector("#year").appendChild(options).innerHTML = year;
        document.querySelector("#year").appendChild(options).value = year;
    }

    function getCardData(data) {

        const checkNumber = document.querySelector('.js--card-number');
        checkNumber.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, "");
        });

        data.number.addEventListener('input', function () {
            const cardNumber = this.value;
            document.querySelector('.js--card-value').innerHTML =
                `${cardNumber.substring(0, 4)} ${cardNumber.substring(4, 8)}
                ${cardNumber.substring(8, 12)} ${cardNumber.substring(12, 16)}`;
                checkData();
        });

        data.number.addEventListener('change', function () {
            const cardValue = this.value;
            const check =  document.querySelector('.js--card-number');
            if (cardValue.length < 16) {
                alert('Номер карты должен содержать 16 цифр');
            }
        })

        data.cardHolder.addEventListener('input', function () {
            const cardName = this.value;
            this.value = cardName.replace(/\d/g, '');
            if (cardName.length > 2) {
                document.querySelector('.js--card-holder').innerHTML = cardName;
                checkData();
            }
        });

        data.cardHolder.addEventListener('change', function () {
            const valueCardName = this.value;
            const checkCardName =  document.querySelector('.js--card-name');
            if (valueCardName.length < 3) {
                alert('Имя должно содержать минимум 2 буквы');
            }
        })

        data.month.addEventListener('input', function () {
            const monthData = this.value;
            if (monthData) {
                document.querySelector('.js--month-data').innerHTML = `${monthData} /`;
                checkData();
            }

        });

        data.year.addEventListener('input', function () {
            const yearData = this.value;
            if (yearData) {
                document.querySelector('.js--year-data').innerHTML = yearData;
                checkData();
            }
        });

        const checkCVV = document.querySelector('.js--cvv');
        checkCVV.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, "");
        });

        data.cvv.addEventListener('change', function () {
            const cvvNumber = this.value;
            if (cvvNumber.length < 3) {
                alert("Значение CVV должно быть не меньше 3-х символов");
            }
            checkData();

        });

        function checkData() {
            const button = document.querySelector('.form__button');
            let valid = false;
            for(let key in data) {
                valid = data[key].value.length !== 0;
            }
            if (valid) {
                button.disabled = false;
            }
        }

        const form = document.querySelector('.js--card-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log({
                number: data.number.value,
                cardHolder: data.cardHolder.value,
                month: data.month.value,
                year: data.year.value,
                cvv: data.cvv.value,
            })
        })
    }

    getCardData({
        number: document.querySelector('.js--card-number'),
        cardHolder: document.querySelector('.js--card-name'),
        month: document.querySelector('.js--month'),
        year: document.querySelector('.js--year'),
        cvv: document.querySelector('.js--cvv'),
    })

})


