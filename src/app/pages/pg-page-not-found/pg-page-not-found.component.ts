import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-page-not-found',
  templateUrl: './pg-page-not-found.component.html',
  styleUrls: ['./pg-page-not-found.component.scss']
})
export class PgPageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const viewereye = document.querySelector('.viewer__eye') as HTMLElement;
    const viewerhead = document.querySelector('.viewer__head') as HTMLElement;
    const alertzone = document.querySelector('.alert-zone') as HTMLElement;

    const deviceType = navigator.userAgent;
    const isMobile = /Mobile|mobile/i.test(deviceType);
    function stalking(event) {
      if (isMobile) {
        viewerhead.classList.add('viewer--stalking')
      }
      const posX = (((isMobile ? event.changedTouches[0].clientX : event.clientX) / document.body.clientWidth) * 9 - 4) * 1;
      const posY = (((isMobile ? event.changedTouches[0].clientY : event.clientY) / document.body.clientHeight) * 4 - 2) * 2;
      viewereye.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    if (isMobile) {
      window.addEventListener('touchmove', stalking);
      window.addEventListener('touchstart', stalking);
      window.addEventListener('touchend', (event) => {
        viewereye.style.transform = `translate(${0}px, ${0}px)`;
        viewerhead.classList.remove('viewer--stalking')
      });
    }
    else {
      window.addEventListener('mousemove', stalking);
      alertzone.addEventListener('mouseover', (event) => {
        viewerhead.classList.add('viewer--stalking')
      })
      alertzone.addEventListener('mouseleave', (event) => {
        viewerhead.classList.remove('viewer--stalking')
      })
    }
  }

}
