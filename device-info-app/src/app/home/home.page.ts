import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Device } from '@capacitor/device'; // Import Device from @capacitor/device
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule],
})
export class HomePage {
  deviceInfo: any; // Correct the property name to deviceInfo

  constructor() {
    this.loadDeviceInfo(); // Fetch device info in the constructor
  }

  async loadDeviceInfo() {
    this.deviceInfo = await Device.getInfo(); // Fetch and store device info
  }

  getDeviceInfo() {
    this.loadDeviceInfo(); // Add this method to be called on button click
  }
}
