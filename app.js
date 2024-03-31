const onHoverNavBar = [
    {
        li: 'Platform',
        content: [
          ["Platform", 'Go beyond virtual meetings']
        ,['Content', 'Content is the backbone of your event']
        , ['Networking', 'Make it easy for attendees to connect']
        ,['Events Builder', 'Take charge of your Virtual Event']
        ]
    }, {
        li: 'Resources',
        content: [
            ['Case Studies', 'See all case studies']
            ,['Platform Security','Learn about our commitment to protect confidentiality and integrity of our customers data']
            ,['Blog', 'Stay ahead with market trends and learn out best practices']
        ]
    }, {
        li: 'Solutions',
        content: [
            ['Premium Webinars', 'Discover exclusive webinars with premium content and expert speakers'],
            ['Conference & Summits', 'Explore our lineup of industry-leading conferences and summits'],
            ['Hybrid Events', 'Experience the future of events with our innovative hybrid event solutions']
        ]
    }
];

let currentIndex = 0;
const slideInterval = 3000; 

const sliderItems = [
    {
        name: 'item1',
        img: 'https://banner2.cleanpng.com/20180425/yvw/kisspng-microsoft-logo-organization-san-francisco-cloud-co-partner-5ae00ee7a9b690.0311390615246333196952.jpg'
    }, {
        name: 'item2',
        img: 'https://upload.wikimedia.org/wikipedia/sco/thumb/e/e0/United_Airlines_Logo.svg/2560px-United_Airlines_Logo.svg.png'
    }, {
        name: 'item3',
        img: 'https://banner2.cleanpng.com/20180806/pzx/kisspng-logo-norwegian-air-shuttle-norway-direct-flight-ai-fly-5b6830ae4c6a21.812950671533554862313.jpg'
    }, {
        name: 'item4',
        img: 'https://banner2.cleanpng.com/20180809/pzj/kisspng-unilever-logo-company-brand-vector-graphics-lista-companii-pot-lucra-5b6cd73b1abb41.6926810915338596431095.jpg'
    }, {
        name: 'item5',
        img: 'https://i.pinimg.com/736x/a7/64/28/a76428e744bdc2422377dc23378c57c5.jpg'
    }
];

const allReviews = [
    {
        name: 'Cindy',
        img: 'https://images.pexels.com/photos/11929283/pexels-photo-11929283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        review: 'Delighted by the virtual event platform\'s versatility and adaptability. With its multi-faceted approach to content delivery and interactive features, it felt empowered to roam freely and discover new horizons.'
    },
    {
        name: 'Joe',
        img: 'https://images.pexels.com/photos/10182734/pexels-photo-10182734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        review: 'I was impressed by the agility and speed of the virtual event platform. With its sleek interface and swift navigation, it felt right at home, eagerly hunting down the latest sessions.'
    },
    {
        name: 'Sheila',
        img: 'https://images.pexels.com/photos/15159243/pexels-photo-15159243/free-photo-of-close-up-of-dinosaur-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        review: 'I found the virtual event platform to be a true defender of knowledge. With its robust security features against T-Rex and sturdy infrastructure, it felt safe to explore and engage in a variety of educational sessions.'
    }
]
// ----------------------------------------------------------------------------//
//------------------------------------dropdowns--------------------------------//

function addEventListenersToNavItems() {
    const leftListItems = document.getElementsByClassName('nav-bar-item left');
    for (let i = 0; i < leftListItems.length; i++) {
        leftListItems[i].addEventListener('mouseover', handleMouseOver);
    }
}

function handleMouseOver(event) {
    closeDropDown();

    const clickedItem = onHoverNavBar.find(item => item.li === event.target.id);
    // console.log(clickedItem);
    showDropDown(clickedItem);
}

function handleMouseLeave() {
    closeDropDown();
}

function showDropDown(clickedItem) {
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    let mainTag = document.querySelector('main');

    // Create and append HTML content for each item in clickedItem.content
    clickedItem.content.forEach(element => {
        const title = element[0];
        const info = element[1];

        const segment = document.createElement('div');
        segment.setAttribute('class', 'menu-segment');

        const titleElement = document.createElement('span');
        titleElement.setAttribute('class', 'segment-title');
        titleElement.innerHTML = title;

        const infoElement = document.createElement('span');
        infoElement.innerHTML = info;

        segment.appendChild(titleElement);
        segment.appendChild(infoElement);
        console.log(segment);
        overlay.appendChild(segment);
    });


    overlay.style.top = '0';
    overlay.style.paddingLeft = '5%';
    overlay.style.width = '100%';
    overlay.style.position = 'absolute';
    overlay.style.zIndex = '10';
    overlay.style.backgroundColor = 'white';
    overlay.style.display = 'flex';
    overlay.style.flexWrap = 'wrap';
    overlay.style.boxShadow = "-1px 10px 5px 0px rgba(204,200,204,0.3)";
    // overlay.style.height = '15vh';
    // overlay.style.border = 'solid lime';

    

    mainTag.prepend(overlay);
    overlay.addEventListener('mouseleave', handleMouseLeave);
}

function closeDropDown() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
}

// ----------------------------------------------------------------------------//
//--------------------------------------signup---------------------------------//
function addEventListenerSingUp() {
    const singUpButton = document.querySelector('#signup');
    singUpButton.addEventListener('click', displaySignUp);
}

function displaySignUp(event) {
    addBlur();
    addCloseButton('signup');
    const hiddenContainer = document.querySelector('.signup-container');
    
    // Get the computed display style
    let computedStyle = window.getComputedStyle(hiddenContainer).display;

    // Toggle the display style based on the current state
    if(computedStyle === 'none') {
        hiddenContainer.style.display = 'flex';
    } else {
        hiddenContainer.style.display = 'none';
    }
}

function handleCreateAccount(event) {
    event.preventDefault();

    let formInputs = document.forms["signup"].elements;

    // Loop through the form inputs to check for empty values
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === "") {
            // Alert the user about the invalid input
            alert(`Invalid ${formInputs[i].name}`);
            formInputs[i].focus();
            return false; 
        } else {
            alert('Account has been created!');
            clearForm('signup');
            closeOverlay('signup');
            return true;
        }
        
    }
    
}
// ----------------------------------------------------------------------------//
//--------------------------------------login---------------------------------//
function addEventListenerLogin() {
    const loginButton = document.querySelector('#login');
    loginButton.addEventListener('click', displayLogin);
}

function displayLogin(event) {
    addCloseButton('login');
    addBlur();
    console.log('inside display login');
    const hiddenContainer = document.querySelector('.login-container');
    
    // Get the computed display style
    let computedStyle = window.getComputedStyle(hiddenContainer).display;

    // Toggle the display style based on the current state
    if(computedStyle === 'none') {
        hiddenContainer.style.display = 'flex';
    } else {
        hiddenContainer.style.display = 'none';
    }
}

function submitLogin(event) {
    event.preventDefault();

    let formInputs = document.forms["login"].elements;

    // Loop through the form inputs to check for empty values
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === "") {
            // Alert the user about the invalid input
            alert(`Invalid ${formInputs[i].name}`);
            formInputs[i].focus();
            return false; 
        } else {
            alert('You have been logged in');
            closeOverlay('login');
            clearForm('login');
            return true;
        }
    }
    
}

// ----------------------------------------------------------------------------//
//----------------------------blur, overlay, close btn-------------------------//
function addBlur() {
    document.body.classList.add('blur');
}

function removeBlur() {
    console.log('inside removeblur')
    document.body.classList.remove('blur');
}

function closeOverlay(id) {
    removeBlur();
    console.log('inside closeoverlay');

    // Select login and signup containers
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');

    // Check if login container exists and is visible, then hide it
    if (id==='login') {
        loginContainer.style.display = 'none';
    }

    // Check if signup container exists and is visible, then hide it
    if (id==='signup') {
        signupContainer.style.display = 'none';
    }
    removeCloseButton();
}

function addCloseButton(id) {
    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'close-btn');
    closeButton.innerHTML = '&#10006;';
    document.body.appendChild(closeButton);
    closeButton.addEventListener('click', function() {
        closeOverlay(id);
    });
}

function removeCloseButton() {
    const closeButton = document.querySelector('.close-btn');
    document.body.removeChild(closeButton);
}

function clearForm(id) {
    document.forms[id].reset();
}
// ----------------------------------------------------------------------------//
//--------------------------------------listeners------------------------------//
addEventListenerLogin();
addEventListenersToNavItems();
addEventListenerSingUp();
populateSlider();
populateReviews();
populateFooter();
handleScheduleDemo();
// ----------------------------------------------------------------------------//
//---------------------------------------slider--------------------------------//
function populateSlider() {
    const sliderContainer = document.querySelector('.companies-slider-container');

    for(let item of sliderItems) {
        let slide = document.createElement('img');
        slide.setAttribute('class', 'slider-image');
        slide.src = item.img;
        sliderContainer.appendChild(slide);
    }

    setInterval(nextSlide, slideInterval);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slider-image');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}// ----------------------------------------------------------------------------//
//------------------------------------demo----------------------------------//
function handleScheduleDemo() {
    const button = document.querySelector('.schedule-demo');
    button.addEventListener('click', scheduleDemo);
}

function scheduleDemo(event) {
    alert('This service is coming soon!');
}
// ----------------------------------------------------------------------------//
//------------------------------------reviews----------------------------------//
function populateReviews() {
    const allReviewsContainer = document.querySelector('.all-reviews');

    for(let object of allReviews) {
        const reviewContainer = document.createElement('div');
        reviewContainer.setAttribute('class', 'review-container');

        const name = document.createElement('h4');
        name.innerHTML = object.name;
        name.setAttribute('class', 'review-name');

        const reviewerImg = document.createElement('img');
        reviewerImg.src = object.img;
        reviewerImg.setAttribute('class', 'review-image');
        
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'review-image-container');
        imgContainer.appendChild(reviewerImg);

        const review = document.createElement('div');
        review.innerHTML = object.review;
        review.setAttribute('class', 'review-review');

        reviewContainer.appendChild(imgContainer);
        reviewContainer.appendChild(name);
        reviewContainer.appendChild(review);

        allReviewsContainer.appendChild(reviewContainer);
    }
}

// ----------------------------------------------------------------------------//
//------------------------------------footer----------------------------------//
function populateFooter() {
    const footerContainer = document.querySelector('footer');

    //create template
    const columnTemplate = document.querySelector('#footer-template');

    for(let object of onHoverNavBar) {
        const footerColumn = columnTemplate.content.cloneNode(true);

        footerColumn.querySelector('.footer-title').textContent = object.li;

        let footerUl = footerColumn.querySelector('.footer-ul');

        for(let array of object.content) {
            const listItem = document.createElement('li');
            listItem.textContent = array[0];
            footerUl.appendChild(listItem);
        }

        footerContainer.appendChild(footerColumn);
        
    }
}
