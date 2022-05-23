const params = new URLSearchParams(window.location.search)
console.log(params.get('name'))
document.getElementById('user-data').innerHTML = 
`<h3>Name: <span>${params.get('name')}</span></h3>\
<h3>Birthday: <span>${params.get('birthday')}</span></h3>`;