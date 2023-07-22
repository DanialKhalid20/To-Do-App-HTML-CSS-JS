


b1 = document.querySelector('.b1');
b2 = document.querySelector('.b2');
b3 = document.querySelector('.b3');

var addtask = document.querySelector('.addtask');
var pt = document.querySelector('.pendingtasks');
var ct = document.querySelector('.completedtasks');
var checkbox;

addtask.style.display = 'none';
pt.style.display = 'none';
ct.style.display = 'none';

b1.addEventListener('click', function () {
    pt.style.display = 'none';
    ct.style.display = 'none';
    addtask.style.display = 'block';

})

b2.addEventListener('click', function () {
    addtask.style.display = 'none';
    ct.style.display = 'none';
    pt.style.display = 'block';
})

b3.addEventListener('click', function () {
    addtask.style.display = 'none';
    pt.style.display = 'none';
    ct.style.display = 'block';
})

saveb = document.querySelector('#saveb');

saveb.addEventListener('click', function () {
    var title = document.querySelector('#title');
    var description = document.querySelector('#description');

    if (title.value == '' && description.value == '') {
        alert("Please enter the title and description first")
    }
    else if (title.value === '') {
        alert("Please enter the title first")
    }
    else if (description.value === '') {
        alert("Please enter the description first")
    }
    else {

        show_value_in_pt();
    }
})

function show_value_in_pt() {

    var new_div = document.createElement('div');
    new_div.style.height = '70px';
    new_div.style.backgroundColor = '#475b5a';
    new_div.className = 'checkbox-div';

    checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.style.marginTop = '4%';
    checkbox.style.marginRight = '3%';
    checkbox.style.accentColor = ' #5dbea3'
    checkbox.style.height = '20px'
    checkbox.style.width = '20px'
    checkbox.style.float = 'left'


    checkbox.addEventListener('change', function (e) {
        const checkbox = event.target;
        if (checkbox.checked) {
            let divToRemove = checkbox.closest('.checkbox-div');
            divToRemove.remove()
            ct.appendChild(divToRemove);
        
        }
        else if(checkbox.checked==false){
         divToRemove = checkbox.closest('.checkbox-div');
            divToRemove.remove()
            pt.appendChild(divToRemove);

        }
    })

    // checkbox.addEventListener('change', function (e) {
    //     const checkbox = event.target;
    //     if (checkbox.checked) {
    //         const divToRemove = checkbox.closest('.checkbox-div');

    //         divToRemove.remove();
    //     }
    // })



    var title_text = document.createElement('textarea');
    title_text.style.marginTop = '20px';
    title_text.style.width = '27%';
    title_text.style.height = '46px';
    title_text.style.resize = 'none';
    title_text.style.backgroundColor = '#475b5a'
    title_text.style.border = 'none'
    title_text.style.color = '#5dbea3'
    title_text.style.fontSize = '20px'

    title_text.innerText = title.value;


    var desc_text = document.createElement('textarea');
    desc_text.style.marginTop = '20px';
    desc_text.style.marginLeft = '2%';
    desc_text.style.marginRight = '3%';
    desc_text.style.height = '46px';
    desc_text.style.width = '55%';
    desc_text.style.resize = 'none';
    desc_text.style.backgroundColor = '#475b5a'
    desc_text.style.border = 'none'
    desc_text.style.color = '#5dbea3'
    desc_text.style.fontSize = '20px'

    desc_text.innerText = description.value



    var delete_icon = document.createElement('img');
    delete_icon.src = "delete_icon.png"
    delete_icon.style.height = '20px'
    delete_icon.style.width = '20px'
    delete_icon.style.marginBottom = '3%'
    delete_icon.style.marginleft = '5%'

    delete_icon.addEventListener('click',function(){
        let divToRemove = delete_icon.closest('.checkbox-div');
            divToRemove.remove()
    })



    new_div.appendChild(checkbox);
    new_div.appendChild(title_text);
    new_div.appendChild(desc_text);
    new_div.appendChild(delete_icon);

    var br = document.createElement('br');
    
    pt.appendChild(new_div);

   



}
