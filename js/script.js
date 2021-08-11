let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let popupOpen = () => {
  popup.classList.add('popup_status_opened');
}
let popupClose = () => {
  popup.classList.remove('popup_status_opened');
}
let formSubmitHandler = evt => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}
let editProfile = () => {
  popupOpen();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', editProfile);