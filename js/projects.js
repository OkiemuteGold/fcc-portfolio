$(document).ready(function () {

    let projects = [
        {
            id: "company",
            backgroundClass: "agrolyfe",
            title: "Agrolyfe",
            language: "Vuejs, Azure",
            description: "Laid out design and built the Agrolyfe website. Fetched and displayed data, performed functions and calculations with data",
            note: "",
            url: "https://agrolyfe.farm/",
            hiddenClass: ""
        },
        {
            id: "company",
            backgroundClass: "feedback-app",
            title: "SoulComms Feedback App",
            language: "Vuejs, Firebase",
            description: "Makes submitting consumers feedbacks easy through form, input upload, drag & drop upload, and live recording. With feedbacks view.",
            note: "",
            url: "https://feedbackvuetest.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "company",
            backgroundClass: "dmed",
            title: "D.med Software Website",
            language: "Wordpress, Elementor",
            description: "D.med Software developes software systems for the medical industry. It's based in Spain.",
            note: "",
            url: "",
            hiddenClass: ""
        },
        {
            id: "company",
            backgroundClass: "zuckerli",
            title: "Zuckerli Website",
            language: "HTML5, CSS3",
            description: "Healthcare company based in Germany, specializing in diabetes products, consultancy, and others.",
            note: "",
            url: "https://zueckerli.de/",
            hiddenClass: "hidden"
        },
        {
            id: "company",
            backgroundClass: "foxpay",
            title: "Foxpay Website",
            language: "JavaScript",
            description: "FoxPay offers a flexible, secure, and better way to save, earn high, and pay utility bills.",
            note: "",
            url: "https://foxpayng.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "company",
            backgroundClass: "oxfordvest",
            title: "Oxfordvest",
            language: "Vuejs, Azure, Axios",
            description: "Multi-partnership investment company making investment in Agriculture easy.",
            note: "",
            url: "https://oxfordvest.com/",
            hiddenClass: "hidden"
        },
        {
            id: "company",
            backgroundClass: "landflip",
            title: "Landflipi Website",
            language: "JavaScript",
            description: "Landflip.ng is making buying and selling lands in Nigeria easy, fast, and secure, with multiple funding options.",
            note: "",
            url: "https://landflip.ng/",
            hiddenClass: "hidden"
        },
        {
            id: "company",
            backgroundClass: "oigng",
            title: "OIGNG",
            language: "Vuejs, Vuex",
            description: "Business development company that builds businesses across different sectors in Nigeria.",
            note: "",
            url: "https://oigng.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "company",
            backgroundClass: "oxfordholdings",
            title: "Oxford Holdings",
            language: "JavaScript",
            description: "Leading multi-sectoral organization with diversified investments spanning across key business sectors.",
            note: "",
            url: "http://oxfordholdingsng.com/",
            hiddenClass: "hidden"
        },
        {
            id: "personal",
            backgroundClass: "stock-crypt",
            title: "Stock-Crypt",
            language: "Vuejs, Vuex, Axios",
            description: "Aids investment in US Stocks, and Crypto-currencies. App allows you choose platform of interest, sort data, and recommendations.",
            note: "This project is currently being modified.",
            url: "https://stock-crypt.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "amazoncars-landing",
            title: "Amazon Cars",
            language: "Angular, TypeScript",
            description: "A hypothetical situation, to create an online car dealership application, in line with EntryLevel Product Management certification.",
            note: "The project is still in development.",
            url: "https://amazoncars.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "invoice",
            title: "Invoice App",
            language: "Vue3, Sass, Firebase",
            description: "Application to create invoice, download (jsPDF plugin) and bill to client.",
            note: "<strong>Multi-language support</strong> and others coming soon",
            url: "https://invoice-app-vue3.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "personal",
            backgroundClass: "weather-js",
            title: "Weather App",
            language: "JavaScript, TTS",
            description: "Get weather details of any city in the world through a voice or direct text input. And have the result <strong>read out to you</strong>.",
            note: "",
            url: "https://weather-man-app.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "personal",
            backgroundClass: "music-player-vue",
            title: "Music Player",
            language: "Vuejs, Vuex",
            description: "Music Player to unwind. Has play, pause, add to favorite, search, sort, shuffle, repeat, and many more features. Has a dedicated now playing view.",
            note: "",
            url: "https://musicplayer-vue.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "test",
            backgroundClass: "unsplash-clone",
            title: "Unsplash Clone",
            language: "Vuejs, Axios",
            description: "Search, view, expand, and download your favorite photo from Unsplash directly from this app.",
            note: "",
            url: "https://unsplash-clone-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "test",
            backgroundClass: "shopify-internship",
            title: "Shopify Internship",
            language: "Vuejs, Axios",
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
            language: "CSS, JavaScript",
            description: "Product landing page. Based on Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-p-landing.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "test",
            backgroundClass: "survey-form",
            title: "Survey Form",
            language: "HTML, CSS",
            description: "Single page survey form. Based on Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-survey-form1.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "test",
            backgroundClass: "tribute",
            title: "Tribute to Mary Slessor",
            language: "CSS, JavaScript",
            description: "Tribute page of Mary Slessor (late). Based on Freecodecamp's Responsive Web Design Project.",
            note: "",
            url: "https://fcc-tribute-page-mary.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "freelance",
            backgroundClass: "tosdis",
            title: "Tosdis Web",
            language: "JavaScript",
            description: "Crypto currency project for staking, earning new tokens as rewards.",
            note: "",
            url: "https://tosdis.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "freelance",
            backgroundClass: "solrazr",
            title: "Solrazr Web",
            language: "JavaScript",
            description: "Solrazr is the first decentralized developer ecosystem for Solana.",
            note: "",
            url: "https://solrazr1.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "freelance",
            backgroundClass: "multichain",
            title: "Multichain Web",
            language: "JavaScript",
            description: "Crypto currency project that helps user connect multiple wallets.",
            note: "",
            url: "",
            hiddenClass: ""
        },
        {
            id: "freelance",
            backgroundClass: "pocket-arena",
            title: "Pocket Arena Web",
            language: "CSS, JavaScript",
            description: "Play-To-Earn based NFT DApp games portal platform.",
            note: "",
            url: "https://pocket-arena.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "freelance",
            backgroundClass: "walletconnect",
            title: "WalletConnect Web",
            language: "CSS, JavaScript",
            description: "Crypto currency project that helps user connect multiple wallets.",
            note: "",
            url: "https://walletconnect1.netlify.app/",
            hiddenClass: "hidden"
        },
        {
            id: "challenge",
            backgroundClass: "weather-vue",
            title: "Weather App",
            language: "Vuejs",
            description: "Weather application made with Vue js. My first Vue Progressive Web Application (PWA).",
            note: "",
            url: "https://weather-check-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "challenge",
            backgroundClass: "quiz-vue",
            title: "Quiz App",
            language: "Vuejs",
            description: "Quiz progressive web application (PWA) to improve my Vuejs coding skills",
            note: "",
            url: "https://weather-check-vue.netlify.app/",
            hiddenClass: ""
        },
        {
            id: "challenge",
            backgroundClass: "weight-conv",
            title: "Weight Converter",
            language: "JavaScript",
            description: "Metrics conversion application which accepts user's metric value input and returns the result in grams, kilograms and ounce.",
            note: "",
            url: "https://weight-conv.netlify.app/",
            hiddenClass: ""
        },
    ]

    let id = "company";

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