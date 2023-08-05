import { createStore } from 'vuex';
import cardList from './CardList.js';
export default createStore({
  state: {
  	popup: {
  		isOpen: false,
  		data: null,
      isSuccess: false
  	},
    card: {
      isHorizontal: false,
      list: cardList
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