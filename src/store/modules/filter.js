export default {
  	namespaced: true,
	state:
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
		}
	}
}