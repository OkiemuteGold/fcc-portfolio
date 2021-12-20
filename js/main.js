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
            role: "Software Developer",
            place: "@ Oxford Octopus",
            date: "February 2021 - Present",
            // works: `
            //     <a href="https://oxfordvest.com/" target="_blank">Oxfordvest</a>,
            // `,
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
                    link: "https://oig.ng/"
                },
                {
                    name: "Oxford Octopus,",
                    link: "https://oxfordoctopus.com/"
                },
                {
                    name: "Foxpay,",
                    link: "https://https://foxpay.ng/"
                },
                {
                    name: "Oxford Craighton Schools",
                    link: "https://oxfordcraightonschools.com/"
                }
            ],
            workDescription: [
                "Developed websites, web apps and progressive web apps with HTML5, CSS3, Bootstrap, SCSS, JavaScript, jQuery, and Vue.js.",
                "Collaborated with the team to support projects during all phases of delivery.",
                "Ensured website/app performance is optimized and rectified front-end-related issues.",
                "Identified innovative ideas and proof of concepts according to project requirements.",
                "Maintained an organized workflow using project management tool (e.g. GitHub).",
                "Provided Product Support Services to clients/users, alongside other team members."
            ]
        },
        {
            id: "2",
            role: "Frontend Developer",
            place: "@ Freelance",
            date: "August 2021 - Present",
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
                "Built web pages from UI design mockups using technologies such as HTML5, CSS3, Bootstrap, JavaScript, jQuery.",
                "Collaborated closely with clients during all phases of delivery, communicating and making necessary improvements to clients' initial product ideas.",
                "Identified innovative ideas and proof of concepts according to project requirements."
            ]
        },
        {
            id: "3",
            role: "Frontend Developer",
            place: "Mentor",
            date: "June 2021 - Present",
            workDescription: [
                "Helped to mentor two interns on HTML5, CSS3, Bootstrap, and JavaScript.",
                "Worked with them to build some web templates that improved their coding skills.",
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
                            <a href="${work.link}" target="_blank">${work.name}</a>
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