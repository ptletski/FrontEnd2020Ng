import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.scss']
})
export class FoodformComponent {

  @ViewChild('overlay', null) overlay: ElementRef;

  constructor() { }

  handleClick(event: Event) {
    const overlayElement = this.overlay.nativeElement;
    const animateOverlayStyle = 'animate-overlay';

    overlayElement.style.display = 'grid';
    overlayElement.classList.add(animateOverlayStyle);

    window.setTimeout(() => {
        overlayElement.style.display = 'none';
        overlayElement.classList.remove(animateOverlayStyle);
    }, 3100);
  }
}
