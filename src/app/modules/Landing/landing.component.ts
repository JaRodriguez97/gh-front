import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  selectedItem: number | null = null;
  activeClassHeader: Boolean = false;
  activeClassNav: Boolean = false;
  hidden = false;

  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  constructor(private render: Renderer2, private router: Router) {}

  ngOnInit() {}

  @HostListener('window:scroll')
  scrolling(): void {
    if (window.scrollY > 0)
      this.render.addClass(this.header.nativeElement, 'sticky');
    else this.render.removeClass(this.header.nativeElement, 'sticky');
  }

  toogleMenu() {
    this.menuToggle?.nativeElement?.classList.toggle('active');
    this.menu?.nativeElement?.classList.toggle('active');
  }

  onItemClick(index: number) {
    this.selectedItem = index;
    this.addClass();
  }

  addClass() {
    this.activeClassNav = !this.activeClassNav;
  }
}
