import { createStore } from 'vuex'

export default createStore({
  state: {
  	popup: {
  		isOpen: true,
  		data: null
  	},
  },
  mutations: {
  	closePopup({popup})
  	{
  		popup.isOpen = false; 
  	},
  	openPopup({popup})
  	{
  		popup.isOpen = true;
  	}
  },
  actions: {
  },
  getters: {

  }
})