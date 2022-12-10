const menuItems = [
    {
       name: 'Pizza Margarita',
       price: 150,
       category: 'pizza',
       image: 'https://imgs.search.brave.com/HwENcjAv6cQeXjRM0ByI6Jj7Mlp0yl-DNq52CQTxixo/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9uYXR1/cmFsc29sdXRpb25z/bWFnLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8xMi9Q/aXp6YS1NYXJnaGVy/aXRhLmpwZw'
    },
    {
        name: 'Pizza Tuna',
        price: 180,
        category: 'pizza',
        image: 'https://imgs.search.brave.com/nrfSJKL7zOr6xosmHEaQHJY1xcQ4p80BmlwbjNrcp4I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJ1bnN3aWNrLmNh/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA1L0NTS18wNzAx/XzExNTItbGFyZ2Uu/anBn'
    },
    {
        name: 'Pepperoni Pizza',
        price: 180,
        category: 'pizza',
        image: 'https://imgs.search.brave.com/lIelMNm2Kfq62dhKtuJGXgAPcW8gyeJfQcGvdguev4k/rs:fit:1200:1067:1/g:ce/aHR0cHM6Ly93d3cu/cGFlc2FuYS5jb20v/aHViZnMvQmxvZy9w/ZXBwZXJvbmktcGl6/emEuanBn'
    },
    {
        name: 'Coca Cola',
        price: 50,
        category: 'drink',
        image: 'https://imgs.search.brave.com/QKU5pxWAPr_4T4q7YdnISFXytbeF9x3icXrQXLBrNv4/rs:fit:1200:930:1/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RfbW9kdWxl/cy8xNDAwLzUzMDdl/ZjM3MjI0MzkxLjU3/Mzk3YTU2ZDc5ZGEu/anBn'
    },
    {
        name: 'Steak',
        price: 300,
        category: 'grill',
        image: 'https://imgs.search.brave.com/rV1QOJDPFIfuDBKCNhx73yGkZTRbms-O3qac-vckAIA/rs:fit:991:665:1/g:ce/aHR0cHM6Ly9kMjhw/Z3ZxeDR6Mzkybi5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNS8zMTE1MDk1/NS9TdGVhay5qcGc'
    },
    {
        name: 'Mixed grill',
        price: 700,
        category: 'grill',
        image: "https://imgs.search.brave.com/fehkKPTovYKV3lze2G0wPqMNtv8-dteC60gyy3z-ZaE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFjLzM0/LzA3LzFjMzQwNzk4/NjZlMjhiMzY3NWVh/Y2JlY2VmMDMyMzJm/LmpwZw",
    },
    {
    name: 'Bolognese Spaghetti',
    price: 200,
    category: 'pasta',
    image: 'https://imgs.search.brave.com/U6eKnz7rUQCTbYxIRC0AJ48DjTFFhRvPJtJtkMbzKNc/rs:fit:980:670:1/g:ce/aHR0cHM6Ly9zY20t/YXNzZXRzLmNvbnN0/YW50LmNvL3N3bS85/YTg4OGU3MmZjYTM3/MTg2OWU3NTFhYjM0/NDkxZDAyNC84NTE2/NjRmNi0xYTlmLTQw/NzktOTNhYi1jOGU0/ZTA3MzliNjkuanBn'
    },
    {
        name: 'Water',
        price: 40,
        category: 'drink',
        image: 'https://imgs.search.brave.com/7p4qPj2Q107xz23w1OHuqJ0_TemIzD0nont0MAGIjsI/rs:fit:1200:1064:1/g:ce/aHR0cHM6Ly9wZXJm/ZWN0a2V0by5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDgvYmlnc3RvY2st/R2xhc3MtT2YtV2F0/ZXItNTMyOTIzOS5q/cGc'
    },
    {
        name: 'Chicken soup',
        price: 120,
        category: 'breakfast',
        image: 'https://imgs.search.brave.com/a7r3IkHrB4uhcbK6_1yNt2hOTcbI_3Hb6tWee27T--E/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pbWcu/ZGVsaWNpb3VzLmNv/bS5hdS9yS3VyWW5F/Ry93MTIwMC9kZWwv/MjAxNS8xMC9jaGlj/a2VuLW5vb2RsZS1z/b3VwLTE0MTMzLTEu/anBn'
    },
    {
        name: 'Pancakes',
        price: 140,
        category: 'breakfast',
        image: 'https://imgs.search.brave.com/EVMVS5Zau-UB0QDyS8va_PMc0kcCW6Wm4fNg638UECQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9l/T2RiWlBtWEJEV04z/MXR5NXdHN0M2SVFC/alE9LzQ1MjB4MzAx/My9maWx0ZXJzOmZp/bGwoYXV0bywxKS9l/YXN5LXB1bXBraW4t/cGFuY2FrZXMtcmVj/aXBlLTIwOTcyNjct/SGVyb18xLWFlZTI4/OWE5Y2M5YjQ0Nzk5/NTE5N2QzMmRiMzFh/MTcxLmpwZw'
    }
]

function filterFoods(obj) {
  const filterId = obj.id;
  const filteredFoods = menuItems.filter(item => item.category === filterId)
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  if(filteredFoods == ''){
    let p = document.createElement('p')
    p.innerText = 'There currently are no foods from this category!'
    cardContainer.append(p)
    return ;
  }

  for (let i = 0; i < filteredFoods.length; i++) {
    let div = document.createElement('div')
    div.classList.add('card')
    let img = document.createElement('img')
    let div1 = document.createElement('div')
    div1.id = 'content'
    let h3 = document.createElement('h3')
    let h31 = document.createElement('h3')
    
    cardContainer.append(div)
    div.append(img)
    div.append(div1)
    div1.append(h3)
    div1.append(h31)
  
    img.setAttribute('src', filteredFoods[i].image);
    h3.innerHTML = filteredFoods[i].name;
    h31.innerHTML = "Price: " + filteredFoods[i].price;
  }
}