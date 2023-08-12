import { createStore } from 'vuex';
import cardList from './cardList.js';
import filterModule from './modules/filter.js';
export default createStore({
  modules:
  {
    filters: filterModule
  },
  state: {
  	popup: {
  		isOpen: false,
  		data: null,
      isSuccess: false
  	},
    card: {
      isHorizontal: false,
      list: cardList
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
  	},
    setIsHorizontal({card}, newValue)
    {
      card.isHorizontal = newValue;
    },
    setPopupSuccess({popup}, newValue)
    {
      popup.isSuccess = newValue;
    },
    setPopupData({popup}, newValue)
    {
      popup.data = newValue;
    },
  },
})