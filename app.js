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

function handleCreateAccount() {
    alert('Account has been created!');
}
// ----------------------------------------------------------------------------//
//--------------------------------------login---------------------------------//
function addEventListenerLogin() {
    const loginButton = document.querySelector('#login');
    loginButton.addEventListener('click', displayLogin);
}

function displayLogin(event) {
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

function submitLogin() {
    alert('You have been logged in');
}

// ----------------------------------------------------------------------------//
//---------------------------------blur and overlay----------------------------//
function addEventListenerBlur() {
    const blur = document.querySelector('.blur');
    if(blur) {
        blur.addEventListener('click', closeOverlay);
    }
    
}

function addBlur() {
    document.body.classList.add('blur');
    console.log(blur)
}

function removeBlur() {
    console.log('inside removeblur')
    document.body.classList.remove('blur');
}

function closeOverlay(event){
    removeBlur();
    console.log('inside closeoverlay')
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');

    let computedStyleLogin = window.getComputedStyle(loginContainer).display;
    let computedStyleSignup = window.getComputedStyle(signupContainer).display;

    if(computedStyleLogin === 'block') {
        loginContainer.style.display = 'none';
    }

    if(computedStyleSignup === 'block') {
        signupContainer.style.display = 'none';
    }


}

// ----------------------------------------------------------------------------//
//--------------------------------------listeners------------------------------//
addEventListenerLogin();
addEventListenersToNavItems();
addEventListenerSingUp();
addEventListenerBlur();