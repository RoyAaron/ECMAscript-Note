
//假定有一个对象数组(A),获取数组中指定类型的对象放到B数组中

var products = [
    {name:'cucumber',type:'vegetable'},
    {name:'banana',type:'fruit'},
    {name:'celery',type:'vegetable'},
    {name:'orange',type:'fruit'}
];

//Es5
var filteredProducts = [];
for(var i=0;i<products.length;i++){
    if(products[i].type === 'fruit'){
        filteredProducts.push(products[i])
    }
}

console.log(filteredProducts)

//Es6
var filtered = products.filter(function(product){
    return product.type === 'fruit';
})

console.log(filtered);

// 假定有一个对象数组(A),过滤掉不满足以下条件的对象
// 条件:蔬菜数量大于θ,价格大于8

var products = [
    {name:'cucumber',type:'vegetable',quantity:0,price:1},
    {name:'banana',type:'fruit',quantity:10,price:16},
    {name:'celery',type:'vegetable',quantity:30,price:10},
    {name:'orange',type:'fruit',quantity:30,price:6}
];

products = products.filter(function(product){
    return product.type === 'vegetable'
    && product.quantity > 0
    && product.price > 8
})

console.log(products)


// 假定有两个数组(A,B),根据A中id值,过滤掉B数组不符合的数据
var post = {id:4,title:'javascript'}

var comments = [
    {postId:4,content:'Angular4'},
    {postId:2,content:'Vue.js'},
    {postId:3,content:'Node.js'},
    {postId:4,content:'React.js'},
]

function commentsForPost(post,comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post,comments))