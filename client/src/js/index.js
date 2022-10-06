// import modules
import  "./form";
import "./submit";

// import database functions
import { initdb, getDb, postDb } from './database';

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

    // temporarily placing getDb() and postDb() calls here for testing
    getDb();
    postDb("Lernantino", "lernantino@test.com", 8186601234, "Bear");
    getDb();

    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});