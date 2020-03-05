const spinProjects = [
    {
        img: "./image/spring-boot.svg",
        title: "Spring boot",
        body: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible"
    },
    {
        img: "./image/spring-framework.svg",
        title: "Spring framework",
        body: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
    },
    {
        img: "./image/spring-data.svg",
        title: "Spring data",
        body: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
        img: "./image/spring-cloud.svg",
        title: "Spring cloud",
        body: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
    }
];
const spinAtticProjects = [
    {
        img: "./image/logo-io-platform.png",
        title: "Spring IO Platform",
        body: "Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies."
    },
    {
        img: "./image/spring-ed.svg",
        title: "Spring Flex",
        body: "A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client."
    },
    {
        img: "./image/spring-ed.svg",
        title: "Spring integration Groovy DSL",
        body: "A Groovy based DSL for developing Spring Integration applications."
    },
    {
        img: "./image/spring-ed.svg",
        title: "Spring integration Scala DSL",
        body: "A Scala based DSL for developing Spring Integration applications."
    }
];


const spinProjectEl = document.querySelector(".spin-projects");
spinProjects.map(el => spinProjectEl.insertAdjacentHTML("afterbegin", `  <div>
                <div>
                    <img src=${el.img} alt="project_logo">
                </div>
                <div>
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                </div>
            </div>`));


const spinAtticProjectEl = document.querySelector(".spin-attic-projects>div");
spinAtticProjects.map(el => spinAtticProjectEl.insertAdjacentHTML("afterbegin", `  <div>
                <div>
                    <img src=${el.img} alt="attic_project_logo">
                </div>
                <div>
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                </div>
            </div>`));


const input = document.querySelector(".place_for_search");
const searchButton = document.querySelector(".search-block button");


const findElement = (e) => {
    e.preventDefault();
    const spinProjectBlock = spinProjects.filter(el => el.title === input.value);
    const spinAtticProjectBlock = spinAtticProjects.filter(el => el.title === input.value);
    if (spinProjectBlock.length) {
        spinProjectBlock.map((el => spinProjectEl.innerHTML = `<div>
                <div>
                    <img src=${el.img} alt="a11y">
                </div>
                <div>
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                </div>
            </div>`));
        spinAtticProjectEl.innerHTML = 'No results'
    } else if (spinAtticProjectBlock.length) {
        spinAtticProjectBlock.map((el => spinAtticProjectEl.innerHTML = `<div>
                <div>
                    <img src=${el.img} alt="a11y">
                </div>
                <div>
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                </div>
            </div>`));
        spinProjectEl.innerHTML = 'No results'
    } else {
        document.querySelectorAll('.spin-projects').forEach(el => el.innerHTML = "No results")
    }
};


searchButton.addEventListener("click", findElement);
