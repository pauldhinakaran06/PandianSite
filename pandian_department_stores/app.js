const state = {
  products: [],
  filtered: [],
  cart: JSON.parse(localStorage.getItem("pandianCart") || "{}"),
  category: "all",
  search: "",
  sort: "featured"
};

const $ = (id) => document.getElementById(id);
const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;
const slugEmoji = (category) => ({
  "Dairy Products":"🥛",
  "Masalas & Spices":"🌶️",
  "Cool Drinks & Beverages":"🥤",
  "School Stationery":"✏️",
  "Mops, Brooms & Cleaning":"🧹",
  "Toothpaste & Oral Care":"🪥",
  "Daily Groceries & Staples":"🛍️"
}[category] || "🛒");

async function loadProducts() {
  try {
    const res = await fetch("products.json", {cache:"no-store"});
    if (!res.ok) throw new Error("catalog unavailable");
    state.products = await res.json();
  } catch {
    state.products = JSON.parse(`[
  {
    "id": "dairy-1",
    "name": "Aavin Milk",
    "category": "Dairy Products",
    "unit": "500 ml",
    "mrp": 30,
    "price": 30,
    "loyalty": false
  },
  {
    "id": "dairy-2",
    "name": "Amul Pure Cow Ghee",
    "category": "Dairy Products",
    "unit": "500 ml",
    "mrp": 340,
    "price": 315,
    "loyalty": false
  },
  {
    "id": "dairy-3",
    "name": "Amul Butter",
    "category": "Dairy Products",
    "unit": "100 g",
    "mrp": 62,
    "price": 58,
    "loyalty": false
  },
  {
    "id": "dairy-4",
    "name": "Milky Mist Fresh Paneer",
    "category": "Dairy Products",
    "unit": "200 g",
    "mrp": 110,
    "price": 105,
    "loyalty": false
  },
  {
    "id": "dairy-5",
    "name": "Set Curd",
    "category": "Dairy Products",
    "unit": "500 g",
    "mrp": 45,
    "price": 42,
    "loyalty": false
  },
  {
    "id": "dairy-6",
    "name": "Amul Cheese Slices",
    "category": "Dairy Products",
    "unit": "200 g",
    "mrp": 150,
    "price": 142,
    "loyalty": false
  },
  {
    "id": "masala-1",
    "name": "Aachi Kulambu Chilli Powder",
    "category": "Masalas & Spices",
    "unit": "100 g",
    "mrp": 45,
    "price": 40,
    "loyalty": true
  },
  {
    "id": "masala-2",
    "name": "Aachi Sambar Masala",
    "category": "Masalas & Spices",
    "unit": "100 g",
    "mrp": 50,
    "price": 45,
    "loyalty": true
  },
  {
    "id": "masala-3",
    "name": "Everest Royal Biryani Masala",
    "category": "Masalas & Spices",
    "unit": "50 g",
    "mrp": 62,
    "price": 57,
    "loyalty": true
  },
  {
    "id": "masala-4",
    "name": "Sakthi Chicken 65 Masala",
    "category": "Masalas & Spices",
    "unit": "50 g",
    "mrp": 42,
    "price": 38,
    "loyalty": true
  },
  {
    "id": "masala-5",
    "name": "Tata Sampann Turmeric",
    "category": "Masalas & Spices",
    "unit": "100 g",
    "mrp": 48,
    "price": 44,
    "loyalty": true
  },
  {
    "id": "masala-6",
    "name": "MDH Garam Masala",
    "category": "Masalas & Spices",
    "unit": "100 g",
    "mrp": 115,
    "price": 105,
    "loyalty": true
  },
  {
    "id": "masala-7",
    "name": "Whole Cumin (Jeeragam)",
    "category": "Masalas & Spices",
    "unit": "100 g",
    "mrp": 85,
    "price": 78,
    "loyalty": true
  },
  {
    "id": "bev-1",
    "name": "Red Bull Energy Drink",
    "category": "Cool Drinks & Beverages",
    "unit": "250 ml",
    "mrp": 145,
    "price": 135,
    "loyalty": true
  },
  {
    "id": "bev-2",
    "name": "Pepsi",
    "category": "Cool Drinks & Beverages",
    "unit": "750 ml",
    "mrp": 45,
    "price": 40,
    "loyalty": true
  },
  {
    "id": "bev-3",
    "name": "7Up",
    "category": "Cool Drinks & Beverages",
    "unit": "750 ml",
    "mrp": 45,
    "price": 40,
    "loyalty": true
  },
  {
    "id": "bev-4",
    "name": "Appy Fizz",
    "category": "Cool Drinks & Beverages",
    "unit": "600 ml",
    "mrp": 40,
    "price": 36,
    "loyalty": true
  },
  {
    "id": "bev-5",
    "name": "Bovonto",
    "category": "Cool Drinks & Beverages",
    "unit": "750 ml",
    "mrp": 45,
    "price": 40,
    "loyalty": true
  },
  {
    "id": "bev-6",
    "name": "Maaza Mango Juice",
    "category": "Cool Drinks & Beverages",
    "unit": "600 ml",
    "mrp": 50,
    "price": 45,
    "loyalty": true
  },
  {
    "id": "stat-1",
    "name": "Classmate Long Notebooks",
    "category": "School Stationery",
    "unit": "1 book",
    "mrp": 70,
    "price": 65,
    "loyalty": true
  },
  {
    "id": "stat-2",
    "name": "Doms Colour Pencil Kit",
    "category": "School Stationery",
    "unit": "1 kit",
    "mrp": 75,
    "price": 68,
    "loyalty": true
  },
  {
    "id": "stat-3",
    "name": "Reynolds 045 Pens",
    "category": "School Stationery",
    "unit": "Pack of 5",
    "mrp": 50,
    "price": 45,
    "loyalty": true
  },
  {
    "id": "stat-4",
    "name": "Nataraj Geometry Box",
    "category": "School Stationery",
    "unit": "1 box",
    "mrp": 90,
    "price": 82,
    "loyalty": true
  },
  {
    "id": "stat-5",
    "name": "Bilt A4 Paper",
    "category": "School Stationery",
    "unit": "500 sheets",
    "mrp": 330,
    "price": 310,
    "loyalty": true
  },
  {
    "id": "stat-6",
    "name": "Casio Desk Calculator",
    "category": "School Stationery",
    "unit": "1 piece",
    "mrp": 650,
    "price": 599,
    "loyalty": true
  },
  {
    "id": "clean-1",
    "name": "Gala Turbo Spin Mop Set",
    "category": "Mops, Brooms & Cleaning",
    "unit": "1 set",
    "mrp": 999,
    "price": 899,
    "loyalty": true
  },
  {
    "id": "clean-2",
    "name": "Gala No-Dust Broom",
    "category": "Mops, Brooms & Cleaning",
    "unit": "1 piece",
    "mrp": 220,
    "price": 195,
    "loyalty": true
  },
  {
    "id": "clean-3",
    "name": "Surf Excel Matic",
    "category": "Mops, Brooms & Cleaning",
    "unit": "2 kg",
    "mrp": 390,
    "price": 365,
    "loyalty": true
  },
  {
    "id": "clean-4",
    "name": "Harpic 10X Power Plus",
    "category": "Mops, Brooms & Cleaning",
    "unit": "1 L",
    "mrp": 235,
    "price": 215,
    "loyalty": true
  },
  {
    "id": "clean-5",
    "name": "Vim Gel",
    "category": "Mops, Brooms & Cleaning",
    "unit": "500 ml",
    "mrp": 125,
    "price": 112,
    "loyalty": true
  },
  {
    "id": "clean-6",
    "name": "Scotch-Brite Scrubbers",
    "category": "Mops, Brooms & Cleaning",
    "unit": "Pack of 3",
    "mrp": 75,
    "price": 68,
    "loyalty": true
  },
  {
    "id": "oral-1",
    "name": "Colgate Strong Teeth",
    "category": "Toothpaste & Oral Care",
    "unit": "200 g",
    "mrp": 125,
    "price": 112,
    "loyalty": true
  },
  {
    "id": "oral-2",
    "name": "Sensodyne Fresh Mint",
    "category": "Toothpaste & Oral Care",
    "unit": "70 g",
    "mrp": 145,
    "price": 135,
    "loyalty": true
  },
  {
    "id": "oral-3",
    "name": "CloseUp Everfresh",
    "category": "Toothpaste & Oral Care",
    "unit": "150 g",
    "mrp": 105,
    "price": 95,
    "loyalty": true
  },
  {
    "id": "oral-4",
    "name": "Dabur Red Ayurvedic",
    "category": "Toothpaste & Oral Care",
    "unit": "200 g",
    "mrp": 115,
    "price": 105,
    "loyalty": true
  },
  {
    "id": "oral-5",
    "name": "Oral-B Soft Toothbrush Pack",
    "category": "Toothpaste & Oral Care",
    "unit": "Pack of 2",
    "mrp": 120,
    "price": 108,
    "loyalty": true
  },
  {
    "id": "oral-6",
    "name": "Colgate ZigZag",
    "category": "Toothpaste & Oral Care",
    "unit": "Pack of 4",
    "mrp": 120,
    "price": 108,
    "loyalty": true
  },
  {
    "id": "groc-1",
    "name": "Aashirvaad Chakki Atta",
    "category": "Daily Groceries & Staples",
    "unit": "5 kg",
    "mrp": 285,
    "price": 270,
    "loyalty": false
  },
  {
    "id": "groc-2",
    "name": "Daawat Biryani Basmati Rice",
    "category": "Daily Groceries & Staples",
    "unit": "5 kg",
    "mrp": 620,
    "price": 585,
    "loyalty": true
  },
  {
    "id": "groc-3",
    "name": "Fortune Sunflower Oil",
    "category": "Daily Groceries & Staples",
    "unit": "1 L",
    "mrp": 155,
    "price": 145,
    "loyalty": false
  },
  {
    "id": "groc-4",
    "name": "Tata Tea Premium",
    "category": "Daily Groceries & Staples",
    "unit": "500 g",
    "mrp": 285,
    "price": 268,
    "loyalty": true
  },
  {
    "id": "groc-5",
    "name": "Boost Energy Drink",
    "category": "Daily Groceries & Staples",
    "unit": "500 g",
    "mrp": 310,
    "price": 292,
    "loyalty": true
  },
  {
    "id": "groc-6",
    "name": "Maggi 2-Minute Noodles",
    "category": "Daily Groceries & Staples",
    "unit": "Pack of 12",
    "mrp": 168,
    "price": 150,
    "loyalty": true
  },
  {
    "id": "groc-7",
    "name": "Parle-G",
    "category": "Daily Groceries & Staples",
    "unit": "800 g",
    "mrp": 100,
    "price": 92,
    "loyalty": true
  },
  {
    "id": "groc-8",
    "name": "Britannia Good Day Cookies",
    "category": "Daily Groceries & Staples",
    "unit": "600 g",
    "mrp": 150,
    "price": 138,
    "loyalty": true
  },
  {
    "id": "groc-9",
    "name": "Tata Salt",
    "category": "Daily Groceries & Staples",
    "unit": "1 kg",
    "mrp": 30,
    "price": 28,
    "loyalty": true
  },
  {
    "id": "groc-10",
    "name": "Toor Dal",
    "category": "Daily Groceries & Staples",
    "unit": "1 kg",
    "mrp": 185,
    "price": 172,
    "loyalty": true
  }
]`);
  }
  const saved = localStorage.getItem("pandianCatalog");
  if (saved) {
    try { state.products = JSON.parse(saved); } catch {}
  }
  initFilters();
  render();
}

function initFilters() {
  const cats = [...new Set(state.products.map(p => p.category))];
  $("categorySelect").innerHTML = `<option value="all">All categories</option>` + cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
  $("categoryChips").innerHTML = [`all`, ...cats].map(c => {
    const label = c === "all" ? "All" : c;
    return `<button class="chip ${state.category===c?'active':''}" data-cat="${esc(c)}">${esc(label)}</button>`;
  }).join("");
  $("categoryChips").querySelectorAll(".chip").forEach(btn => btn.onclick = () => {
    state.category = btn.dataset.cat;
    $("categorySelect").value = state.category;
    render();
  });
}

function esc(v) {
  return String(v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function render() {
  const q = state.search.toLowerCase().trim();
  let list = state.products.filter(p => {
    const categoryOK = state.category === "all" || p.category === state.category;
    const searchOK = !q || `${p.name} ${p.category} ${p.unit}`.toLowerCase().includes(q);
    return categoryOK && searchOK;
  });
  const savings = p => Math.max(0, Number(p.mrp)-Number(p.price));
  if (state.sort === "price-low") list.sort((a,b)=>a.price-b.price);
  if (state.sort === "price-high") list.sort((a,b)=>b.price-a.price);
  if (state.sort === "saving") list.sort((a,b)=>savings(b)-savings(a));
  if (state.sort === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
  state.filtered = list;

  $("catalogStatus").textContent = `${list.length} products · No fruits or vegetables`;
  $("productGrid").innerHTML = list.length ? list.map(productCard).join("") : `<div class="empty">No products found. Try another search or category.</div>`;
  $("productGrid").querySelectorAll("[data-add]").forEach(btn => btn.onclick = () => addToCart(btn.dataset.add));
  renderCart();
  renderManager();
}

function productCard(p) {
  const save = Math.max(0, Number(p.mrp)-Number(p.price));
  const pct = p.mrp ? Math.round(save/p.mrp*100) : 0;
  return `<article class="product-card">
    <div class="product-art" aria-hidden="true">${slugEmoji(p.category)}</div>
    <div class="product-category">${esc(p.category)}</div>
    <div class="product-name">${esc(p.name)}</div>
    <div class="unit">${esc(p.unit)}</div>
    <div class="price-row"><span class="mrp">${money(p.mrp)}</span><strong class="price">${money(p.price)}</strong></div>
    <div class="badges">${save ? `<span class="badge">${pct}% OFF</span><span class="badge save">Save ${money(save)}</span>` : `<span class="badge save">Everyday price</span>`}</div>
    <button class="add-btn" data-add="${esc(p.id)}">+ Add to cart</button>
  </article>`;
}

function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  persistCart(); renderCart();
  $("cartDrawer").classList.add("open"); $("drawerBackdrop").classList.add("open");
}
function changeQty(id, delta) {
  state.cart[id] = (state.cart[id] || 0) + delta;
  if (state.cart[id] <= 0) delete state.cart[id];
  persistCart(); renderCart();
}
function persistCart(){ localStorage.setItem("pandianCart", JSON.stringify(state.cart)); }

function cartData() {
  return Object.entries(state.cart).map(([id,qty]) => {
    const p = state.products.find(x=>x.id===id); return p ? {...p, qty} : null;
  }).filter(Boolean);
}
function renderCart() {
  const items = cartData();
  $("cartCount").textContent = items.reduce((s,p)=>s+p.qty,0);
  $("cartItems").innerHTML = items.length ? items.map(p => `<div class="cart-item">
    <div><h4>${esc(p.name)}</h4><small>${money(p.price)} × ${p.qty}</small><div class="qty"><button data-q="${esc(p.id)}" data-d="-1">−</button><b>${p.qty}</b><button data-q="${esc(p.id)}" data-d="1">+</button></div></div>
    <strong>${money(p.price*p.qty)}</strong>
  </div>`).join("") : `<div class="empty">Your cart is empty.<br>Add products from the catalogue.</div>`;
  $("cartItems").querySelectorAll("[data-q]").forEach(b => b.onclick=()=>changeQty(b.dataset.q, Number(b.dataset.d)));
  const total = items.reduce((s,p)=>s+p.price*p.qty,0);
  const mrp = items.reduce((s,p)=>s+p.mrp*p.qty,0);
  $("cartSubtotal").textContent = money(total);
  $("cartSaving").textContent = money(Math.max(0,mrp-total));
  $("cartTotal").textContent = money(total);
}

function openCart(){ $("cartDrawer").classList.add("open"); $("drawerBackdrop").classList.add("open"); }
function closeCart(){ $("cartDrawer").classList.remove("open"); $("drawerBackdrop").classList.remove("open"); }

function sendWhatsApp() {
  const items = cartData();
  if (!items.length) return alert("Your cart is empty.");
  const total = items.reduce((s,p)=>s+p.price*p.qty,0);
  const mrp = items.reduce((s,p)=>s+p.mrp*p.qty,0);
  const name = $("customerName").value.trim();
  const address = $("customerAddress").value.trim();
  let msg = `Hello Pandian Department Stores!%0A%0AI would like to order:%0A`;
  items.forEach(p => msg += `• ${p.name} (${p.unit}) × ${p.qty} = ${money(p.price*p.qty)}%0A`);
  msg += `%0ATotal: ${money(total)}%0ATotal savings: ${money(Math.max(0,mrp-total))}`;
  if (name) msg += `%0AName: ${encodeURIComponent(name)}`;
  if (address) msg += `%0ADelivery address: ${encodeURIComponent(address)}`;
  msg += `%0A%0APlease confirm availability and delivery.`;
  window.open(`https://wa.me/918939089397?text=${msg}`, "_blank", "noopener");
}

function calcRewards() {
  const amount = Math.max(0, Number($("billAmount").value)||0);
  const points = amount >= 500 ? Math.floor(amount/100) : 0;
  $("pointsResult").textContent = points;
  const free = amount >= 1500;
  $("deliveryResult").textContent = free ? "FREE" : "Not yet";
  $("deliveryResult").style.color = free ? "#74e6a1" : "#ffd04d";
  $("deliveryNote").textContent = free ? "Eligible for Gummidipoondi home delivery" : `Add ${money(1500-amount)} to reach ₹1,500`;
}

function renderManager() {
  $("managerRows").innerHTML = state.products.map((p,i)=>`<tr>
    <td>${esc(p.name)}</td><td>${esc(p.category)}</td>
    <td><input type="number" data-field="mrp" data-i="${i}" value="${p.mrp}"></td>
    <td><input type="number" data-field="price" data-i="${i}" value="${p.price}"></td>
    <td><input type="checkbox" data-field="loyalty" data-i="${i}" ${p.loyalty?'checked':''}></td>
    <td><button class="danger" data-del="${i}">Delete</button></td>
  </tr>`).join("");
  $("managerRows").querySelectorAll("[data-field]").forEach(el=>el.onchange=()=>{
    const i=Number(el.dataset.i), f=el.dataset.field;
    state.products[i][f] = el.type==="checkbox" ? el.checked : Number(el.value);
    saveCatalog();
  });
  $("managerRows").querySelectorAll("[data-del]").forEach(el=>el.onclick=()=>{
    if(confirm("Delete this product from the local catalogue?")) { state.products.splice(Number(el.dataset.del),1); saveCatalog(); initFilters(); render(); }
  });
  $("jsonEditor").value = JSON.stringify(state.products,null,2);
}
function saveCatalog(){ localStorage.setItem("pandianCatalog",JSON.stringify(state.products)); }

function openManager(){ $("managerBackdrop").classList.add("open"); renderManager(); }
function closeManager(){ $("managerBackdrop").classList.remove("open"); }

$("searchInput").addEventListener("input",e=>{state.search=e.target.value;render()});
$("categorySelect").addEventListener("change",e=>{state.category=e.target.value;render()});
$("sortSelect").addEventListener("change",e=>{state.sort=e.target.value;render()});
$("cartBtn").onclick=openCart; $("closeCart").onclick=closeCart; $("drawerBackdrop").onclick=closeCart;
$("whatsappBtn").onclick=sendWhatsApp; $("billAmount").addEventListener("input",calcRewards);
$("managerBtn").onclick=openManager; $("closeManager").onclick=closeManager;
$("managerBackdrop").addEventListener("click",e=>{if(e.target===e.currentTarget)closeManager()});

document.querySelectorAll(".manager-tabs button").forEach(tab=>tab.onclick=()=>{
  document.querySelectorAll(".manager-tabs button").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".manager-panel").forEach(x=>x.classList.remove("active"));
  tab.classList.add("active");
  const target = {table:"managerTable",json:"managerJson",add:"managerAdd"}[tab.dataset.tab];
  $(target).classList.add("active");
  if(target==="managerJson") $("jsonEditor").value=JSON.stringify(state.products,null,2);
});

$("copyJson").onclick=async()=>{
  try{await navigator.clipboard.writeText($("jsonEditor").value);alert("JSON copied.");}catch{alert("Copy was blocked by the browser. Select the JSON and copy it manually.")}
};
$("saveJson").onclick=()=>{
  try {
    const parsed=JSON.parse($("jsonEditor").value);
    if(!Array.isArray(parsed)) throw new Error();
    state.products=parsed; saveCatalog(); initFilters(); render(); alert("Catalogue updated.");
  } catch { alert("Invalid JSON. Please fix the JSON and try again."); }
};
$("downloadJson").onclick=()=>{
  const blob=new Blob([JSON.stringify(state.products,null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="products.json"; a.click(); URL.revokeObjectURL(a.href);
};
$("addForm").onsubmit=(e)=>{
  e.preventDefault(); const f=new FormData(e.currentTarget);
  const name=f.get("name").trim(), category=f.get("category").trim(), unit=f.get("unit").trim();
  state.products.push({id:"custom-"+Date.now(),name,category,unit,mrp:Number(f.get("mrp")),price:Number(f.get("price")),loyalty:f.get("loyalty")==="on"});
  saveCatalog(); e.currentTarget.reset(); initFilters(); render(); alert("Product added."); 
};

calcRewards();
loadProducts();
