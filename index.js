const menu_button = document.getElementById('menu_button')
const main_div = document.getElementById('main')
const top_line = document.getElementById('top_line')
const div_menu = document.getElementById('div_menu')
const cancel_button = document.getElementById('cancel_button')

function change_theme(){
    if(main_div.style.display == 'block'){
        main_div.style.display = 'none'
        div_menu.style.display = 'block'
    }else{
        main_div.style.display = 'block'
        div_menu.style.display = 'none'
    }
}
