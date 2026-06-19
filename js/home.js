// Getting Single_Card width+Margin(Left+Right)
function getCardWidth(card) {
    let defaultStyle = window.getComputedStyle(card);
    let ml = parseInt(defaultStyle.getPropertyValue("margin-left"));
    let mr = parseInt(defaultStyle.getPropertyValue("margin-right"));
    let w = card.clientWidth;

    return w+ml+mr;
}

// Card translate to left value
function getCardTranslateToLeftValue(card) {
    return "-"+getCardWidth(card)+"px";
}

// Card translate from right value
function getCardTranslateFromRightValue(card) {
    return getCardWidth(card)+"px";
}

function slideAnim(cards_view) {
    let cards_StopDelay_TimeoutId = null;
    let cards_DeleteDelay_TimeoutId = null;
    let isFirstTimeAnim = true;

    // Animation Speed can Manage here
    const default_Stop_DelayTime = 1200; // milliseconds format
    const onClick_Stop_DelayTime = 100; // milliseconds format
    const default_AfterDelete_DelayTime = 200; // milliseconds format
    const onClick_AfterDelete_DelayTime = 30; // milliseconds format
    const firstCard_StartSlide_DelayTime = 100; // milliseconds format
    const firstCard_TransitionValue = "left 0.5s cubic-bezier(0, 0.82, 0.9, 1), opacity 0.6s ease-out";
    const zero_TransitionDuration = "0s";
    const default_TransitionDuration = ""; // Here "" means default value in css file
    const onClick_TransitionDuration = "0.2s";

    let cards = cards_view.getElementsByClassName("cards-list")[0];
    const cardTranslateToLeftValue = getCardTranslateToLeftValue(cards.children[0]);
    const cardTranslateFromRightValue = getCardTranslateFromRightValue(cards.children[0]);
    
    function startingCardPosition() {
        // Placing First Card in second_place first
        cards.style.transitionDuration = zero_TransitionDuration;
        cards.style.left = cardTranslateFromRightValue;
        cards.style.opacity = "0";
    }

    // Start from First_Card Sliding_Left from Second_Place
    function startCardsSlidingLeft() {
        isFirstTimeAnim = false;

        // stopCardsSliding(); now

        // Sliding First_Card to first_place
        setTimeout(()=>{
            cards.style.transition = firstCard_TransitionValue;
            cards.style.left = "0px";
            cards.style.opacity = "1";

            // then start infinite sliding from First Card
            cards_StopDelay_TimeoutId = setTimeout(()=>{
				cards.style.transition = ""; // setting to default Transition value in css file
            }, 600);

            if(!isSlidingStopped())
                slideLeft(false);
        }, firstCard_StartSlide_DelayTime); // First_Card slide to first_place Delay_Time (milliseconds)
    }

    // Cards Default Sliding Left
    function slideLeft(isClicked) {
        let stop_DelayTime = isClicked?onClick_Stop_DelayTime:default_Stop_DelayTime;
        let delete_DelayTime = isClicked?onClick_AfterDelete_DelayTime:default_AfterDelete_DelayTime;
        let transitionDuration = isClicked?onClick_TransitionDuration:default_TransitionDuration;

        cards_StopDelay_TimeoutId = setTimeout(()=>{
            // if cards left=-SingleCard_Size, then remove First_Card and add as Last_Card
            if(cards.style.left == cardTranslateToLeftValue) {
                let firstChildCard = cards.children[0];

                cards.removeChild(firstChildCard);

                // While removing front card don't slide to left again
                cards.style.transitionDuration = zero_TransitionDuration;
                cards.style.left = "0px";

                cards.appendChild(firstChildCard);
            }

            // Give sometime to slide left for card smooth animation
            cards_DeleteDelay_TimeoutId = setTimeout(()=>{
                if(cards.style.left == "0px") {
                    // moving cards to i.e., left = 0 to -SingleCard_Size
                    cards.style.transitionDuration = transitionDuration;
                    cards.style.left = cardTranslateToLeftValue;
                }

                // Recursive calling for infinite animation
                if(!isSlidingStopped())
                    slideLeft(false);
            }, delete_DelayTime);
        }, stop_DelayTime);
    }

    // Sliding Right
    function slideRight() {
        // if Cards Left=0, 
        // then remove Last_Card from Cards front
        // then add Last_Card to Cards front
        if(cards.style.left == "0px") {
            let firstChildCard = cards.children[0];
            let lastChildCard = cards.children[cards.childElementCount-1];

            // While adding Last_Card to front don't slide to right again, so,
            cards.style.transitionDuration = zero_TransitionDuration;

            cards.removeChild(lastChildCard);
            cards.insertBefore(lastChildCard, firstChildCard);

            cards.style.left = cardTranslateToLeftValue;
        }

        // Give sometime to slide left for card smooth animation
        cards_DeleteDelay_TimeoutId = setTimeout(()=>{
            if(cards.style.left == cardTranslateToLeftValue) {
                // moving cards to right i.e., left = -SingleCard_Size to 0
                cards.style.transitionDuration = onClick_TransitionDuration;
                cards.style.left = "0px";
            }

            // Recursive calling for infinite animation
            if(!isSlidingStopped())
                slideLeft(false);
        }, onClick_AfterDelete_DelayTime);
    }

    function stopCardsSliding() {
        // Clearing recursive sliding animation
        if(cards_StopDelay_TimeoutId!=null) {
            clearTimeout(cards_StopDelay_TimeoutId);
            cards_StopDelay_TimeoutId = null;
        }
        if(cards_DeleteDelay_TimeoutId!=null) {
            clearTimeout(cards_DeleteDelay_TimeoutId);
            cards_DeleteDelay_TimeoutId = null;
        }
    }

    // Return true if sliding stopped
    function isSlidingStopped() {
        return (cards_StopDelay_TimeoutId==null) && (cards_DeleteDelay_TimeoutId==null);
    }

    if(cards.childElementCount > 0) {
        let left_nav_btn = document.getElementById("left-nav-btn-"+cards_view.id);
        let right_nav_btn = document.getElementById("right-nav-btn-"+cards_view.id);

        // Left Navigation Button => onClick Slide_Right to reveal next left card
        left_nav_btn.addEventListener("click", function (e) {  
            stopCardsSliding();
            // On click card need to slide left smooth, So passing parameter isClicked=true
            slideRight();
        });
        
        // Right Navigation Button => onClick Slide_Left to reveal next right card
        right_nav_btn.addEventListener("click", function (e) {  
            stopCardsSliding();
            slideLeft(true);
        });

        // On Cards MouseHover Stop sliding
        cards.addEventListener("mouseover", function (e) {   
            stopCardsSliding();
        });

        // Continue sliding on Cards MouseOut
        cards.addEventListener("mouseout", function (e) {
            stopCardsSliding();
            slideLeft(false);
        });

        startingCardPosition();

        // On Scrolling, if Cards visible on screen then start sliding animation
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio <= 0, the target(cards) is out of view
            // then stop sliding cards
            if (entries[0].intersectionRatio <= 0) {
                stopCardsSliding();
                return;
            }

            // If target(cards) is in view then start sliding them
            // if animation is first_time, then do starting box animation effect
            if(isFirstTimeAnim) {
                startCardsSlidingLeft();
            }
            // else continue with default sliding left animation
            else {
                stopCardsSliding();
                slideLeft(false);
            }
        }); 

        // Start observing target(cards)
        intersectionObserver.observe(cards_view);
    }
}

function startAnimations() {
    let cards_view_1 = document.getElementById("cards-view-1");
    slideAnim(cards_view_1);

    // Add animations for any list of cards here, like above format
}

window.onload = startAnimations;


$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
    }
})
$('.placed-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

// -------video-review--
$('.video-carousel').owlCarousel({
    items:1,
    autoplay:true,
    merge:true,
    loop:true,
    // videWidth:500,
    // videoHeight:500,
    margin:10,
    video:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
      
       
    }
})
// ---student reiews----
$('.reviews-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
    }
})