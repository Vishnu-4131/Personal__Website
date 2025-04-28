let open_btn=document.getElementById('o_btn')
let close_btn=document.getElementById('x_btn')
let drop_dwn=document.getElementById('drop_dwn')
open_btn.addEventListener('click',()=>{
    drop_dwn.style.overflow="visible"
    open_btn.style.display="none"
    x_btn.style.display="block"
    drop_dwn.style.height="320px"
   
})
close_btn.addEventListener('click',()=>{
    drop_dwn.style.overflow="hidden"
   
    drop_dwn.style.height=0
    o_btn.style.display="block"
    x_btn.style.display="none"
})  
 // Star rating logic
 function setupStars(starContainerId, inputId) {
    const stars = document.querySelectorAll(`#${starContainerId} i`);
    const hiddenInput = document.getElementById(inputId);

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            hiddenInput.value = rating;

            stars.forEach(s => {
                if (s.getAttribute('data-value') <= rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
}

// Setup for each rating group
setupStars('design-stars', 'design');
setupStars('content-stars', 'content');
setupStars('mobile-stars', 'mobile');
setupStars('clarity-stars', 'clarity');

// Validate individual field function
function validateField(id, errorMessage) {
    const inputElement = document.getElementById(id);
    const errorDiv = document.getElementById(`error-${id}`);
    const value = inputElement.value.trim();

    if (value === '') {
        inputElement.classList.add('error');
        inputElement.classList.remove('success');
        errorDiv.textContent = errorMessage;
        return false;
    } else {
        inputElement.classList.add('success');
        inputElement.classList.remove('error');
        errorDiv.textContent = '';
        return true;
    }
}

// Validate the whole form
function validateForm(event) {
    let isValid = true;

    // Validate fields
    isValid &= validateField('name', 'Name is required.');
    isValid &= validateField('ageGroup', 'Age group is required.');
    isValid &= validateField('occupation', 'Occupation is required.');
    isValid &= validateField('findWebsite', 'How did you find the website? is required.');
    isValid &= validateField('purpose', 'Purpose of visit is required.');
    isValid &= validateField('frequency', 'Frequency of visits is required.');
    isValid &= validateField('navigationEase', 'Navigation ease is required.');
    isValid &= validateField('pageSpeed', 'Page speed experience is required.');
    isValid &= validateField('findWhat', 'Did you find what you were looking for? is required.');
    isValid &= validateField('likedFeature', 'Liked feature is required.');
    isValid &= validateField('improveFeature', 'Improvement suggestion is required.');
    isValid &= validateField('bugsIssues', 'Any bugs/issues is required.');
    isValid &= validateField('comments', 'Additional comments are required.');

    // If not valid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
}

// Attach form validation on submit
const form = document.getElementById('feedbackForm');
form.addEventListener('submit', validateForm);