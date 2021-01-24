import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  isDarkmode = localStorage.getItem('darkMode') == 'true';
  html = document.querySelector("html") as HTMLElement;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        (document.querySelector(".curtain") as HTMLElement).classList.remove('active');
      }
      if (val instanceof NavigationEnd) {
        (document.querySelector(".curtain") as HTMLElement).classList.add('active');
      }
    })

    if (this.isDarkmode) {
      this.html.setAttribute('data-theme', 'dark');
    } else {
      this.html.setAttribute('data-theme', 'light');
    }
  }
  toggleTheme(xmode) {
    if (xmode) {
      this.html.setAttribute('data-theme', 'dark');
      localStorage.setItem("darkMode", 'true');
    } else {
      this.html.setAttribute('data-theme', 'light');
      localStorage.setItem("darkMode", 'false');
    }
  }

  toggleMenu() {
    (document.querySelector(".menu-wrapper") as HTMLElement).classList.toggle('active');
    (document.querySelector(".navbar-nav__menu") as HTMLElement).classList.toggle('active');
  }

}
