var app = new Vue({
  el: '#root',
  data: {
    inputText: '',
    contacts: contacts,
    user: [],
  },

  // created: function () {
  //
  // },

  methods: {
    click_person: function (contact) {
      this.user = contact,
      console.log(this.user);
    },

    add: function (item) {
      let today = new Date().toLocaleString();
      if (this.inputText != '') {
        let obj = {
          text: this.inputText,
          status: 'sent',
          date: today,
        }
        item.messages.push(obj);
        this.inputText = '';

        setTimeout(function() {
          let now = new Date().toLocaleString();
          let answer = {
            text: "Ok",
            status: 'received',
            date: now,
          }
          item.messages.push(answer);
        }, 1000);
      }
    }
  }
  // methods: {
  //   getTime: function(date) {
  //     let datetime = new Date(date);
  //     let hours = datetime.getHours();
  //     let minutes = datetime.getMinutes();
  //     return: `${hours}:${minutes}`;
  //   }
});
