const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formElement = popupEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const formNewCard = popupNewCard.querySelector('.popup__form');
const newCardNameInput = popupNewCard.querySelector('.popup__input_type_name');
const newCardLinkInput = popupNewCard.querySelector('.popup__input_type_link');
const popupOpenPhoto = document.querySelector('.popup_type_image');
const openedPhotoName = popupOpenPhoto.querySelector('.popup__image-description');
const openedPhoto = popupOpenPhoto.querySelector('.popup__opened-image');
const newCardTemplate = document.querySelector('#element__frame').content; 
const newCardContainer = document.querySelector('.element__list');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function creacteCard(name, link) {
  const newCardElement = newCardTemplate.querySelector('.element__frame').cloneNode(true); 
  newCardElement.querySelector('.element__images').src = link, alt = name;
  newCardElement.querySelector('.element__images').alt = name;
  newCardElement.querySelector('.element__text').textContent = name;

  newCardElement
    .querySelector('.element__like')
    .addEventListener('click', (event) => {
      event.target.classList.toggle('element__like_active');
    });

    newCardElement
    .querySelector('.element__trash')
    .addEventListener('click', (event) => {
      event.target.closest('.element__frame').remove();  
    });

    newCardElement
    .querySelector('.element__images')
    .addEventListener('click', (event) => {
      openedPhotoName.textContent = event.target.alt;
      openedPhoto.src = event.target.src;
      openedPhoto.alt = event.target.alt;
      openPopup(popupOpenPhoto);
    });

  return newCardElement;
}

initialCards.forEach(function (newCard) {
  newCardContainer.append(creacteCard(newCard.name, newCard.link));
});

function addCard(event) {
  event.preventDefault();

  newCardContainer.prepend(
    creacteCard(newCardNameInput.value, newCardLinkInput.value)
  );

  closePopup(popupNewCard);
  newCardNameInput.value = '';
  newCardLinkInput.value = '';
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function saveData(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEdit);
}

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});

addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

formElement.addEventListener('submit', saveData);

formNewCard.addEventListener('submit', addCard);

Array.from(closeButtons).forEach(function (closeButton) {
  closeButton.addEventListener('click', (evt) => {
    if (evt.target.closest('.popup_type_edit')) {
      closePopup(popupEdit);
    } else if (evt.target.closest('.popup_type_image')) {
      closePopup(popupOpenPhoto);
    } else {
      closePopup(popupNewCard);
    }
  });
});