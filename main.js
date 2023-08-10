let personIndex = 0;

function changePerson() {
    const person = data[personIndex];

    const nameHeading = document.getElementById("person_name");
    nameHeading.innerHTML = `${person.name.first} ${person.name.last}`;

    const personAge = document.getElementById("age");
    personAge.innerHTML = `${person.dob.age} Years Old`;

    const personGender = document.getElementById("gender");
    personGender.innerHTML = `${person.gender}`;

    const personContact = document.getElementById("contact");
    personContact.innerHTML = `${person.email}`;

    const personImage = document.getElementById("person_image");
    personImage.src = person.picture.large;
}

function getNextPersonIndex() {
    return Math.floor(Math.random() * data.length);
}

const nextButton = document.getElementById("next_btn");
nextButton.addEventListener("click", () => {
    personIndex = getNextPersonIndex();
    changePerson();
});

console.log(data);
changePerson(); // Initialize with the first person's data
