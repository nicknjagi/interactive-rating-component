const btn = document.querySelector('.btn');
const value = document.querySelector('.value');
const after = document.querySelector('#after');
const before = document.querySelector('#before');
const submit = document.getElementById('submit');
const error = document.querySelector('.error');

btn.addEventListener('click', function(e){
    let rating = e.target.getAttribute('id');

    if (rating < 6){
        value.innerText = " " + rating;
    }

    submit.addEventListener('click', function(e){
        e.preventDefault();
        
        if (rating  != ""){
            after.classList.remove('hidden');
            before.classList.add('hidden');
        } 
    });
});
