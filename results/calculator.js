function add(a, b) {
    c = a + b;
    return c;
}


function onAddButtonClick() {
    valueA = Number(document.getElementById('a').value);
    valueB = Number(document.getElementById('b').value);
    c = add(valueA, valueB);
    document.getElementById('result').innerHTML = c;
}
