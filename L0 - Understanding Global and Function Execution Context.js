let age = 20;

function displayAge(){
    console.log(age)
    function changeAge(){
        age = 45
        console.log(age)
    }
    changeAge()
}

displayAge()