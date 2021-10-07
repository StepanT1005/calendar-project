export function manageClasses() {
    const li = document.querySelectorAll('li');
    li[0].classList.add('selected');
    li[1].classList.remove('selected');
    li[2].classList.toggle('three_done');
    if(li[3].classList.contains('some-class')){
        li[3].classList.add('another-class')
    }

}
