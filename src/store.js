import { createStore } from 'vuex'

export default createStore({
  state: {
  	popup: {
  		isOpen: true,
  		data: null
  	},
    card: {
      isHorizontal: false,
    }
  },
  mutations: {
  	closePopup({popup})
  	{
  		popup.isOpen = false; 
  	},
  	openPopup({popup})
  	{
  		popup.isOpen = true;
  	},
    setIsHorizontal({card}, newValue)
    {
      card.isHorizontal = newValue;
    }
  },
  actions: {
  },
  getters: {

  }
})