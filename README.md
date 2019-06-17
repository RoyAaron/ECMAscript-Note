# ECMAscript study

![ECMA](assets/images/ECMA.png)

**兼容各个浏览器的解决方案**

![ECMA](assets/images/ECMA_b.png)



## Es6 最新数组方法  
   ![array func](assets/images/arrayFunc.png)


   * **ES6 forEach 方法**

    `var colors = ['red','blue','black','green','skyblue']`

    ```javascript
    colors.forEach(function(color){
        console.log(color)
    })
    ```  

  * ES5
  ```javascript
    for(var i=0;i<colors.length;i++){
        console.log(colors[i])
    }
    ```  

    **练习： 遍历数组中的值，并计算总和**
    ```javascript
    var numbers = [1,2,3,4,5]

    sum = 0;

    function adder(number){ sum += number };
    numbers.forEach(adder);

    console.log(sum)
    ```  


---
* **Es6 map 方法**  
**假定有一个数值数组(A),将A数组中的值以双倍的形式放到B数组**  
```javascript
var numbers = [1,2,3];

var doubledNumbers = [];

// Es 5
for(var i=0;i<numbers.length;i++){
    doubledNumbers.push(numbers[i]*2)
}

console.log(doubledNumbers)


// Es 6
var doubled = numbers.map(function(number){
    return number*2
})

console.log(doubled)

doubled.forEach(function(number){
    console.log(number)
})
```


**假定有一个对象数组(A),将A数中对象某个属性的值存储到B数组中**  
```javascript
var cars = [
    {model:'Buick',price:'CHEAP'},
    {model:'BMW',price:'expensive'}
]

var prices = cars.map(function(car){
    // return car['price'];
    return car.price;
})

console.log(prices)
```

![map working](assets/images/map_working.png)

---  

* **Es6 filter 方法**


**假定有一个对象数组(A),获取数组中指定类型的对象放到B数组中**

```javascript
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
```
**假定有一个对象数组(A),过滤掉不满足以下条件的对象**
**条件:蔬菜数量大于θ,价格大于8**

```javascript
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
```


**假定有两个数组(A,B),根据A中id值,过滤掉B数组不符合的数据**
```javascript
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
```

---

* **Es6 find方法**

    ```javascript
    var users = [
        {name:'Jill'},
        {name:'Alex',id:1},
        {name:'Bill'},
        {name:'Alex',id:2},
    ]

    // Es5
    var user;

    for(var i=0;i<users.length;i++){
        if(users[i].name === 'Alex'){
            user = users[i];
            break;
        }
    }

    console.log(user)

    // Es6

    user = users.find(function(user){
        return user.name === 'Alex'
    })
    console.log(user)
    ```


    **假定有一个对象数组(A),根据指定对象的条件找到数组中符合条件的对象**  

    ```javascript
    var posts = [
        {id:1,title:'Node.js'},
        {id:2,title:'React.js'},
    ]

    var comment = {postId:1,content:'hello word'}

    function commentForPost(posts,comment){
        return posts.find(function(posts){
            return posts.id === comment.postId;
        })
    }

    console.log(commentForPost(posts,comment))
    ```