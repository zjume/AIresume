// 定义了职业选择界面类的属性和方法。
class SelectionInterface {
  constructor(careers) {
    this.careers = careers;
  }

  displayCareers() {
    this.careers.forEach(career => {
      console.log(career.name);
    });
  }
}
```