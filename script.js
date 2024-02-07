function verify() { 
    var date = new Date() 
    var year = date.getFullYear()  
    var fyear = document.getElementById('txtyear') 
    var res = document.getElementById('res') 

    if (fyear.value.length == 0 || fyear.value > year) { 
        alert('Dado inválido, verifique e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - fyear.value
        var usersex = ''
        var img = document.createElement('img')
        img.setAttribute('id','picture')

        if (fsex[0].checked) {
            usersex = 'Men'
            if (age >= 0 && age < 10) {
               img.setAttribute('src', 'images/baby-boy.png')
            } else if (age < 21) {
                img.setAttribute('src', 'images/bart.png')
            } else if (age < 50) {
                img.setAttribute('src', 'images/homer.png')
            } else {
                img.setAttribute('src', 'images/sir.png')
            }
            
        } else {
            usersex = 'Woman'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'images/baby-girl.png')
             } else if (age < 21) {
                img.setAttribute('src', 'images/lisa.png')
             } else if (age < 50) {
                img.setAttribute('src', 'images/marge-mom.png')
             } else {
                img.setAttribute('src', 'images/madam.png')
             }
        }
        res.innerHTML = `you are a ${age} year old ${usersex}`
        res.appendChild(img)
        res.style.display = "flex"; 
        res.style.flexDirection = "column"; 
        res.style.alignItems = "center";
        img.style.marginTop = "20px"
    }
}