jQuery(document).ready(function ($) {

    /** header styled on scroll **/
    let prevScrollPosition = window.pageYOffset;
    // let headerContainer = document.querySelector(".header-container");
    let header = document.getElementById("header");

    window.onscroll = () => {
        let currentScrollPosition = window.pageYOffset;

        // if (prevScrollPosition > currentScrollPosition) {
        //     headerContainer.style.top = "0";
        //     header.classList.add("sticked");
        // } else {
        //     headerContainer.style.top = `-${header.offsetHeight}px`;
        //     header.classList.remove("sticked");
        // }

        if (prevScrollPosition < currentScrollPosition) {
            header.classList.add("sticked"); //using static top only, no extra
        }

        prevScrollPosition = currentScrollPosition;

        if (prevScrollPosition === 0) {
            header.classList.remove("sticked");
        }
    };

    /** toggle nav **/
    let nav = document.getElementById("nav");
    let toggler = document.getElementById("mobile-menu-toggler");
    let overlay = document.querySelector(".overlay");

    toggler.addEventListener("click", function () {
        if (nav.classList.contains("show-nav")) {
            nav.classList.remove("show-nav");
        } else {
            nav.classList.add("show-nav");
        }

        if (overlay.classList.contains("display-block")) {
            overlay.classList.remove("display-block");
        } else {
            overlay.classList.add("display-block");
        }

        this.classList.toggle("styled-toggler");
    });

    /** update footer year **/
    let footerYear = document.getElementById("footer-year");
    let fullCopyrightYear;
    let date = new Date();
    let currentYear = date.getFullYear();
    currentYear > 2021
        ? (fullCopyrightYear = `2021 - ${currentYear}`)
        : (fullCopyrightYear = currentYear);
    footerYear.innerHTML = fullCopyrightYear;


    /** Smooth nav link transition **/
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    /** mode toggle - day/night **/
    const body = document.body;
    let modeIcon = document.querySelector(".mode-icon");

    modeIcon.addEventListener("click", function (e) {
        // this.classList.toggle("fa-sun");

        this.classList.contains("fa-moon") ?
            (this.classList.replace("fa-moon", "fa-sun"),
                this.setAttribute("aria-label", "use day mode")) :
            ((this.className = "fas fa-moon mode-icon"),
                this.setAttribute("aria-label", "use night mode"));

        /** change theme **/
        if (body.classList.contains("nightTheme")) {
            body.classList.replace("nightTheme", "dayTheme");

            currentTheme = JSON.stringify("dayTheme");
            localStorage.setItem("theme", currentTheme);
        } else {
            body.className = "nightTheme";

            currentTheme = JSON.stringify("nightTheme");
            localStorage.setItem("theme", currentTheme);
        }
    });

    /** get and save current theme **/
    getCurrentTheme();

    function getCurrentTheme() {

        window.onload = setDefault();

        let currentTheme = JSON.parse(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : null;

        const body = document.body;
        const modeIcon = document.querySelector(".mode-icon");

        if (currentTheme !== null) {
            if (currentTheme == 'nightTheme') {
                body.className = "nightTheme";

                currentTheme = JSON.stringify("nightTheme");
                localStorage.setItem("theme", currentTheme);

                modeIcon.classList.replace("fa-moon", "fa-sun");
                modeIcon.setAttribute("aria-label", "use day mode");

            } else if (currentTheme == "dayTheme") {
                body.className = "dayTheme";

                currentTheme = JSON.stringify("dayTheme");
                localStorage.setItem("theme", currentTheme);

                modeIcon.className = "fas fa-moon mode-icon";
                modeIcon.setAttribute("aria-label", "use night mode");
            }
        }
    }

    /** set default theme on load **/
    function setDefault() {
        body.className = "dayTheme";
        // console.log("loaded");
    }

    /** nav-tab toggle **/
    // import { workPlaces } from "./work-places";
    var id = '1';

    var workPlaces = [
        {
            id: "1",
            role: "Frontend Developer",
            place: "@ Oxford Octopus",
            date: "February 2021 - Present",
            workDescription: [
                "Worked with mockups to develop websites, web apps and progressive web apps with HTML5, CSS3, Bootstrap, SCSS, JavaScript, jQuery, and Vue.js. Collaborated closely with the team to support projects during all phases of delivery. Ensured website/App performance is optimized and rectified front-end-related issues. Identified innovative ideas and proof of concepts according to project requirements. Provided Product Support Services to clients/users, alongside other team members"
            ]
        },
        {
            id: "2",
            role: "Frontend Developer",
            place: "@ Freelance",
            date: "August 2021 - Present",
            workDescription: [
                "Built web pages from UI design mockups using technologies such as HTML5, CSS3, Bootstrap, JavaScript, jQuery. Identified innovative ideas and proof of concepts according to project requirements"
            ]
        },
        {
            id: "3",
            role: "Frontend Developer",
            place: "Mentor",
            date: "June 2021 - Present",
            workDescription: [
                "Helped to mentor two interns on HTML5, CSS3, Bootstrap, and JavaScript, and worked with them to build some cool web templates",
            ]
        }
    ];

    function toggleWorkPlace(id) {
        let allWorkPlaces = workPlaces.filter((workPlace) => {
            return workPlace.id === id;
        });

        let htmlOutput = "";

        if (allWorkPlaces.length > 0) {

            allWorkPlaces.forEach((workPlace) => {
                let description;
                (workPlace.workDescription).forEach(desc => {
                    description = desc
                    // console.log(description);
                });
                // for (var i = 0; i < description.length; i++) {
                // console.log(description);

                htmlOutput += `
                        <div class="work-place-item">
                            <h3>${workPlace.role} <span>${workPlace.place}</span></h3>
                            <span class="date">${workPlace.date}</span>
                            <ul class="technology list">
                                <li>${description}</li>
                            </ul>
                        </div>
                    `;
                // }
            });

            setTimeout(() => {
                $('.work-places .work-place-item').fadeIn('slow');

                document.querySelector('.work-places').innerHTML = htmlOutput;
            }, 500);
        }
    }

    $('.nav-tab').on('click', '.tab-link', function (e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
            return
        } else {
            $('.tab-link').removeClass('active');
            $(this).addClass('active');
        }

        $('.work-places .work-place-item').fadeOut('slow');

        let id = $(this).attr('data-value');
        toggleWorkPlace(id);
    });

    toggleWorkPlace(id);

    /*---- Load More Items -----*/
    function viewMore(viewMoreBtn, loadedItem) {
        $(viewMoreBtn).on('click', function (e) {
            e.preventDefault();

            $(".spinner").css("display", "inline-block");

            setTimeout(() => {
                $(".spinner").css("display", "none");

                $(this).fadeOut("slow");
                $(loadedItem).fadeIn("slow");
            }, 1300);
        })
    }

    viewMore('.viewMoreProjects', '.project-item.hidden');
});