const inputEl = document.getElementsByName('rating')
const submit = document.getElementById('submit')

submit.addEventListener("click", e => {
    e.preventDefault();

    let rating = getRating();
    if (rating >= 1){
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="thanks-page">
                <img class="mobile" src="./images/illustration-thank-you.SVG" alt="" srcset="">
                <p class="orange-txt">You selected<span class="value"> ${rating}</span> out of 5</p>
                <h1>Thank you! </h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch!</p>
            </div>
        `;
        container.style.padding = "1.5rem"
    } else {
        submit.innerHTML = "Please select a rating"
    }
})

function getRating(){
    for(let rate of inputEl){
        if(rate.checked){
            return rate.value
        }
    }
}