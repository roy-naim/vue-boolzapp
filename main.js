var app = new Vue({
  el: '#root',
  data: {
    indexOpt: null,
    indexSel: 0,
    inputSearch: '',
    inputText: '',
    contacts: contacts,
    user: [],
    left: true,
    right: false,
  },

  methods: {
    click_person: function (contact, i) {
      this.indexSel = i,
      this.user = contact,
      this.right = true,
      this.left = false,
      console.log(this.user);
    },

    goBack: function () {
      this.left = true,
      this.right = false
    },

    add: function (item) {
      let today = new Date().toLocaleString();
      today = today.replace(",","");
      if (this.inputText != '') {
        let obj = {
          text: this.inputText,
          status: 'sent',
          date: today
        }
        item.messages.push(obj);
        this.inputText = '';

        setTimeout(function() {
          let now = new Date().toLocaleString();
          now = now.replace(",","");
          let answer = {
            text: "Ok",
            status: 'received',
            date: now
          }
          item.messages.push(answer);
        }, 1000);
      }
    },

    remove: function (i) {
      this.contacts[this.indexSel].messages.splice(i, 1);
    },

    showHourMin: function (data) {
      let hourSplit = data.split(' ');
      let splitDate = hourSplit[0].split('/');
      let newDate = splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0] + ' ' + hourSplit[1];
      let nuovaData = new Date(newDate);
      // console.log(nuovaData);

      let newHour = nuovaData.getHours();
      let newMin = nuovaData.getMinutes();

      return newHour + ':' + newMin;
    },



    // showOptions: function (indexMess) {
    //   let message = this.contacts[this.index].messages[indexMess];
    //   this.contacts[this.index].messages[indexMess] = {
    //     ...message,
    //     showOptions: true,
    //   }
    // }
  },

  // computed: { //ritorna tutti i contacts..fa le funzioni e si accorge di cambiamenti Vue
  //   //un aiuto in piu' che controlla..
  //   filteredList() {
  //     return this.contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(this.inputSearch.toLowerCase())
  //     })
  //   }
  // }


  // methods: {
  //   getTime: function(date) {
  //     let datetime = new Date(date);
  //     let hours = datetime.getHours();
  //     let minutes = datetime.getMinutes();
  //     return: `${hours}:${minutes}`;
  //   }

});
