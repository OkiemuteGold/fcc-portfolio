$(document).ready(function () {

    /** header styled on scroll **/
    let prevScrollPosition = window.pageYOffset;
    let header = document.getElementById("header");

    window.onscroll = () => {
        let currentScrollPosition = window.pageYOffset;

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

            $(".navbar a").removeClass("active");
            $(this).addClass("active");
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

        let storedTheme = JSON.parse(localStorage.getItem("theme"));
        let currentTheme = storedTheme ? storedTheme : null;

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
    }

    /** nav-tab toggle **/
    // import { workPlaces } from "./work-places";
    let id = '1';

    let workPlaces = [
        {
            id: "1",
            role: "Software Developer",
            place: "@ Oxford Octopus",
            date: "February, 2021 - January, 2022",
            works: [
                {
                    name: "Oxfordvest,",
                    link: "https://oxfordvest.com/"
                },
                {
                    name: "Oxford Holdings,",
                    link: "http://oxfordholdingsng.com/"
                },
                {
                    name: "OIGNG,",
                    // link: "https://oig.ng/"
                    link: "https://oigng.netlify.app/"
                },
                {
                    name: "Foxpay,",
                    // link: "https://https://foxpay.ng/"
                    link: "https://foxpaylanding.netlify.app/"
                },

                // {
                //     name: "Oxford Octopus,",
                //     // link: "https://oxfordoctopus.com/"
                //     link: "https://oxfordoctopus.netlify.app/"
                // },
                // {
                //     name: "Oxford Craighton Schools",
                //     link: "https://oxfordcraightonschools.com/"
                // }
            ],
            workDescription: [
                "Developed web apps, progressive web apps and websites",
                "Collaborated with the team during product ideation, development and delivery.",
                "Optimized performance of websites/applications to above 85% and rectified other front-end-related issues.",
                "Provided Product Support Services to clients, users, and other team members."
            ]
        },
        {
            id: "2",
            role: "Frontend Developer",
            place: "@ Freelance",
            date: "August, 2021 - Present",
            works: [
                {
                    name: "Tosdis,",
                    link: "https://tosdis.netlify.app/"
                },
                {
                    name: "Solrazr,",
                    link: "https://solrazr1.netlify.app/"
                },
                {
                    name: "Pocket Arena,",
                    link: "https://pocket-arena.netlify.app/"
                },
                {
                    name: "BIP Mnemonic,",
                    link: "https://bip-mnemonic.netlify.app/"
                },
                {
                    name: "Wallet Connect",
                    link: "https://walletconnect1.netlify.app/"
                },
            ],
            workDescription: [
                "Transformed UI design/mockups to responsive web pages using technologies such as HTML5, CSS3, JavaScript, jQuery.",
                "Collaborated with clients during all phases of delivery, communicating and making necessary improvement to products.",
            ]
        },
        {
            id: "3",
            role: "Frontend Developer",
            place: "Mentor",
            date: "June, 2021 - August, 2021",
            workDescription: [
                "Mentored interns on HTML5, CSS3, Bootstrap, and JavaScript.",
                "Guided them to build some web pages that improved their coding skills.",
            ]
        }
    ];

    function toggleWorkPlace(id) {
        let allWorkPlaces = workPlaces.filter((workPlace) => {
            return workPlace.id === id;
        });

        let workPlaceOutput = "";

        if (allWorkPlaces.length > 0) {

            allWorkPlaces.forEach((workPlace) => {

                workPlaceOutput += `
                    <div class="work-place-item">
                        <h3>${workPlace.role} <span>${workPlace.place}</span></h3>
                        <span class="date">${workPlace.date}</span>
                        <ul class="technology list">`;

                (workPlace.workDescription).forEach((val) => {
                    workPlaceOutput += `<li>${val}</li>`;
                });

                workPlaceOutput += `</ul>`;

                if (workPlace.works) {
                    workPlaceOutput += `
                        <h4 class="mt-4 mb-2">Works/Ongoing projects: </h4>
                        <div class="works">
                    `;

                    (workPlace.works).forEach((work) => {
                        workPlaceOutput += `
                            <a href="${work.link}" target="_blank" rel="noopener noreferrer">${work.name}</a>
                        `;
                    });

                    workPlaceOutput += `</div>`;
                }

                workPlaceOutput += `</div>`;
            });

            setTimeout(() => {
                $('.work-places .work-place-item').fadeIn('slow');
                document.querySelector('.work-places').innerHTML = workPlaceOutput;
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

});