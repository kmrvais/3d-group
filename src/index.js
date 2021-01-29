import '../src/fonts/OpenSans/stylesheet.css'
import '../src/fonts/SFPro/stylesheet.css'
import './components/import-jquery'
import './components/import-nanoscroller'
import "./style.sass"

import VideoSlider from './components/video-slider/video-slider';
import mobMenu from './components/mob-menu/mob-menu'

document.addEventListener("DOMContentLoaded", function(){
    VideoSlider()
    mobMenu()
});