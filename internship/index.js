const springProjects = [
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
const springAtticProjects = [
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


const createElement = (elem, arrayElem) => elem.innerHTML = arrayElem.map(el => `  <div>
                <div>
                    <img src=${el.img} alt="project_logo">
                </div>
                <div>
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                </div>
            </div>`
).join("");


const springProjectEl = document.querySelector(".spring-projects");
createElement(springProjectEl, springProjects);


const springAtticProjectEl = document.querySelector(".spring-attic-projects>div");
createElement(springAtticProjectEl, springAtticProjects);


const input = document.querySelector(".place_for_search");
const searchButton = document.querySelector(".search-block button");

const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
};

const findElement = (e) => {
    e.preventDefault();
    let search = new RegExp(input.value, "i");
    const springProjectBlock = springProjects.filter(el => search.test(el.title));
    const springAtticProjectBlock = springAtticProjects.filter(el => search.test(el.title));
    if (springProjectBlock.length && springAtticProjectBlock.length) {
        createElement(springProjectEl, springProjectBlock);
        createElement(springAtticProjectEl, springAtticProjectBlock);
    } else {
        document.querySelectorAll('.spring-projects').forEach(el => el.innerHTML = "No results")
    }
    if (!springProjectBlock.length && springAtticProjectBlock.length) {
        createElement(springAtticProjectEl, springAtticProjectBlock);
        springProjectEl.innerHTML = "No results"
    }
    if (springProjectBlock.length && !springAtticProjectBlock.length) {
        createElement(springProjectEl, springProjectBlock);
        springAtticProjectEl.innerHTML = "No results"
    }
};

input.addEventListener("keyup", debounce(findElement, 500));
searchButton.addEventListener("click", findElement);
