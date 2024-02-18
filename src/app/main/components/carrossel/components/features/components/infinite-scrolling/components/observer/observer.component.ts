import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {

  constructor(
    private elementRef: ElementRef
  ) {  }

  private page = 0;
  @Output() pageEmiter = new EventEmitter<number>();
  @Input() addPageToList = (page: number) => {};
  
  async intersectionTrigger(entries: IntersectionObserverEntry[]): Promise<void> {
    if (entries[0].isIntersecting) {
      this.page++
      this.pageEmiter.emit(this.page)
    }
  }

  async ngOnInit(): Promise<void> {
    const observer = new IntersectionObserver(this.intersectionTrigger.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    })

    observer.observe(this.elementRef.nativeElement)
  }

}
