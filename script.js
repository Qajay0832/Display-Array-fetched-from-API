let tbody1 = document.querySelector("#tbody1");
let tbody2 = document.querySelector("#tbody2");
let tbody3 = document.querySelector("#tbody3");

let btn = document.querySelector("#showTable");
// https://dummyjson.com/posts
// https://dummyjson.com/products
// https://dummyjson.com/todos
function Promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts").then(res => {
                return res.json()
            }).then(data => {
                if (data.posts) {
                    tbody1.style.display = "table";
                    data.posts.forEach(ele => {
                        tbody1.innerHTML += `
                        <tr>
                        <td>${ele.userId}</td>
                        <td>${ele.title}</td>
                        <td>${ele.body}</td>
                        <td>${ele.tags}</td>
                        <td>${ele.reactions.likes}</td>
                        <td>${ele.reactions.dislikes}</td>
                        <td>${ele.views}</td>
                        </tr>`
                    });
                    resolve(true);
                }
                else {
                    reject(false)
                }
            })
        }, 1000)
    })
}
function Promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products").then(res => {
                return res.json()
            }).then(data => {
                if (data.products) {
                    tbody2.style.display = "table";
                    data.products.forEach(ele => {
                        tbody2.innerHTML += `
                        <tr>
                        <td><div class="icon"><img src=${ele.images[0]}><p>${ele.title}</p></div></td>
                        <td>${ele.description}</td>
                        <td>${ele.category}</td>
                        <td>${ele.price}</td>
                        <td>${ele.rating}</td>
                        <td>${ele.shippingInformation}</td>
                        <td>${ele.warrantyInformation}</td>
                        </tr>`
                    });
                    resolve(true);
                }
                else {
                    reject(false)
                }
            })
        }, 2000)

    })
}
function Promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos").then(res => {
                return res.json()
            }).then(data => {
                if (data.todos) {
                    tbody3.style.display = "table";
                    tbody3.style.width = "100%";
                    data.todos.forEach(ele => {
                        let completed;
                        if (ele.completed) {
                            completed = "compelted"
                        } else {
                            completed = "Pending"
                        }
                        tbody3.innerHTML += `
                    <tr>
                    <td>${ele.userId}</td>
                    <td>${ele.todo}</td>
                    <td>${completed}</td>
                    </tr>`
                    });
                    resolve(true);

                }
                else {
                    reject(false)
                }
            })
        }, 3000)
    })
}




function displayTable() {
    Promise1().then((res) => {
        if (res) {
            return Promise2()
        }
    }).then((response) => {
        {
            if (response) {
                Promise3()
            }
        }
    }).catch(err=>{
        alert(err)
    })
}
btn.addEventListener("click", displayTable)
