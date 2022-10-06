// import modules
// import "./form";
import { toggleForm, clearForm } from "./form";
// import "./submit";
import { fetchCards } from './cards';

// import database functions
import { initdb, getDb, postDb, deleteDb } from './database';


// import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// import CSS
import "../css/index.css";
import { Tooltip, Toast, Popper } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.addEventListener('load', function () {
    initdb();
    fetchCards();

    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;

    // Form functionality
    const form = document.getElementById("formToggle");
    const newContactButton = document.getElementById("new-contact");
    let submitBtnToUpdate = false;
    let profileId;

    newContactButton.addEventListener('click', event => {
        toggleForm()
    })

    form.addEventListener('submit', event => {
        // Handle data
        event.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let profile = document.querySelector('input[type="radio"]:checked').value;

        // Post form data to IndexedDB OR Edit an existing card in IndexedDB
        if (submitBtnToUpdate == false) {
            postDb(name, email, phone, profile);
        } else {

            fetchCards();
            // Toggles the submit button back to POST functionality
            submitBtnToUpdate = false;
        }

        // Clear form
        clearForm();
        // Toggle form
        toggleForm();
        // Reload the DOM
        fetchCards();
    });
});

// delete functionality
window.deleteCard = (e) => {
    // Grabs the id from the button element attached to the contact card.
    let id = parseInt(e.id);
    // Delete the card
    deleteDb(id);
    // Reload the DOM
    fetchCards();
};