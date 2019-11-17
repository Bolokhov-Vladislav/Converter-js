let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};
console.log(JSON.stringify(options));// send to server
console.log(JSON.parse(JSON.stringify(options)));
///////////////////////////////////////////////////////

let inpitUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inpitUah.addEventListener('input', ()=> {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login. pass);

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'aplicationo/json; charset=utf-8');
    request.send();

    //методы запроса
    //status 
    //statusText
    //responseText / response
    //readyState (4 - done)

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);// response - это все данные полученные с сервера

            inputUsd.value = inpitUah.value / data.usd;
        } else {
            inputUsd.value = "error";
        }
    });
});
