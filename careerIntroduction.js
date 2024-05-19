class CareerIntroduction {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  displayInfo() {
    console.log(this.name + ": " + this.description);
  }
}