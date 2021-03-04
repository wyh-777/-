const app = new Vue({
	el: '#app',
	data:{
		books:[
			{
				id: 1,
			  name: '《算法导论》',
			  date: '2006-9',
			  price: 85.00,
			  count: 1,
			},{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 125.00,
				count: 1
			},
		]
	},
	methods:{
		add(index){
			this.books[index].count ++
		},
		sub(index){
			this.books[index].count --
		},
		remove(index){
			this.books.splice(index, 1)
		}
	},
	computed:{
		totalPrice(){
			return this.books.reduce(function(preVaule, book){
				return preVaule + book.count * book.price
			},0)
		}
	}
	filters:{
		showPrice(price){
			return '￥' + price.toFixed(2)
		}
	}
})