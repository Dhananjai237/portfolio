document.querySelector('.close').style.display = 'none';
document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.close').style.display = 'inline';
    document.querySelector('#header hr').style.transform = `translateY(-213px)`;
    document.querySelector('nav').classList.add('nav');
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.menu').style.display = 'inline';
    document.querySelector('#header hr').style.transform = `translateY(0px)`;
    document.querySelector('nav').classList.remove('nav');
})

const head = document.querySelector('#header');
const hom = document.querySelector('#home');
const abou = document.querySelector('#about');
const educat = document.querySelector('#education');
const front = document.querySelector('#technologies');
const tec = document.querySelector('#tech');
const exp = document.querySelector('#experience');
const project = document.querySelector('#projects');
const extr = document.querySelector('#extra');

const links = document.querySelectorAll('nav a');
for (let link of links) {
    link.addEventListener('click', () => {
        target = document.querySelector(link.getAttribute('go'));
        window.scrollTo({
            top: target.offsetTop - head.clientHeight,
            behavior: 'smooth'
        });
    });
};

document.querySelector('#home button').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1YEsEnuB8EawZG6c6WReQ_uvcDAFTiKys/view?usp=drivesdk");
});

document.querySelector('#footer button').addEventListener('click', () => {
    window.scrollTo({
        top: hom.offsetTop - head.clientHeight,
        behavior: 'smooth',
    });
});

const span1 = 'Front End Web Developer';
// const span2 = 'Python Developer';
const spanTag = document.querySelector('span');
let i = 0;
let j;
function forward(span) {
    j = span.length;
    forwarding(span);
};
function forwarding(span) {
    if (i < span.length) {
        spanTag.textContent += span[i];
        i++;
        setTimeout(() => {
            forwarding(span);
        }, 150)
    }
    else {
        backward();
    }
};
function backward() {
    if (i > 0) {
        spanTag.textContent = spanTag.textContent.slice(0, -1);
        i--;
        setTimeout(() => {
            backward();
        }, 100)
    }
    else {
        // j ==23?forward(span2):forward(span1);
        forward(span1);
    }
};
setTimeout(() => {
    forward(span1);
}, 1500);

const options = {
    root: null,
    threshold: 0.2,
};
function home(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#home div').style.transform = 'translateX(0px)';
        document.querySelector('#home img').style.transform = 'translateX(0px)';
        document.querySelector('a[go="#home"]').classList.add('active');
        setTimeout(() => {
            setInterval(() => {
                document.querySelector('img').classList.add('img');
            }, 1000);
            setInterval(() => {
                document.querySelector('img').classList.remove('img');
            }, 2000);
        }, 500);
    }
    else {
        document.querySelector('a[go="#home"]').classList.remove('active');
    }
};
const homeIntersection = new IntersectionObserver(home, options);
homeIntersection.observe(hom);

function about(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#about img').style.transform = 'translateX(0px)';
        document.querySelector('#about div').style.transform = 'translateX(0px)';
        document.querySelector('a[go="#about"]').classList.add('active');
    }
    else {
        document.querySelector('a[go="#about"]').classList.remove('active');
    }
};
const aboutIntersection = new IntersectionObserver(about, options);
aboutIntersection.observe(abou);

function education(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#education h2').style.transform = 'translateY(0px)';
        document.querySelector('#education h2').style.opacity = 1;
        document.querySelector('#education div').style.transform = 'translateY(-150px)';
        document.querySelector('#education div').style.opacity = 1;
        document.querySelector('a[go="#education"]').classList.add('active');
    }
    else {
        document.querySelector('a[go="#education"]').classList.remove('active');
    }
};
const educationIntersection = new IntersectionObserver(education, options);
educationIntersection.observe(educat);

function technologies(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#technologies h2').style.transform = 'translateY(0px)';
        document.querySelector('#technologies h2').style.opacity = 1;
        document.querySelector('#technologies h4').style.transform = 'translateY(0px)';
        document.querySelector('#technologies h4').style.opacity = 1;
        document.querySelector('#technologies hr').style.transform = 'translateY(0px)';
        document.querySelector('#technologies hr').style.opacity = 1;
        document.querySelector('#technologies div').style.transform = 'translateY(0px)';
        document.querySelector('#technologies div').style.opacity = 1;
        document.querySelector('a[go="#technologies"]').classList.add('active');
    }
    else {
        document.querySelector('a[go="#technologies"]').classList.remove('active');
    }
};
const technologiesIntersection = new IntersectionObserver(technologies, options);
technologiesIntersection.observe(front);

function tech(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#tech h4').style.transform = 'translateY(0px)';
        document.querySelector('#tech h4').style.opacity = 1;
        document.querySelector('#tech hr').style.transform = 'translateY(0px)';
        document.querySelector('#tech hr').style.opacity = 1;
        document.querySelector('#tech div').style.transform = 'translateY(0px)';
        document.querySelector('#tech div').style.opacity = 1;
    }
};
const techIntersection = new IntersectionObserver(tech, options);
techIntersection.observe(tec);

function experience(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#experience h2').style.transform = 'translateY(0px)';
        document.querySelector('#experience h2').style.opacity = 1;
        document.querySelector('#experience h4').style.transform = 'translateY(0px)';
        document.querySelector('#experience h4').style.opacity = 1;
        document.querySelector('#experience hr').style.transform = 'translateY(0px)';
        document.querySelector('#experience hr').style.opacity = 1;
        document.querySelector('#experience div').style.transform = 'translateY(0px)';
        document.querySelector('#experience div').style.opacity = 1;
        document.querySelector('a[go="#experience"]').classList.add('active');
    }
    else {
        document.querySelector('a[go="#experience"]').classList.remove('active');
    }
};
const experienceIntersection = new IntersectionObserver(experience, options);
experienceIntersection.observe(exp);

const intern = document.querySelector('#internships');
function internships(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#internships h4').style.transform = 'translateY(0px)';
        document.querySelector('#internships h4').style.opacity = 1;
        document.querySelector('#internships hr').style.transform = 'translateY(0px)';
        document.querySelector('#internships hr').style.opacity = 1;
        document.querySelector('#internships div').style.transform = 'translateY(0px)';
        document.querySelector('#internships div').style.opacity = 1;
    }
};
const internshipsIntersection = new IntersectionObserver(internships, options);
internshipsIntersection.observe(intern);

function projects(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#projects h2').style.transform = 'translateY(0px)';
        document.querySelector('#projects h2').style.opacity = 1;
        document.querySelector('#projects div').style.transform = 'translateY(0px)';
        document.querySelector('#projects div').style.opacity = 1;
        document.querySelector('a[go="#projects"]').classList.add('active');
    }
    else {
        document.querySelector('a[go="#projects"]').classList.remove('active');
    }
};
const projectsIntersection = new IntersectionObserver(projects, options);
projectsIntersection.observe(project);

function extra(entries) {
    [entry] = entries;
    if (entry.isIntersecting == true) {
        document.querySelector('#extra').style.transform = 'translateY(0px)';
        document.querySelector('#extra').style.opacity = 1;
    }
};
const extraIntersection = new IntersectionObserver(extra, options);
extraIntersection.observe(extr);

const articles = document.querySelectorAll('#projects article');
for (let article of articles) {
    path = article.getAttribute('img');
    article.style.backgroundImage = `url("${path}")`;
    article.style.backgroundSize = '100% 100%';
    article.addEventListener('mouseover', () => {
        article.style.backgroundImage = 'url("")';
        article.classList.add('empty');
        article.style.backgroundColor = 'yellow';
        article.firstElementChild.style.transform = `translateY(-10px)`;
        article.firstElementChild.style.opacity = 1;
        article.firstElementChild.nextElementSibling.style.transform = `translateY(-5px)`;
        article.firstElementChild.nextElementSibling.style.opacity = 1;
        article.lastElementChild.style.opacity = 1;
    });
    article.addEventListener('mouseout', (event) => {
        event.target.closest('article').style.backgroundImage = `url("${event.target.closest('article').getAttribute('img')}")`;
    })
    article.addEventListener('mouseout', () => {
        article.style.backgroundColor = 'white';
        article.firstElementChild.style.transform = `translateY(200px)`;
        article.firstElementChild.style.opacity = 0;
        article.firstElementChild.nextElementSibling.style.transform = `translateY(120px)`;
        article.firstElementChild.nextElementSibling.style.opacity = 0;
        article.lastElementChild.style.opacity = 0;
    });
};