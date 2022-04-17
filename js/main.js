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
            place: "@Genesis Digital Solutions",
            date: "February, 2022",
            works: [
                {
                    name: "SoulComms Feedback App,",
                    link: "https://feedbackvue.netlify.app/"
                },
                {
                    name: "LandFlipi Webapp (in development).",
                    link: ""
                },
            ],
            workDescription: [
                "Developing applications using JavaScript, jQuery, SCSS, CSS, Vuejs, Angular, Firebase.",

                "Collaborating with the team during product ideation, development and delivery.",

                "Providing product management and design support to clients, users, and team members."
            ]
        },
        {
            id: "2",
            role: "Software Developer",
            place: "@Oxford Octopus",
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
                    name: "Foxpay.",
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
                "Followed design prototypes, project descriptions, and design requirements to build high-performance, semantic, accessible, and responsive UIs for web apps, progressive web apps and websites.",

                // "Applied UI/UX design practices while building the OXFORDVEST platform, implemented functionalities - To calculate the ROI for all products, search and filter functionality for FAQ, etc",

                "Optimized projects(websites, applications) for performance, speed, and search engines, to above 85% and rectified other front-end-related issues.",

                "Validated all HTML, and CSS codes using W3C Validation Service and Carried out usability, mobile-friendly, and responsive design testing using Google’s Mobile-Friendly Test",

                "Collaborated with the team, and supported projects through ideation, development, and delivery.",

                "Provided technical product support services to clients, users, and other team members."
            ]
        },
        {
            id: "3",
            role: "Frontend Developer",
            place: "@Freelance",
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
                    name: "Multichain,",
                    link: ""
                },
                {
                    name: "Pocket Arena,",
                    link: "https://pocket-arena.netlify.app/"
                },
                {
                    name: "Wallet Connect",
                    link: "https://walletconnect1.netlify.app/"
                },
                {
                    name: "BIP Mnemonic.",
                    link: "https://bip-mnemonic.netlify.app/"
                },
                // {
                //     name: "Metamask,",
                //     link: "https://metamask.netlify.app/"
                // },
            ],
            workDescription: [
                "Design UIs for web applications, progressive web applications, and websites.",

                "Follow design prototypes, project descriptions, and design requirements to build high-performance, semantic, accessible, and responsive UIs.",

                "Collaborate with clients during all phases of delivery, communicating and making necessary improvement to products."
            ]
        },
        {
            id: "4",
            role: "Peer Mentor",
            place: "@Oxford Octopus",
            date: "June, 2021 - August, 2021",
            workDescription: [
                "Provided mentorship support for intern Front-end developers.",

                "Guided interns and peers in building small projects that improved their coding skills in HTML5, CSS3, JavaScript, Vuejs."
            ]
        },
        {
            id: "5",
            role: "Volunteer",
            place: "@Oxford Octopus",
            date: "October, 2020 - December, 2020",
            workDescription: [
                "Volunteered for 3 months to improve coding skills, while solving technical problems for the firm.",

                "Built mobile-responsive websites using HTML, CSS, JavaScript, and jQuery, and maintained an organized workflow using Github."
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