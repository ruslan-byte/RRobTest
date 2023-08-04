import { createStore } from 'vuex'

export default createStore({
  state: {
  	popup: {
  		isOpen: false,
  		data: null,
      isSuccess: false
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
    },
    setPopupSuccess({popup}, newValue)
    {
      popup.isSuccess = newValue;
    }
  },
})