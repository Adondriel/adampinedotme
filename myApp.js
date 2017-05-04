var app = angular.module('myApp', [])
    .controller('myController', ['$scope', function ($scope) {
        $scope.projectList = {
            "mainProject": {
                "title": "Resource Planner",
                "desc": "An internal app used by the managers to track allocated hours of employees for different projects, along with reporting in order to help managers allocate resources and budget projects. I was first tasked with fixing a critical bug. Later on, I was tasked with adding new features, like a nice dashboard that shows stats, the user's managed projects, with links, and other helpful usability features for the managers to make the use of the site as intuitive and easy to use as possible. While working on this project, I also had to fork some Github repositories, and modify them to fit our needs, or fix errors that were not tested for by default. Our team won the Presidential Quality award for our work on Resource Planner! ResourcePlanner has now been accepted company wide."
            },
            "projects": [
			    {
                    "title": "Ecommerce Prototype Website",
                    "desc": "A group project that we were assigned, we decided to create an eCommerce website, with a functional rating system and admin login with product upload. This was built using Angular 1 and a PHP backend",
                    "img": "assets/images/ecommerce.png",
                    "links": [
                        {
                            "url": "http://ecommerce.adampine.me",
                            "urlWords": "Vist eCommerce"
                        }
                    ]
				},
                {
                    "title": "Above & Beyond English Setter Rescue",
                    "desc": "I worked on setting up the website so that the organization members can easily add and manage the dogs that they have up for adoption. We just went live with the site and within a month we had all but one dog that was pending adoption!",
                    "img": "assets/images/projects/esrescue.png",
                    "links": [
                        {
                            "url": "http://esrescue.org",
                            "urlWords": "Vist ESRescue"
                        }
                    ]
				},
                {
                    "title": "WV Grants",
                    "summary": "This is a web application that allows users to apply for a grant in West Virginia.",
                    "img": "assets/images/projects/wvgrants.png",
                    "desc": "I was put on this project later in the summer. One of the changes I made is the big Red errors that you may see on the login page. I also added a new page that prompts you to accknowledge the dates that applications are available. I learned how to use Stored Procedures, how to add a new one to a VS project, I am currently working on the new subscription service that the client wants added.",
                    "links": [
                        {
                            "url": "http://dohgrants.wv.gov/Account/LogOn",
                            "urlWords": "Visit West Virginia Grants"
                        }
                    ]

				},
                {
                    "title": "Hanover County Public Crime Data Access",
                    "img": "assets/images/projects/hanovercounty.jpg",
                    "desc": "I made modifications to the existing site, which include: Changing the navbar, adding the beat and patrol zone labels to each section, and fixing a bug that arose out of having the search bar in the navbar.",
                    "links": [
                        {
                            "url": "http://www.hanovercountygis.org/sheriff/",
                            "urlWords": "Vist Hanover County Sherrif's site"
                        }
                    ]

				},
                {
                    "title": "CubicPvP",
                    "summary": "An Assassin's Creed based Minecraft Server",
                    "img": "assets/images/projects/mcserver.png",
                    "desc": "This is my longest lasting project so far, and I still work on it in my free time. The server required me to create custom plugins, and to make sure that the gameplay and economy were balanced.",
                    "links": [
                        {
                            "url": "http://cubicpvp.net",
                            "urlWords": "Vist the project site"
                        }
                    ]
				},
                {
                    "title": "Integrated Time Off Project",
                    "desc": "While I was in Vo-Tech for Computer Information Systems, every Friday was ITO day, which stood for Integrated Time Off. My friend jordan and I decided to make a custom website, and along with that make a game using a program called Construct 2. The first version of our website, was really bad because we decided to use images as buttons, so it took forever to load. Eventually we figured out how CSS and html5 actually works, and we made the site that we have now. With the help of Isaac from advertising art & design, our game came out even better than we had hoped!",
                    "img": "assets/images/projects/itoproj.png",
                    "links": [
                        {
                            "url": "/portfolio/ito",
                            "urlWords": "Vist our finished site",
                        },
                        {
                            "url": "/portfolio/ito/oldsite",
                            "urlWords": "Vist our early development site"
                        }
                    ]
                }]
        }

}])
    .config([
    '$compileProvider',
    function ($compileProvider)
        {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|mumble):/);
            // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);