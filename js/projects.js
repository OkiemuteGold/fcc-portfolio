$(document).ready(function () {

    let projects = [
        {
            id: "company",
            backgroundClass: "oxfordvest",
            title: "Oxfordvest",
            language: "Vuejs",
            description: "Multi-partnership investment company making investment in Agriculture easy.",
            note: "",
            url: "https://oxfordvest.com/",
            hiddenClass: ""
        },
        {
            id: "company",
            backgroundClass: "oigng",
            title: "OIGNG",
            language: "Vuejs",
            description: "Business development company that builds businesses across different sectors in Nigeria.",
            note: "",
            url: "https://oigng.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "company",
            backgroundClass: "oxfordholdings",
            title: "Oxford Holdings",
            language: "JavaScript",
            description: "A leading multi-sectoral organization with diversified investments spanning across key business sectors.",
            note: "",
            url: "http://oxfordholdingsng.com/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "stock-crypt",
            title: "Stock-Crypt",
            language: "Vuejs",
            description: "Made to aid investment in US Stocks, and Crypto-currencies. App allows you choose platform of interest.",
            note: "This project is currently being modified.",
            url: "https://stock-crypt.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "weather-js",
            title: "Weather App",
            language: "JavaScript",
            description: "Find out the weather details of any city in the world through a voice or direct text input. And have the result <strong>read out to you</strong>.",
            note: "",
            url: "https://weather-man-app.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "music-player-vue",
            title: "Music Player",
            language: "Vuejs",
            description: "Music Player to unwind. Has play, pause, add to favorite, search, sort, shuffle, repeat, and many more features. Has a dedicated now playing view.",
            note: "",
            url: "https://musicplayer-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "test",
            backgroundClass: "unsplash-clone",
            title: "Unsplash Clone",
            language: "Vuejs",
            description: "Search, view, expand, and download your favorite photo from Unsplash directly from this app.",
            note: "",
            url: "https://unsplash-clone-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "test",
            backgroundClass: "shopify-internship",
            title: "Shopify Internship",
            language: "Vuejs",
            description: "Shopify Internship Challenge to build an application with React js, that fetches data from the NASA free API. User should be able to like images.",
            note: "",
            url: "https://shopify-intern.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "test",
            backgroundClass: "tech-doc",
            title: "Technical documentation",
            language: "JavaScript",
            description: "Documentation of fundamental of JavaScript Functions. Carefully designed reference/study notes with code samples.",
            note: "",
            url: "https://fcc-js-documentation.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "test",
            backgroundClass: "product-landing",
            title: "Product landing",
            language: "JavaScript",
            description: "A simple product landing page made with HTML, CSS, and JavaScript. It is part of Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-p-landing.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "test",
            backgroundClass: "survey-form",
            title: "Survey Form",
            language: "JavaScript",
            description: "Survey form, made with HTML, and CSS. It is part of Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-survey-form1.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "test",
            backgroundClass: "tribute",
            title: "Tribute to Mary Slessor",
            language: "JavaScript",
            description: "Tribute page of Mary Slessor (late), made with HTML, and CSS. It is part of Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-tribute-page-mary.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "freelance",
            backgroundClass: "tosdis",
            title: "Tosdis Web",
            language: "JavaScript",
            description: "A fully responsiveness Crypto currency website made for a client",
            note: "",
            url: "https://tosdis.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "freelance",
            backgroundClass: "solrazr",
            title: "Solrazr Web",
            language: "JavaScript",
            description: "A fully responsiveness single page website made for a client",
            note: "",
            url: "https://solrazr1.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "challenge",
            backgroundClass: "weather-vue",
            title: "Weather App",
            language: "Vuejs",
            description: "A weather application made with Vue js. My first Vue Progressive Web Application (PWA).",
            note: "",
            url: "https://weather-check-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "challenge",
            backgroundClass: "quiz-vue",
            title: "Quiz App",
            language: "Vuejs",
            description: "A quiz progressive web application (PWA) to improve my Vuejs coding skills",
            note: "",
            url: "https://weather-check-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "challenge",
            backgroundClass: "weight-conv",
            title: "Weight Converter",
            language: "JavaScript",
            description: "An application made with HTML, CSS and JavaScript, which allows user input a metric value and receive the result in grams, kilograms and ounce.",
            note: "",
            url: "https://weight-conv.netlify.app/",
            hiddenClass: ""
        },
    ]

    let id = "personal";

    // console.log(projects);

    function toggleProjectCategory(id) {
        let allProjects = projects.filter((project) => {
            // console.log(project.id);

            return (project.id).toLowerCase() == id;
        });

        let projectOutput = "";

        if (allProjects.length > 0) {
            if (allProjects.length > 3) {
                setTimeout(() => {
                    $(".view-more-button").show();
                }, 300);
            } else {
                $(".view-more-button").hide();
            }

            /*---- View More Items -----*/
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
            viewMore('.view-more-button', '.project-item.hidden');

            allProjects.forEach(project => {
                projectOutput += `
                    <div class="project-item ${project.id} ${project.hiddenClass}">
                        <div class="bg-img-container">
                            <div class="${project.backgroundClass} bg-img"></div>
                        </div>
            
                        <div class="project-description">
                            <div class="project-title">
                                <h3>${project.title} (${project.language})</h3>
                            </div>
            
                            <p class="mb-2">
                                ${project.description}
                            </p>
                `;

                if (project.note !== "") {
                    projectOutput += `
                        <p class="mb-2">
                            ${project.note}
                        </p>
                    `
                }

                projectOutput += `
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="view-project-button">View Project</a>
                    </div>
                `;

                projectOutput += `</div>`;
            })

            setTimeout(() => {
                $(".project-tile .project-item").fadeIn('slow');

                document.querySelector('.project-tile').innerHTML = projectOutput;
            }, 500);
        }
    }

    $(".project-category-tab").on("click", ".categories", function (e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
            return
        } else {
            $(".categories").removeClass("active");
            $(this).addClass("active");
        }

        $('.project-tile .project-item').fadeOut('slow');

        let id = $(this).attr('data-value');
        // console.log(id);
        toggleProjectCategory(id);
    });

    toggleProjectCategory(id);

});