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
    },
    filters:
    {
      residentialСomplexSelect:
      {
        value: 'all',
        options: [
          {
            value: 'all',
            label: 'Любой'
          },
          {
            value: '1',
            label: '1'
          }
        ]
      },
      litterNumSelect:
      {
        value: 'all',
        options: [
          {
            value: 'all',
            label: 'Любой'
          }
        ]
      },
      roomFilter:
      {
        value: 'Ст',
        options: [
          {id: 0, label: 'Ст'},
          {id: 1, label: '1'},
          {id: 2, label: '2'},
          {id: 3, label: '3+'}
        ]
      },
      areaRange: [17, 162],
      priceRange: [25, 245],
      sort: {
        isPriceTop: false,
        isAreaTop: false
      }
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
    },
    setPopupData({popup}, newValue)
    {
      popup.data = newValue;
    },
    changeFilterSort({filters}, {sortName, newValue})
    {
      filters.sort[sortName] = newValue;
    },
    changeResidentialСomplexSelectValue({filters}, newValue)
    {
      filters.residentialСomplexSelect.value = newValue;
    },
    changeLitterNumSelectValue({filters}, newValue)
    {
      filters.litterNumSelect.value = newValue;
    },
    changeRoomFilterValue({filters}, newValue)
    {
      filters.roomFilter.value = newValue;
    },
  },
})