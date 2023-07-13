let counter = 0
let trans = null
let a = 0

function showhide(id){
    document.getElementById(id).classList.toggle('opacity-0')
    document.getElementById(id).classList.toggle('opacity-1')
}

function parigraph(me,id,parigraph,parigraph2){
    document.getElementById(id).classList.add('text-white')
    document.getElementById(id).classList.remove('bg-white')
    document.getElementById(me).classList.remove('text-white')
    document.getElementById(me).classList.add('bg-white')
    document.getElementById(parigraph).classList.remove('hidden')
    document.getElementById(parigraph2).classList.add('hidden')
}

function video(id){
    document.getElementById(id).classList.toggle('hidden')
    document.getElementById('body').classList.toggle('overflow-hidden')
}


function slider(){
    if(counter === -50.00001) {return}
    if(a === 0){
        counter = -16.66667
        trans = "translateX("+counter+"%)"
        document.getElementById('forslider').style.transform = trans ;
    }
    else{
        counter -= 16.66667
        trans = "translateX("+counter+"%)"
        document.getElementById('forslider').style.transform = trans ;
    }
    a += 1
}

function slider1(){
    if(a === 0) {return}
    if(a === 0){
        counter = 16.66667
        trans = "translateX("+counter+"%)"
        document.getElementById('forslider').style.transform = trans ;
    }
    else{
        counter += 16.66667
        trans = "translateX("+counter+"%)"
        document.getElementById('forslider').style.transform = trans ;
    }
    a -= 1
}

function parig(id,one,two,three,four,pari,on,tw,thre,fou){
    document.getElementById(one).classList.remove('bg-Mine-orange')
    document.getElementById(two).classList.remove('bg-Mine-orange')
    document.getElementById(three).classList.remove('bg-Mine-orange')
    document.getElementById(four).classList.remove('bg-Mine-orange')
    document.getElementById(one).classList.add('bg-white')
    document.getElementById(two).classList.add('bg-white')
    document.getElementById(three).classList.add('bg-white')
    document.getElementById(four).classList.add('bg-white')
    document.getElementById(id).classList.remove('bg-white')
    document.getElementById(id).classList.add('bg-Mine-orange')
    document.getElementById(pari).classList.remove('hidden')
    document.getElementById(on).classList.add('hidden')
    document.getElementById(tw).classList.add('hidden')
    document.getElementById(thre).classList.add('hidden')
    document.getElementById(fou).classList.add('hidden')
}

function faq(id,dd){
    document.getElementById(dd).classList.toggle('rotate-[225deg]')
    document.getElementById(id).classList.toggle('hidden')
}

function fornav(){
    document.getElementById('mobnav').classList.toggle('hidden')
    document.getElementById('one').classList.toggle('rota1')
    document.getElementById('two').classList.toggle('rota2')
    document.getElementById('toclose').classList.toggle('hidden')
}

function cart(){
    document.querySelector('#Cart').classList.toggle('hidden')
    document.querySelector('body').classList.toggle('overflow-hidden')
    document.querySelector('.cartanim').classList.toggle('hidden')
}