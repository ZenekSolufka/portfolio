const skills = document.querySelector('.skills')
const expirience = document.querySelector('.expirience')
const education = document.querySelector('.education')
const skillsTab = document.querySelector('.skills-tab')
const expirienceTab = document.querySelector('.expirience-tab')
const educationTab = document.querySelector('.education-tab')

skills.addEventListener("click", skillTab);

function skillTab() {
    if (skills) {
        skillsTab.classList.remove('hidden')
        skills.style.color = "hsl(51, 79%, 52%)"
        expirienceTab.classList.add('hidden')
        expirience.style.color = "rgb(108, 108, 108)"
        educationTab.classList.add('hidden')
        education.style.color = "rgb(108, 108, 108)"
    }
}

expirience.addEventListener("click", expTab);

function expTab() {
    if (expirience) {
        skillsTab.classList.add('hidden')
        skills.style.color = "rgb(108, 108, 108)"
        expirienceTab.classList.remove('hidden')
        expirience.style.color = "hsl(51, 79%, 52%)"
        educationTab.classList.add('hidden')
        education.style.color = "rgb(108, 108, 108)"
    }
}

education.addEventListener("click", eduTab);

function eduTab() {
    if(education){
        skillsTab.classList.add('hidden')
        skills.style.color = "rgb(108, 108, 108)"
        expirienceTab.classList.add('hidden')
        expirience.style.color = "rgb(108, 108, 108)"
        educationTab.classList.remove('hidden')
        education.style.color = "hsl(51, 79%, 52%)"
    }
}