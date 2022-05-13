/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  Gesture,
  GestureController,
  IonItem,
  ModalController,
} from '@ionic/angular';

@Component({
  selector: 'app-playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.scss'],
})
export class PlayquizComponent implements AfterViewInit {
  temp = [];
  airQ = [];
  humid = [];
  myArray = Array.from(Array(7).keys());
  contentScrollActive = true;

  gestureArray: Gesture[] = [];

  @ViewChild('dropzoneTemp') dropTemp: ElementRef;
  @ViewChild('dropzoneAQ') dropAQ: ElementRef;
  @ViewChild('dropzoneHumid') dropHumid: ElementRef;

  @ViewChildren(IonItem, { read: ElementRef }) items: QueryList<ElementRef>;

  constructor(
    private mdlCtrl: ModalController,
    private gestureCtrl: GestureController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  dismissModal() {
    this.mdlCtrl.dismiss();
  }

  ngAfterViewInit(): void {
    this.updateGestures();
  }

  updateGestures() {
    this.gestureArray.map((gesture) => gesture.destroy());
    this.gestureArray = [];

    const arr = this.items.toArray();
    for (let i = 0; i < arr.length; i++) {
      const oneItem = arr[i];
      const drag = this.gestureCtrl.create({
        el: oneItem.nativeElement,
        threshold: 1,
        gestureName: 'drag',
        onStart: (ev) => {
          oneItem.nativeElement.style.transition = '';
          oneItem.nativeElement.style.opacity = '0.8';
          oneItem.nativeElement.style.fontWeight = 'Bold';
          this.contentScrollActive = false;
          this.changeDetectorRef.detectChanges();
        },
        onMove: (ev) => {
          oneItem.nativeElement.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
          oneItem.nativeElement.style.zIndex = 11;
          this.checkOnDropZoneHover(ev.currentX, ev.currentY);
        },
        onEnd: (ev) => {
          this.contentScrollActive = true;
          this.handleDrop(oneItem, ev.currentX, ev.currentY, i);
        },
      });
      drag.enable();
      this.gestureArray.push(drag);
    }
    this.items.changes.subscribe((res) => {
      console.log('items changes: ', res);
      if (this.gestureArray.length !== this.items.length) {
        this.updateGestures();
      }
    });
  }
  // check if we are dragging above a drop zone
  checkOnDropZoneHover(x, y) {
    const dropTemp = this.dropTemp.nativeElement.getBoundingClientRect();
    const dropAQ = this.dropAQ.nativeElement.getBoundingClientRect();
    const dropHumid = this.dropHumid.nativeElement.getBoundingClientRect();

    if (this.isInZone(x, y, dropTemp)) {
      this.dropTemp.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.dropTemp.nativeElement.style.backgroundColor = 'white';
    }

    if (this.isInZone(x, y, dropAQ)) {
      this.dropAQ.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.dropAQ.nativeElement.style.backgroundColor = 'white';
    }

    if (this.isInZone(x, y, dropHumid)) {
      this.dropHumid.nativeElement.style.backgroundColor = 'green';
    } else {
      this.dropHumid.nativeElement.style.backgroundColor = 'white';
    }
  }
  // check if coordinates are withing a drop zone rect
  isInZone(x, y, dropzone) {
    if (x < dropzone.left || x >= dropzone.right) {
      return false;
    }
    if (y < dropzone.top || y >= dropzone.bottom) {
      return false;
    }
    return true;
  }

  // decide what to do with dropped item
  handleDrop(item, endX, endY, index) {
    const dropTemp = this.dropTemp.nativeElement.getBoundingClientRect();
    const dropAQ = this.dropAQ.nativeElement.getBoundingClientRect();
    const dropHumid = this.dropHumid.nativeElement.getBoundingClientRect();

    if (this.isInZone(endX, endY, dropTemp)) {
      // dropped in zone temp
      const removeItem = this.myArray.splice(index, 1);
      this.temp.push(removeItem[0]);
      item.nativeElement.remove();
    } else if (this.isInZone(endX, endY, dropAQ)) {
      // dropped in zone AQ
      const removeItem = this.myArray.splice(index, 1);
      this.airQ.push(removeItem[0]);
      item.nativeElement.remove();
    } else if (this.isInZone(endX, endY, dropHumid)) {
      // dropped in zone humid
      const removeItem = this.myArray.splice(index, 1);
      this.humid.push(removeItem[0]);
      item.nativeElement.remove();
    } else {
      // dont drop the item into the zone
      // simply bring it back to the initial position
      item.nativeElement.style.transition = '.2s ease-out';
      item.nativeElement.style.zIndex = 'Inherit';
      item.nativeElement.style.transform = `translate(0,0)`;
      item.nativeElement.style.opacity = '1';
      item.nativeElement.style.transition = 'normal';
    }
    this.dropTemp.nativeElement.style.backgroundColor = 'white';
    this.dropAQ.nativeElement.style.backgroundColor = 'white';
    this.dropHumid.nativeElement.style.backgroundColor = 'white';
    this.changeDetectorRef.detectChanges();
  }
}
