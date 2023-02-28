import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.closeMenuByPhoneMode();
  }

  toggleHamburgerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen && window.innerWidth < 881) {
      this.renderer.addClass(document.body, 'stop-scrolling');
    } else {
      this.renderer.removeClass(document.body, 'stop-scrolling');
    }
  }

  closeMenuByPhoneMode(): void {
    const links = document.querySelectorAll('.header__links a');
    links.forEach((link) => {
      this.renderer.listen(link, 'click', () => {
        this.toggleHamburgerMenu();
      });
    });
  }
}
