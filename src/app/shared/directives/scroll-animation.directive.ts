import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() trigger: string = 'fadeIn';
  @HostBinding('@fadeIn') fadeIn = false;
  @HostBinding('@slideIn') slideIn = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (this.trigger === 'fadeIn') this.fadeIn = true;
          else if (this.trigger === 'slideIn') this.slideIn = true;
          this.observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
