export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
