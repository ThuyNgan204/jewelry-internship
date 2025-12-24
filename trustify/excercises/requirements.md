# Frontend Internship Capstone (Vanilla) — Basic E-Commerce Website

## 1) Goal & Scope

Build a **basic e-commerce website** using **only**:

- **HTML/HTML5**
- **CSS or SCSS**
- **Vanilla JavaScript (ES6+)**

> ❌ No external libraries/frameworks (React/Vue/jQuery/Bootstrap/etc.)  

The site must work **fully on client-side**, with **simulated database/data management** (no backend, no external APIs).

---

## 2) Main Features (High-Level)

### Customer side

- Registration + Login + Session persistence
- Home page with main sections (Header/Nav, Hero/Banner, Products, Search, Footer, etc.)
- Product listing page with **search + filter + sort + pagination**
- Product details page (multiple images, description, price, quantity selection, add to cart)
- Cart & Checkout flow (create order)

### Admin side

- Admin access control (only admin can access admin pages)
- CRUD: Users
- CRUD: Products
- CRUD: Orders
- (Optional) Invoice / Bill export

---

## 3) Project Rules (Important)

### 3.1 No libraries

- No UI libraries, no state management libs, no routing libs.
- You must write your own small utilities (DOM helpers, storage wrapper, validator, etc.).

### 3.2 Browser compatibility

Target modern browsers (Chrome/Edge/Safari latest). Must be responsive.

## 4) Recommended Folder Structure

You can adjust, but keep it clean and readable.

```

src/
├── assets/            
│   ├── css/
│   ├── images/
├── javascript/
├── pages/
│   ├── index.html
│   ├── products.html
│   └── ...
├── administrators/
├── index.html
├── readme.md
```
