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
            checkFields();
        });

        const checkHolder = document.querySelector('.js--card-name');
        checkHolder.addEventListener('input', function () {
            this.value = this.value.replace(/\d/g, '');
        });

        data.cardHolder.addEventListener('input', function () {
            const cardName = this.value;
            this.value = cardName.replace(/\d/g, '');
            document.querySelector('.js--card-holder').innerHTML = cardName;
            checkFields();
        });


        data.month.addEventListener('input', function () {
            const monthData = this.value;
            if (monthData) {
                document.querySelector('.js--month-data').innerHTML = `${monthData} /`;
                checkFields();
            }

        });

        data.year.addEventListener('input', function () {
            const yearData = this.value;
            if (yearData) {
                document.querySelector('.js--year-data').innerHTML = yearData;
                checkFields();
            }
        });

        const checkCVV = document.querySelector('.js--cvv');
        checkCVV.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, "");
            checkFields();
        });

        function checkFields() {
            const button = document.querySelector('.form__button');
            const number = document.querySelector('.js--card-number');
            const holder = document.querySelector('.js--card-name');
            const month = document.querySelector('.js--month');
            const year = document.querySelector('.js--year');
            const cvv = document.querySelector('.js--cvv');
            if (number.value.length === 16 && holder.value.length > 2 && month.value.length !== 0 && year.value.length !== 0 && cvv.value.length > 2) {
                button.disabled = false;
            } else {
                button.disabled = true;
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


