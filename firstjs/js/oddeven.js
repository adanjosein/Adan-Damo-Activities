function oddeven() {
    const num = document.getElementById('number').value;

    if (num % 2) {
        document.getElementById('message').innerHTML = "Odd";
    }
    else {
        document.getElementById('message').innerHTML = "Even";
    }

}