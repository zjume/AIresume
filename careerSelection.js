
// 职业选择界面的逻辑，包括显示职业选项、处理用户选择等功能。
Page({
  data: {
    careers: ['Software Developer', 'Data Analyst', 'Product Manager', 'Graphic Designer'],
    selectedCareer: ''
  },
  selectCareer: function(event) {
    this.setData({
      selectedCareer: event.currentTarget.dataset.career
    });
  }
});
