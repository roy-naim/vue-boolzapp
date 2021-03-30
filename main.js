var app = new Vue({
  el: '#root',
  data: {
    indexSel: 0,
    inputSearch: '',
    inputText: '',
    contacts: contacts,
    user: [],
  },

  // created: function () {
  //
  // },

  methods: {
    click_person: function (contact, i) {
      this.indexSel = i,
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
    },

  },

  computed: { //ritorna tutti i contacts..fa le funzioni e si accorge di cambiamenti Vue
    //un aiuto in piu' che controlla..
    filteredList() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.inputSearch.toLowerCase())
      })
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
