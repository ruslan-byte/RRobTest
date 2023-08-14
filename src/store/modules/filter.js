import cardList from '@/store/cardList.js';
export default {
  	namespaced: true,
	state:
	{
		cardList: cardList,
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
					label: 'Первый'
				},
			]
		},
		litterNumSelect:
		{
			value: 'all',
			options: [
				{
					value: 'all',
					label: 'Любой'
				},
				{
					value: '1',
					label: 'Первый'
				},
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
		area:
		{
			range: [17, 162],
			value: [17, 162]
		},
		price:
		{
			range: [25, 245],
			value: [25, 245]
		},
		sort:
		{
			isPriceTop: false,
			isAreaTop: false
		}
	},
	mutations:
	{
		changeFilterSort(state, {sortName, newValue})
		{
			state.sort[sortName] = newValue;
		},
		changeSort(store, {sortName, newValue})
		{
			store.sort[sortName] = newValue;
		},
		changeResidentialСomplexSelectValue(store, newValue)
		{
			store.residentialСomplexSelect.value = newValue;
		},
		changeLitterNumSelectValue(store, newValue)
		{
			store.litterNumSelect.value = newValue;
		},
		changeRoomFilterValue(store, newValue)
		{
			store.roomFilter.value = newValue;
		},
		changeAreaValue(store, newValue)
		{
			store.area.value = newValue;
		},
		changePriceValue(store, newValue)
		{
			store.price.value = newValue;
		},
		setSelectorOptions(state, [selectorName, newFilterValue])
		{
			state[`${selectorName}Select`].options = [
				{
					value: 'all',
					label: 'Любой'
				},
				...newFilterValue
			]
		},
		setRoomFilter({ roomFilter }, newValue)
		{
			roomFilter.options = newValue
		},
		setArea({area}, newRange)
		{
			area.range = newRange;
			area.value = newRange;
		},
		setprice({price}, newRange)
		{
			price.range = newRange;
			price.value = newRange;
		}
	},
	actions:
	{
		calculateFiltersData({getters, commit})
		{
			commit('setSelectorOptions', ['residentialСomplex', getters.getComplexList])
			commit('setSelectorOptions', ['litterNum', getters.getLiterNumList])
			commit('setRoomFilter', getters.getRoomFilter)
			commit('setArea', [getters.getMinArea, getters.getMaxArea])
			commit('setprice', [getters.getMinPrice, getters.getMaxPrice])
		}
	},
	getters:
	{
		getComplexList({cardList})
		{
			return	[...new Set(cardList.map(item=>item.objectName))]
					.map((item, index)=>({value: index, label: item}));
		},
		getLiterNumList({cardList})
		{
			return	[...new Set(cardList.map(item=>item.literNum))]
					.map((item, index)=>({value: index, label: item}));
		},
		getRoomFilter({cardList})
		{
			return	[...new Set(cardList.map(item=>item.roomCount))]
					.map((item, index)=>({id: index, label: item}));
		},
		getMinArea({cardList})
		{
			return +cardList.reduce((res, item, index) =>{

				return (index === 0) ? item.area : ( res < +item.area ) ? res : item.area;
			}
			, 0)
		},
		getMaxArea({cardList})
		{
			return +cardList.reduce((res, item, index) =>{

				return (index === 0) ? item.area : ( res > +item.area ) ? res : item.area;
			}
			, 0)
		},
		getMinPrice({cardList}, {getPriceInCorrectFormat})
		{
			return +cardList.reduce((res, item, index) =>{
				return (index === 0) ? getPriceInCorrectFormat(item.price) : ( res < +getPriceInCorrectFormat(item.price) ) ? res : getPriceInCorrectFormat(item.price);
			}
			, 0)
		},
		getMaxPrice({cardList}, {getPriceInCorrectFormat})
		{
			return +cardList.reduce((res, item, index) =>{
				return (index === 0) ? getPriceInCorrectFormat(item.price) : ( res > getPriceInCorrectFormat(item.price) ) ? res : getPriceInCorrectFormat(item.price);
			}
			, 0)
		},
		getPriceInCorrectFormat: () => price => {
			let arr = price.split(' ').join('').split('');
			arr.splice(arr.length - 4, 6);
			arr = arr.join('').padStart(3,0);
			return +arr;
		}
	}
}