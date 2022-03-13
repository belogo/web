var count = 0;


var countContainer = document.getElementById('counter');


function incrementCounter()
{
    count = count + 1;
    countContainer.innerText = count;
}


function decrementCounter()
{
    count = count - 1;
    countContainer.innerText = count;
}


var addBtn = document.getElementById('inc');
addBtn.addEventListener('click', incrementCounter);


var decBtn = document.getElementById('dec');
decBtn.addEventListener('click', decrementCounter);

