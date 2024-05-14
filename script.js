// Подсвечивание выбранной страницы
const links = document.getElementsByClassName('headerLink');

for (let i = 0; i < links.length; i++) {
    if (window.location.href === links[i].href) {
        links[i].classList.add('activeLink');
    } else {
        links[i].classList.remove('activeLink');
    }
}


// Запрос данных из xml
fetch('data.xml')
    .then(response => response.text()) // Получаем текстовое представление XML-данных
    .then(xmlData => {
        // Создаем парсер XML
        let parser = new DOMParser();
        // Парсим текст XML в объект xmlDoc
        let xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        // Получаем все элементы <car> из XML
        let cars = xmlDoc.getElementsByTagName('car');

        // Получаем контейнер для информации о машинах из HTML
        let carsInfoContainer = document.querySelector('.carsInfo');

        // Итерируемся по всем элементам <car>
        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];

            // Создаем контейнер для предварительной информации о машине
            let previewCar = document.createElement('div');
            previewCar.className = 'previewCar';

            // Создаем элемент с именем машины
            let carName = document.createElement('div');
            carName.className = 'previewCarName';
            carName.textContent = car.getElementsByTagName('name')[0].textContent;

            // Создаем контейнер для изображений машины
            let carImages = document.createElement('div');
            carImages.className = 'previewCarImages';
            let images = car.getElementsByTagName('image');
            // Добавляем три изображения машины
            for (let j = 0; j < 3; j++) {
                let imageDiv = document.createElement('div');
                imageDiv.className = 'previewCarImage ' + images[j].textContent;
                carImages.appendChild(imageDiv);
            }

            // Создаем элемент с ценой машины
            let carPrice = document.createElement('div');
            carPrice.className = 'previewCarPrice';
            carPrice.textContent = car.getElementsByTagName('price')[0].textContent;

            // Добавляем элементы в контейнер предварительной информации о машине
            previewCar.appendChild(carName);
            previewCar.appendChild(carImages);
            previewCar.appendChild(carPrice);

            // Добавляем контейнер предварительной информации о машине в контейнер общей информации о машинах
            carsInfoContainer.appendChild(previewCar);

            // Создаем контейнер для дополнительной информации о машине
            let addInfoContainer = document.createElement('div');
            addInfoContainer.className = 'addInfoContainer';

            // Создаем элемент с дополнительной информацией о машине
            let addInfo = document.createElement('div');
            addInfo.className = 'addInfo';

            // Создаем элемент с именем машины для дополнительной информации
            let addInfoName = document.createElement('div');
            addInfoName.className = 'addInfoName';
            addInfoName.textContent = car.getElementsByTagName('name')[0].textContent;

            // Получаем описание машины
            let description = car.getElementsByTagName('description')[0].textContent;
            // Создаем элемент с описанием машины
            let addInfoDescription = document.createElement('div');
            addInfoDescription.className = 'addInfoDescription';
            addInfoDescription.textContent = description;

            // Получаем данные кнопки машины
            let buttonData = car.getElementsByTagName('button')[0];
            // Создаем кнопку для дополнительной информации
            let addButton = document.createElement('a');
            addButton.className = 'addInfoButton';
            addButton.textContent = buttonData.textContent;
            addButton.href = buttonData.getAttribute('href');

            // Добавляем элементы в контейнер дополнительной информации о машине
            addInfo.appendChild(addInfoName);
            addInfo.appendChild(addInfoDescription);
            addInfo.appendChild(addButton);

            // Добавляем контейнер дополнительной информации о машине в контейнер общей информации о машинах
            addInfoContainer.appendChild(addInfo);

            // Добавление изображения (если оно существует) для изображений с названиями, заканчивающимися на '4'
            let lastImage = images[images.length - 1].textContent;
            if (lastImage.endsWith('4')) {
                let addImageDiv = document.createElement('div');
                addImageDiv.className = 'addImage ' + lastImage;
                addInfoContainer.appendChild(addImageDiv);
            }

            // Добавляем контейнер дополнительной информации о машине в контейнер общей информации о машинах
            carsInfoContainer.appendChild(addInfoContainer);
        }
    }).catch(error => console.error('Error loading XML:', error)); // Обработка ошибок загрузки XML


const modelsLink = document.getElementsByClassName('modelsLink')[0];
const models = document.getElementsByClassName('models')[0];

modelsLink.addEventListener('click', function() {
    models.classList.toggle('show');
});


const modelsElements = document.getElementsByClassName('modelsElement')

for (let i = 0; i < modelsElements.length; i++) {
window.location.href == modelsElements[i].href
    ? modelsElements[i].classList.add('activeLink')
    : modelsElements[i].classList.remove('activeLink');
}

const hambugerMenuContainer = document.getElementsByClassName('hambugerMenuContainer')[0];
const dropDownMenu = document.getElementsByClassName('dropDownMenu')[0];

hambugerMenuContainer.addEventListener('click', function() {
    dropDownMenu.classList.toggle('show');
});

const dropDownModel = document.querySelector('.dropDownModel');
const dropDownMenuModels = document.querySelectorAll('.dropDownMenuModel');
const dropDownMenuElement = document.querySelectorAll('.dropDownMenuElement')


dropDownModel.addEventListener('click', function() {
    dropDownMenuModels.forEach(function(dropDownMenuModel) {
        dropDownMenuModel.classList.toggle('show');
        dropDownMenu.classList.toggle('adaptiv')

        dropDownMenuElement.forEach(function(el) {
            el.classList.toggle('adaptiv')
        })
    });
});


const personButton = document.getElementsByClassName('personButton')[0]
const formContainer = document.getElementsByClassName('formContainer')[0]
const crossForm = document.querySelector('.crossForm')

const authMenu = document.querySelector('.authMenu')

authMenu.addEventListener('click', function() {
    formContainer.style.display = 'flex';
    toggleFilteredStylesForm();
})

personButton.addEventListener('click', function() {
    formContainer.style.display = 'flex';
    toggleFilteredStylesForm();
})

crossForm.addEventListener('click', function() {
    formContainer.style.display = 'none';
    toggleFilteredStylesForm();
})

function toggleFilteredStylesForm() {

    if (getComputedStyle(formContainer).display === 'flex') {
        document.querySelectorAll('.forBlur').forEach(element => {
            element.classList.add('filtered');
        });
    } else {
        document.querySelectorAll('.filtered').forEach(element => {
            element.classList.remove('filtered');
        });
    }
}


document.querySelector('.formContainer').addEventListener('submit', validateForm);

const contactsContainer = document.querySelector('.contactsContainer');
const contactButton = document.querySelector('.contactButton');

const crossContacts = document.querySelector('.crossContacts');

contactButton.addEventListener('click', function() {
    contactsContainer.style.display = 'flex';
    toggleFilteredStylesContacts();
})

crossContacts.addEventListener('click', function() {
    contactsContainer.style.display = 'none';
    toggleFilteredStylesContacts();
})

function toggleFilteredStylesContacts() {

    if (getComputedStyle(contactsContainer).display === 'flex') {
        document.querySelectorAll('.forBlur').forEach(element => {
            element.classList.add('filtered');
        });
    } else {
        document.querySelectorAll('.filtered').forEach(element => {
            element.classList.remove('filtered');
        });
    }
}

// Валидация формы
function validateForm(e) {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    document.querySelectorAll('.errorMessage').forEach(error => {
        error.textContent = '';
    });

    let isValid = true;

    
    
    const emailError = document.getElementById('emailError');
    if (!email) {
        emailError.textContent = 'Почта обязательна для заполнения';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Неверный формат почты';
        isValid = false;
    }

    const fnameError = document.getElementById('fnameError');
    if (!fname) {
        fnameError.textContent = 'Имя обязательно для заполнения';
        isValid = false;
    }

    const lnameError = document.getElementById('lnameError');
    if (!lname) {
        lnameError.textContent = 'Фамилия обязательна для заполнения';
        isValid = false;
    }

    if (isValid) {
        const userData = {
            firstName: fname,
            lastName: lname,
            email: email,
            authorized: true
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));

        setTimeout(() => {
            location.reload();
        }, 1000)
    }
}

// Регулярное выражение для email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Функция для проверки авторизации при загрузке страницы
function checkAuthorization() {
    const userData = localStorage.getItem('userData');
    const personButton = document.getElementsByClassName('personButton')[0]
    const loginUsername = document.getElementsByClassName('loginUsername')[0]
    const loginUsernameMobile = document.querySelector('.loginUsernameMobile')
    
    const commentInputContainer = document.getElementsByClassName('commentInputContainer')[0]

    if (userData) {
        const { firstName, lastName, authorized} = JSON.parse(userData);
        if (authorized) {
            personButton.style.display = 'none';
            loginUsername.textContent = `${firstName} ${lastName}`
            loginUsernameMobile.textContent = `${firstName} ${lastName}`
            commentInputContainer.style.display = 'flex'
        }
    }
}

checkAuthorization();

// Функция добавления комментария
function addComment() {
    const commentText = document.querySelector('.commentInput').value;
    if (!commentText.trim()) {
        alert('Комментарий не может быть пустым');
        return;
    }

    const comment = {
        id: new Date().getTime(), 
        text: commentText.trim(),
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.unshift(comment);

    localStorage.setItem('comments', JSON.stringify(comments));

    displayComments();

    document.querySelector('.commentInput').value = '';
}

// Функция отображения комментариев
function displayComments() {
    const userData = localStorage.getItem('userData');
    const { firstName, lastName } = JSON.parse(userData);


    const commentsContainer = document.querySelector('.comments');
    commentsContainer.innerHTML = '';
    

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <div class='userImage'>
                <svg viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' clip-rule='evenodd'
                        d='M17.0407 15.0626C15.8508 13.0055 14.0172 11.5305 11.8774 10.8313C14.053 9.53614 15.0952 6.94703 14.4235 4.5058C13.7519 2.06456 11.532 0.372925 9.00003 0.372925C6.46809 0.372925 4.24819 2.06456 3.57654 4.5058C2.9049 6.94703 3.94707 9.53614 6.12268 10.8313C3.98284 11.5297 2.14925 13.0047 0.959404 15.0626C0.840615 15.2562 0.836301 15.4991 0.948138 15.6969C1.05997 15.8947 1.27034 16.0162 1.49755 16.0143C1.72476 16.0123 1.93301 15.8872 2.04143 15.6876C3.51331 13.1438 6.11487 11.6251 9.00003 11.6251C11.8852 11.6251 14.4867 13.1438 15.9586 15.6876C16.067 15.8872 16.2753 16.0123 16.5025 16.0143C16.7297 16.0162 16.9401 15.8947 17.0519 15.6969C17.1638 15.4991 17.1594 15.2562 17.0407 15.0626ZM4.62503 6.00005C4.62503 3.5838 6.58378 1.62505 9.00003 1.62505C11.4163 1.62505 13.375 3.5838 13.375 6.00005C13.375 8.4163 11.4163 10.3751 9.00003 10.3751C6.58485 10.3725 4.62761 8.41522 4.62503 6.00005Z'
                        fill='#fff' />
                </svg>
            </div>
            <div class='userInfo'>
                <div class='username'>${firstName} ${lastName}</div>
                <div class='commentСontent'>${comment.text}</div>
            </div>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}

displayComments();
