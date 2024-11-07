import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  
  isShownProp = false;
  randomMsg = "random-red"
  numbers = [1,2,3,4,5,6,7];
  
  toggleModal(event: Event): void {
    // console.log({event});
    this.isShownProp = !this.isShownProp;
    this.randomMsg =  this.isShownProp ? "random-green" : "random-red"
  }
  
  hideModal() {
    this.isShownProp = false;
  }

  onOutputActivate(ev: boolean): void {
    console.log("Output activated!", ev);
    
  }

}
