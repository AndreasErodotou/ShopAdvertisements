import { Component } from '@angular/core';
import { Advertisement } from './core/models/advertisement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-advertisments';

  advertisements: Advertisement[] = [];

  ngOnInit() {
    this.advertisements = [
      new Advertisement({
        id: 1,
        address: 'Pekiougiou 14, 2323',
        category: 'Glasses',
        couponCode: '12345',
        title: 'Glasses - Over 50% Discount',
        description: 'Offer Applicable only for summer glasses',
        expiryDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 31),
        isCouponCodeNeeded: true,
        locationURL:
          'https://www.google.com/maps/place/Casa+di+Ottica+-+Christis+Tamasios/@35.1103961,33.3055094,17z/data=!3m1!4b1!4m6!3m5!1s0x14de19d3e3b0e6cd:0x11a3589a3d51454b!8m2!3d35.1103917!4d33.3080843!16s%2Fg%2F11b_2qh6g5?entry=ttu',
        pictureURL:
          'https://cdn.vectorstock.com/i/1000x1000/42/88/summer-sale-50-off-discount-banner-sunglasses-vector-32504288.webp',
        showCode: false,
      }),
      new Advertisement({
        id: 2,
        address: 'Agathokli 25, lakatamia, 2323',
        category: 'Watches',
        couponCode: '1234567',
        title: 'Watches - Over 50% Discount',
        description: 'Offer Applicable only for classic watches',
        expiryDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 31),
        isCouponCodeNeeded: true,
        locationURL:
          'https://www.google.com/maps/place/Time2Watch/@35.1181817,33.3112713,17z/data=!3m1!4b1!4m6!3m5!1s0x14de1bfa45c5b2d3:0x226249d30e07f035!8m2!3d35.1181773!4d33.3138462!16s%2Fg%2F11tcs28tr4?entry=ttu',
        pictureURL:
          'https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1640.jpg',
        showCode: false,
      }),
    ];
  }

  public redirectToPage(locationURL?: string) {
    if (!locationURL) {
      return;
    }

    window.open(locationURL, '_blank');
  }

  public showCode(advertisement: Advertisement) {
    advertisement.showCode = true;
  }
}
