'use strict';

const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event- year');
const eventImg = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');

let usersTime;

// https://cdn.pixabay.com/photo/2023/03/08/10/11/crocuses-7837426_960_720.jpg

const appUpdate = () => {
	usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);

	eventSpan.textContent = eventName.value;
	imageSection.style.backgroundImage = `url("${eventImg.value}")`;
};

settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active');
});

saveBtn.addEventListener('click', appUpdate);
