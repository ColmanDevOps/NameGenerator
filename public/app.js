const loadRandomName = (resultDiv, last) => {
    fetch('http://127.0.0.1:8080/random-name')
    .then(response => response.json())
    .then(result => {
        if(last){
        resultDiv.classList.add('alert','alert-success');
        resultDiv.innerHTML = `<h2>${result.first_name} ${result.last_name}</h2>`;
    }
    else
    {
        resultDiv.classList.add('alert','alert-success');
        resultDiv.innerHTML = `<h2>${result.first_name} </h2>`;
    }
    });
};