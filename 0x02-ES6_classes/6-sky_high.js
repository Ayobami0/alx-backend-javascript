import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    this._sqft = sqft;
    this._floor = floor;
  }

  get sqft() {
    return this._sqft;
  }

  get floor() {
    return this._floor;
  }

  set sqft(val) {
    this._sqft = val;
  }

  set floor(val) {
    this._floor = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors.`;
  }
}
