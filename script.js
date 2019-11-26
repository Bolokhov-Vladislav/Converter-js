
let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "current.json");
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                    if(request.status == 200) {
                        resolve(this.response);
                    }
                    else {
                        reject();
                    }
                }
            };
        });
    }

    catchData()
            .then(response => {
                let data = JSON.parse(response);
                inputUsd.value = inputUah.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то пошло не так");
});

inputUsd.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "current.json");
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                    if(request.status == 200) {
                        resolve(this.response);
                    }
                    else {
                        reject();
                    }
                }
            };
        });
    }

    catchData()
            .then(response => {
                let data = JSON.parse(response);
                inputUah.value = inputUsd.value * data.usd;
            })
            .catch(() => inputUah.value = "Что-то пошло не так");
});
