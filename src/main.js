import './style.css'
import html2canvas from 'html2canvas';

document.addEventListener('DOMContentLoaded', function () {

  html2canvas(document.querySelector(".gradbox-container")).then(canvas => {
    document.body.appendChild(canvas)
  });

  console.log("DOM fully loaded and parsed");
});