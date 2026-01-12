let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let name = document.querySelector('#artist');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let timer;
let autoplay=1;
let index = 0;
let playing_song = false;
let track = document.createElement('audio');
let All_song = [
    {
        name : "Kadhale-Kadhale",
        path : "music/Kadhale-Kadhale.mp3",
        img : "img/download.jpg",
        artist : 'Shankar Mahadevan , Padmalatha'
    },
    {
        name : "Angnyaade ",
        path : "music/Angnyaade (PenduJatt.Com.Se).mp3",
        img : "img/Raja-Rani.jpg",
        artist : 'Shakthisree Gopalan'
    },
    {
        name : "Nila-Nee-Vaanam",
        path : "music/Nila-Nee-Vaanam-MassTamilan.fm.mp3",
        img : "img/images (1).jpg",
        artist : 'Vijay Yesudas , Chinmayi'
    },
];

function load_track(index){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index].path;
    title.innerHTML = All_song[index].name;
    track_image.src = All_song[index].img;
    artist.innerHTML = All_song[index].artist;
    timer = setInterval(range_slider,1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index + 1;
}
load_track(index);
function justplay(){
    if(playing_song == false){
         playsong();
    }
    else{
        pausesong();
    }
}
function reset_slider(){
    slider.value = 0;
}
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>'
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>'
}
function next_song(){
    if(index<All_song.length -1){
        index +=1;
        load_track(index);
        playsong();
    }
    else{
        index = 0;
        load_track(index);
        playsong();
    }
}
function previous_song(){
    if(index > 0){
        index -= 1;
        load_track(index);
        playsong();
    }
    else{
        index = All_song.length;
        load_track(index);
        playsong();
    }
}
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}