import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('800ms ease-in', style({ opacity: 1 })),
  ]),
]);

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate(
      '600ms ease-out',
      style({ transform: 'translateX(0)', opacity: 1 })
    ),
  ]),
]);
