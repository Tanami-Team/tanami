import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import  AOS from 'aos';
import { ViewportScroller } from '@angular/common'; // ⭐ استورد ViewportScroller
import { filter } from 'rxjs/operators'; // ⭐ استورد filter عشان تشتغل أنظف


@Component({
  selector: 'app-root',

  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tanami';
  showNavbarAndFooter = true;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showNavbarAndFooter = !this.router.url.includes('Auth');
        }
      });
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // animate only once
      easing: 'ease-in-out',
    });
  }
}
