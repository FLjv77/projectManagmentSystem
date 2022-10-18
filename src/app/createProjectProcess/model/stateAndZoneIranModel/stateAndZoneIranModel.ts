export class StateAndZoneIranModel {
  stateName: string;
  zoneList: Array<string>;

  constructor(stateName: string, zoneList: string[]) {
    this.stateName = stateName;
    this.zoneList = zoneList;
  }
}
