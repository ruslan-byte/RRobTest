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
    page: 1,
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
    pageChange(state, newValue)
    {
      state.page = newValue
    }
  },
  getters: {
    getMaxPage(state, getters)
    {
      return getters.getFilterCardListInPaginationType.length;
    },
    getPaginationFilterCardList({page}, getters)
    {
      return getters.getFilterCardListInPaginationType[page - 1]
    },
    getFilterCardListInPaginationType(state, getters)
    {
      let cardList = getters.getSortFilterCardList;
      let size = 8;
      let result = []; 
      for (let i = 0; i <Math.ceil(cardList.length/size); i++){
          result[i] = cardList.slice((i*size), (i*size) + size);
      }
      return result;
    },
    getFilterCardListCount(state, getters)
    {
      return getters.getFilterCardList.length;
    },
    getSortFilterCardList(state, getters)
    {
      let priceCorrector = getters['filters/getPriceInCorrectFormat'];
      return getters.getFilterCardList.sort((firstCard, secondCard)=>
      {
        return (state.filters.isPriceTop) ? 
        priceCorrector(secondCard.price) - priceCorrector(firstCard.price) :
        +secondCard.area - +firstCard.area;
      });
    },
    getFilterCardList({card, filters}, getters)
    {
      return card.list.filter((item)=>{
         if(  
            getters.isActiveComplexValue(item.objectName) && 
            getters.isActiveLitterNumValue(item.literNum) &&
            getters.isActiveRoomCount(item.roomCount) &&
            getters.isInAreaRange(item.area) &&
            getters.isInPriceRange(item.price)
          )
          return true;
        return false
      })
    },
    isActiveComplexValue: (state) => (selectValue)=> {
      let activeComplexValue = state.filters.residentialСomplexSelect.value,
          complexOption = state.filters.residentialСomplexSelect.options;

      if(activeComplexValue === 'all')
        return true;

      return activeComplexValue === complexOption.find((option)=>option.label === selectValue).value;
    },
    isActiveLitterNumValue: (state) => (selectValue)=> {
      let activeLitterNumValue = state.filters.litterNumSelect.value,
          litterOption = state.filters.litterNumSelect.options;

      if(activeLitterNumValue === 'all')
        return true;

      return activeLitterNumValue === litterOption.find((option)=>option.label === selectValue).value;
    },
    isActiveRoomCount: (state) => (roomCount) => {
      return  state.filters.roomFilter.value === roomCount;
    },
    isInAreaRange: ({filters})=>(area)=> {
      return +area > filters.area.value[0] && +area < filters.area.value[1];
    },
    isInPriceRange: ({filters},getters)=>(price)=> {
      return getters['filters/getPriceInCorrectFormat'](price) > filters.price.value[0] &&
      getters['filters/getPriceInCorrectFormat'](price) < filters.price.value[1];
    },
    
  }
})