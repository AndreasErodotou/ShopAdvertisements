export class Advertisement{
  public id?: number;
  public title?: string;
  public description?: string;
  public category?: string;
  public expiryDate?: Date;
  public couponCode?: string;
  public isCouponCodeNeeded?: boolean;
  public address?: string;
  public locationURL?: string;
  public pictureURL?: string;
  public showCode?: boolean

  constructor(data: Advertisement){
    Object.assign(this, data);
  }
}