// infoInput.js
Page({
  data: {
    userInfo: {
      name: '',
      email: '',
      phone: ''
    }
  },
  // handle user input
  handleNameInput: function(event) {
    this.setData({
      'userInfo.name': event.detail.value
    });
  },
  handleEmailInput: function(event) {
    this.setData({
      'userInfo.email': event.detail.value
    });
  },
  handlePhoneInput: function(event) {
    this.setData({
      'userInfo.phone': event.detail.value
    });
  },
  // save user info
  saveUserInfo: function() {
    // save user info to backend or local storage
    console.log('User info saved:', this.data.userInfo);
  }
});
