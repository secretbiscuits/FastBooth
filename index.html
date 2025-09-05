// 商品管理システム - HTML/CSS/JS版

// データストレージ
class DataStorage {
    constructor() {
        this._LS_KEY = 'product_app_state_v1';
        const loaded = this.loadFromStorage();
        if (!loaded) {
            this.products = [
                { id: '1', name: 'A商品', price: 500, stock: 10, category: '食品', color: 'bg-red-50 border-red-200', imageUrl: '' },
                { id: '2', name: 'B商品', price: 1000, stock: 10, category: '日用品', color: 'bg-blue-50 border-blue-200', imageUrl: '' },
                { id: '3', name: 'C商品', price: 1200, stock: 10, category: '文具', color: 'bg-green-50 border-green-200', imageUrl: '' },
                { id: '4', name: 'D商品', price: 1500, stock: 10, category: '雑貨', color: 'bg-purple-50 border-purple-200', imageUrl: '' }
            ];
            this.cart = [];
            this.sales = [];
            this.isAdminMode = false;
            this.currentView = 'productSelection';
            this.saveToStorage();
        }
    }

    saveToStorage() {
        try {
            const payload = {
                products: this.products,
                cart: this.cart,
                sales: this.sales,
                isAdminMode: this.isAdminMode,
                currentView: this.currentView,
            };
            localStorage.setItem(this._LS_KEY, JSON.stringify(payload));
        } catch (_) {}
    }

    loadFromStorage() {
        try {
            const raw = localStorage.getItem(this._LS_KEY);
            if (!raw) return false;
            const data = JSON.parse(raw);
            this.products = (data.products || []).map(p => ({ imageUrl: '', color: 'bg-gray-50 border-gray-200', ...p }));
            this.cart = Array.isArray(data.cart) ? data.cart : [];
            this.sales = Array.isArray(data.sales) ? data.sales : [];
            this.isAdminMode = !!data.isAdminMode;
            this.currentView = data.currentView || 'productSelection';
            return true;
        } catch (_) {
            return false;
        }
    }

    addProduct({ name, price, stock, category, imageUrl }) {
        const id = Date.now().toString();
        const color = 'bg-gray-50 border-gray-200';
        const product = { id, name, price, stock, category, color, imageUrl: imageUrl || '' };
        this.products.push(product);
        this.saveToStorage();
        return product;
    }

    updateProduct(id, updates) {
        const p = this.products.find(pr => pr.id === id);
        if (!p) return false;
        Object.assign(p, updates);
        this.saveToStorage();
        return true;
    }

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        // その商品のカート項目も削除
        this.cart = this.cart.filter(c => c.productId !== id);
        this.saveToStorage();
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product || product.stock === 0) return false;

        const existingItem = this.cart.find(item => item.productId === productId);
        if (existingItem) {
            if (existingItem.quantity >= product.stock) return false;
            existingItem.quantity += 1;
        } else {
            this.cart.push({ productId, quantity: 1 });
        }

        this.saveToStorage();
        return true;
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.productId !== productId);
        this.saveToStorage();
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            const product = this.products.find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    completePurchase() {
        if (this.cart.length === 0) return false;

        // 在庫を減らす
        this.cart.forEach(item => {
            const product = this.products.find(p => p.id === item.productId);
            if (product) {
                product.stock -= item.quantity;
            }
        });

        // 売上に記録（単価・商品名のスナップショットを含む）
        const saleItems = this.cart.map(ci => {
            const p = this.products.find(pp => pp.id === ci.productId);
            return {
                productId: ci.productId,
                quantity: ci.quantity,
                price: p ? p.price : 0,
                name: p ? p.name : '(削除済み商品)'
            };
        });
        const saleTotal = saleItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
        this.sales.push({
            id: Date.now().toString(),
            date: new Date(),
            items: saleItems,
            total: saleTotal
        });

        // カートをクリア
        this.cart = [];
        this.saveToStorage();
        return true;
    }

    exportCSV() {
        const headers = ['ID', '商品名', '価格', '在庫', 'カテゴリ'];
        const rows = this.products.map(product => 
            [product.id, product.name, product.price, product.stock, product.category].join(',')
        );
        const csvContent = [headers.join(','), ...rows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `商品データ_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    exportProductsJSON() {
        const payload = { products: this.products };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `products_${new Date().toISOString().split('T')[0]}.json`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    importProductsJSON(obj) {
        if (!obj || !Array.isArray(obj.products)) return false;
        const normalized = obj.products.map(p => ({
            id: String(p.id || Date.now() + Math.random()),
            name: String(p.name || ''),
            price: Math.max(0, parseInt(p.price || 0, 10)),
            stock: Math.max(0, parseInt(p.stock || 0, 10)),
            category: String(p.category || '未分類'),
            color: p.color || 'bg-gray-50 border-gray-200',
            imageUrl: p.imageUrl || ''
        }));
        this.products = normalized;
        // カート項目の整合性を保つ
        this.cart = this.cart.filter(ci => this.products.some(p => p.id === ci.productId));
        this.saveToStorage();
        return true;
    }

    resetAllData() {
        localStorage.removeItem(this._LS_KEY);
        this.products = [
            { id: '1', name: 'A商品', price: 500, stock: 10, category: '食品', color: 'bg-red-50 border-red-200', imageUrl: '' },
            { id: '2', name: 'B商品', price: 1000, stock: 10, category: '日用品', color: 'bg-blue-50 border-blue-200', imageUrl: '' },
            { id: '3', name: 'C商品', price: 1200, stock: 10, category: '文具', color: 'bg-green-50 border-green-200', imageUrl: '' },
            { id: '4', name: 'D商品', price: 1500, stock: 10, category: '雑貨', color: 'bg-purple-50 border-purple-200', imageUrl: '' }
        ];
        this.cart = [];
        this.sales = [];
        this.isAdminMode = true;
        this.currentView = 'products';
        this.saveToStorage();
    }
}

// UIコントローラー
class UIController {
    constructor(dataStorage) {
        this.data = dataStorage;
        this.searchQuery = '';
        this.sortKey = 'default';
        this.applyThemeFromStorage && this.applyThemeFromStorage();
        this.init();
    }

    applyThemeFromStorage() {
        const stored = localStorage.getItem('theme') || 'system';
        const root = document.documentElement;
        if (stored === 'dark') {
            root.classList.add('dark');
        } else if (stored === 'light') {
            root.classList.remove('dark');
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.toggle('dark', !!prefersDark);
        }
    }

    setTheme(mode) {
        if (!['light','dark','system'].includes(mode)) return;
        localStorage.setItem('theme', mode);
        this.applyThemeFromStorage();
    }

    updateSettingsView() {
        const radios = document.querySelectorAll('#themeOptions .theme-radio');
        const stored = localStorage.getItem('theme') || 'system';
        radios.forEach(r => {
            r.checked = r.value === stored;
            if (!r._bound) {
                r.addEventListener('change', () => this.setTheme(r.value));
                r._bound = true;
            }
        });
    }
    init() {
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        // モード切り替えボタン
        document.getElementById('toggleModeBtn').addEventListener('click', () => this.toggleMode());
        document.getElementById('toggleModeBtnDesktop').addEventListener('click', () => this.toggleMode());

        // ナビゲーションボタン
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.navigateTo(e.currentTarget.dataset.view);
            });
        });

        // カートボタン
        document.getElementById('cartBtn').addEventListener('click', () => this.showCart());
        document.getElementById('cartBtnDesktop').addEventListener('click', () => this.showCart());
        document.getElementById('viewCartBtn').addEventListener('click', () => this.showCart());

        // 商品検索・並べ替え
        const searchEl = document.getElementById('productSearch');
        const sortEl = document.getElementById('productSort');
        if (searchEl) {
            searchEl.addEventListener('input', (e) => {
                this.searchQuery = (e.target.value || '').trim().toLowerCase();
                this.updateUI();
            });
        }
        if (sortEl) {
            sortEl.addEventListener('change', (e) => {
                this.sortKey = e.target.value;
                this.updateUI();
            });
        }
    }

    toggleMode() {
        this.data.isAdminMode = !this.data.isAdminMode;
        this.data.currentView = this.data.isAdminMode ? 'dashboard' : 'productSelection';
        this.data.saveToStorage();
        this.updateUI();
    }

    navigateTo(view) {
        this.data.currentView = view;
        this.data.saveToStorage();
        this.updateUI();
    }

    showCart() {
        this.renderCartModal();
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    updateUI() {
        this.updateHeader();
        this.updateMainContent();
        this.updateCartBadge();
        this.updateCartModalIfOpen();
    }

    updateHeader() {
        const headerTitle = document.getElementById('headerTitle');
        const adminNav = document.getElementById('adminNav');
        const toggleBtnMobile = document.getElementById('toggleModeBtn');
        const toggleBtnDesktop = document.getElementById('toggleModeBtnDesktop');

        headerTitle.textContent = this.data.isAdminMode ? '管理画面' : '商品管理システム';
        
        if (this.data.isAdminMode) {
            adminNav.classList.remove('hidden');
            adminNav.classList.add('flex');
            if (toggleBtnMobile) toggleBtnMobile.textContent = 'ユーザー';
            if (toggleBtnDesktop) toggleBtnDesktop.textContent = 'ユーザー画面へ戻る';
        } else {
            adminNav.classList.add('hidden');
            adminNav.classList.remove('flex');
            if (toggleBtnMobile) toggleBtnMobile.innerHTML = `
                <span class=\"inline-flex items-center space-x-1\">
                    <svg class=\"h-4 w-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.25 3.75h1.5M16.5 5.318l1.06 1.06M19.5 9.75v1.5M18.182 15.318l-1.06 1.06M12.75 18.75h-1.5M7.5 17.182l-1.06-1.06M4.5 11.25v-1.5M5.818 5.318l1.06-1.06M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z\"/>
                    </svg>
                    <span>Setting</span>
                </span>`;
            if (toggleBtnDesktop) toggleBtnDesktop.innerHTML = `
                <span class="inline-flex items-center space-x-2">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.25 3.75h1.5M16.5 5.318l1.06 1.06M19.5 9.75v1.5M18.182 15.318l-1.06 1.06M12.75 18.75h-1.5M7.5 17.182l-1.06-1.06M4.5 11.25v-1.5M5.818 5.318l1.06-1.06M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"/>
                    </svg>
                    <span>Setting</span>
                </span>`;
        }

        // ナビゲーションボタンのアクティブ状態を更新
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.dataset.view === this.data.currentView) {
                btn.className = 'nav-btn bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap';
            } else {
                btn.className = 'nav-btn bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap';
            }
        });
    }

    updateMainContent() {
        // すべてのビューを非表示
        document.getElementById('productSelectionView').classList.add('hidden');
        document.getElementById('adminDashboardView').classList.add('hidden');
        const salesView = document.getElementById('adminSalesView');
        const productsView = document.getElementById('adminProductsView');
        const settingsView = document.getElementById('adminSettingsView');
        if (salesView) salesView.classList.add('hidden');
        if (productsView) productsView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');

        // 現在のビューを表示
        if (this.data.isAdminMode) {
            if (this.data.currentView === 'dashboard') {
                document.getElementById('adminDashboardView').classList.remove('hidden');
                this.updateDashboard();
            } else if (this.data.currentView === 'sales') {
                if (salesView) {
                    salesView.classList.remove('hidden');
                    this.updateSalesView();
                }
            } else if (this.data.currentView === 'products') {
                if (productsView) {
                    productsView.classList.remove('hidden');
                    this.updateProductsView();
                }
            } else if (this.data.currentView === 'settings') {
                if (settingsView) {
                    settingsView.classList.remove('hidden');
                    this.updateSettingsView();
                }
            }
            // 他の管理画面ビューもここで処理
        } else {
            document.getElementById('productSelectionView').classList.remove('hidden');
            this.updateProductSelection();
        }
    }

    updateCartBadge() {
        const count = this.data.getCartItemCount();
        const total = this.data.getCartTotal();
        const badges = ['cartBadge', 'cartBadgeDesktop'];
        
        badges.forEach(badgeId => {
            const badge = document.getElementById(badgeId);
            if (count > 0) {
                badge.classList.remove('hidden');
                badge.textContent = count;
            } else {
                badge.classList.add('hidden');
            }
        });

        // カートサマリーの更新
        const cartSummary = document.getElementById('cartSummary');
        const cartSummaryText = document.getElementById('cartSummaryText');
        
        if (!this.data.isAdminMode) {
            if (count > 0) {
                cartSummary.classList.remove('hidden');
                cartSummaryText.textContent = `カート内: ${count}個の商品 / 合計: ¥${total.toLocaleString()}`;
            } else {
                cartSummary.classList.add('hidden');
            }
        }

        // 下部バーのカウントと合計
        const barCount = document.getElementById('cartBarCount');
        const barTotal = document.getElementById('cartBarTotal');
        if (barCount) barCount.textContent = `${count}点`;
        if (barTotal) barTotal.textContent = `合計: ¥${total.toLocaleString()}`;
    }

    // --- Cart Modal ---
    updateCartModalIfOpen() {
        const modal = document.getElementById('cartModal');
        if (modal && !modal.classList.contains('hidden')) {
            this.renderCartModal();
        }
    }

    renderCartModal() {
        const modal = document.getElementById('cartModal');
        const itemsContainer = document.getElementById('cartItemsContainer');
        const totalEl = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const closeBtn = document.getElementById('closeCartBtn');
        const tenderInput = document.getElementById('tenderInput');
        const tender5000 = document.getElementById('tender5000');
        const tender10000 = document.getElementById('tender10000');
        const changeDisplay = document.getElementById('changeDisplay');
        const shortfallDisplay = document.getElementById('shortfallDisplay');

        if (!modal || !itemsContainer || !totalEl) return;

        // Bind one-time listeners if not bound yet
        if (closeBtn && !closeBtn._bound) {
            closeBtn.addEventListener('click', () => this.closeCart());
            closeBtn._bound = true;
        }
        if (checkoutBtn && !checkoutBtn._bound) {
            checkoutBtn.addEventListener('click', () => {
                if (this.data.cart.length === 0) return;
                const ok = this.data.completePurchase();
                if (ok) {
                    // 支払い入力と表示をリセット
                    if (tenderInput) tenderInput.value = '';
                    if (changeDisplay) changeDisplay.textContent = '—';
                    if (shortfallDisplay) { shortfallDisplay.textContent = ''; shortfallDisplay.classList.add('hidden'); }
                    alert('購入が完了しました。ありがとうございました。');
                    this.closeCart();
                    this.updateUI();
                }
            });
            checkoutBtn._bound = true;
        }

        // Payment inputs one-time binding
        const setTender = (val) => {
            if (!tenderInput) return;
            tenderInput.value = String(val);
            this.updateChangeCalculator();
        };
        if (tenderInput && !tenderInput._bound) {
            tenderInput.addEventListener('input', () => this.updateChangeCalculator());
            tenderInput._bound = true;
        }
        if (tender5000 && !tender5000._bound) {
            tender5000.addEventListener('click', () => setTender(5000));
            tender5000._bound = true;
        }
        if (tender10000 && !tender10000._bound) {
            tender10000.addEventListener('click', () => setTender(10000));
            tender10000._bound = true;
        }

        // Delegate quantity/change/remove actions
        if (!itemsContainer._bound) {
            itemsContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-action]');
                if (!btn) return;
                const action = btn.dataset.action;
                const productId = btn.dataset.productId;
                if (!productId) return;
                if (action === 'inc') this.changeCartQuantity(productId, 1);
                if (action === 'dec') this.changeCartQuantity(productId, -1);
                if (action === 'remove') this.removeFromCart(productId);
                this.renderCartModal();
                this.updateUI();
            });
            itemsContainer._bound = true;
        }

        if (this.data.cart.length === 0) {
            itemsContainer.innerHTML = '<p class="text-gray-600 dark:text-gray-200">カートは空です。</p>';
            totalEl.textContent = '¥0';
            if (checkoutBtn) checkoutBtn.disabled = true;
            if (changeDisplay) changeDisplay.textContent = '—';
            if (shortfallDisplay) { shortfallDisplay.textContent = ''; shortfallDisplay.classList.add('hidden'); }
            return;
        }

        const rows = this.data.cart.map(item => {
            const product = this.data.products.find(p => p.id === item.productId);
            if (!product) return '';
            const subtotal = product.price * item.quantity;
            const canInc = item.quantity < product.stock;
            return `
                <div class="flex items-center justify-between py-2 border-b dark:border-gray-700">
                    <div>
                        <div class="text-sm font-medium">${product.name}</div>
                        <div class="text-xs text-gray-600 dark:text-gray-300">単価: ¥${product.price.toLocaleString()} / 在庫: ${product.stock}</div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded" data-action="dec" data-product-id="${product.id}">-</button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button class="px-2 py-1 ${canInc ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-600 cursor-not-allowed'} rounded" data-action="inc" data-product-id="${product.id}" ${canInc ? '' : 'disabled'}>+</button>
                        <span class="w-24 text-right">¥${subtotal.toLocaleString()}</span>
                        <button class="ml-2 text-red-600 text-sm" data-action="remove" data-product-id="${product.id}">削除</button>
                    </div>
                </div>
            `;
        }).join('');

        itemsContainer.innerHTML = rows;
        totalEl.textContent = `¥${this.data.getCartTotal().toLocaleString()}`;
        if (checkoutBtn) checkoutBtn.disabled = false;

        // Update change calculation after re-render
        this.updateChangeCalculator();
    }

    closeCart() {
        const modal = document.getElementById('cartModal');
        if (modal) modal.classList.add('hidden');
    }

    changeCartQuantity(productId, delta) {
        const item = this.data.cart.find(i => i.productId === productId);
        const product = this.data.products.find(p => p.id === productId);
        if (!product) return;

        if (!item) {
            if (delta > 0) this.data.addToCart(productId);
            return;
        }

        const nextQty = item.quantity + delta;
        if (nextQty <= 0) {
            this.data.removeFromCart(productId);
            return;
        }
        if (nextQty > product.stock) return; // exceed stock
        item.quantity = nextQty;
    }

    removeFromCart(productId) {
        this.data.removeFromCart(productId);
    }

    updateChangeCalculator() {
        const total = this.data.getCartTotal();
        const tenderInput = document.getElementById('tenderInput');
        const changeDisplay = document.getElementById('changeDisplay');
        const shortfallDisplay = document.getElementById('shortfallDisplay');
        if (!tenderInput || !changeDisplay) return;

        const val = parseInt(tenderInput.value || '0', 10) || 0;
        const diff = val - total;
        if (diff >= 0) {
            changeDisplay.textContent = `¥${diff.toLocaleString()}`;
            if (shortfallDisplay) { shortfallDisplay.textContent = ''; shortfallDisplay.classList.add('hidden'); }
        } else {
            changeDisplay.textContent = '—';
            if (shortfallDisplay) {
                shortfallDisplay.textContent = `不足: ¥${Math.abs(diff).toLocaleString()}`;
                shortfallDisplay.classList.remove('hidden');
            }
        }
    }

    updateProductSelection() {
        const productsGrid = document.getElementById('productsGrid');
        const categories = [...new Set(this.data.products.map(p => p.category))];
        
        productsGrid.innerHTML = '';
        
        categories.forEach(category => {
            const categoryProducts = this.data.products.filter(p => p.category === category);
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm';
            categoryDiv.innerHTML = `
                <div class="p-4 border-b">
                    <h3 class="text-sm sm:text-base font-medium flex items-center space-x-2">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                        <span>${category}</span>
                        <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">${categoryProducts.length}商品</span>
                    </h3>
                </div>
                <div class="p-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        ${categoryProducts.map(product => this.createProductCard(product)).join('')}
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(categoryDiv);
        });
        
        // 商品カードのボタンにイベントリスナーを追加
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                if (this.data.addToCart(productId)) {
                    this.updateUI();
                } else {
                    alert('この商品は在庫がありません。');
                }
            });
        });
    }

    createProductCard(product) {
        const cartQuantity = this.data.cart.find(item => item.productId === product.id)?.quantity || 0;
        const isOutOfStock = product.stock === 0;
        
        const img = product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.name}" class="w-full h-32 object-cover rounded-md border dark:border-gray-700" onerror="this.style.display='none'">` : '';

        return `
            <div class="${product.color} dark:bg-gray-800 dark:border-gray-700 rounded-lg border p-3 sm:p-4 ${isOutOfStock ? 'opacity-60' : 'hover:shadow-md'} transition-all">
                <div class="space-y-3">
                    ${img}
                    <div>
                        <h3 class="text-base sm:text-lg">${product.name}</h3>
                        <p class="text-lg sm:text-xl text-blue-600">¥${product.price.toLocaleString()}</p>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-200">在庫: ${product.stock}個</span>
                        <span class="px-2 py-1 rounded-full text-xs ${
                            product.stock > 5 ? 'bg-gray-800 text-white' : 
                            product.stock > 0 ? 'bg-gray-100 text-gray-800' : 
                            'bg-red-100 text-red-800'
                        }">
                            ${product.stock > 5 ? '在庫十分' : product.stock > 0 ? '在庫少' : '在庫なし'}
                        </span>
                    </div>

                    ${cartQuantity > 0 ? `
                        <div class="flex items-center justify-center space-x-2 p-2 bg-green-100 rounded-md">
                            <svg class="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m7.6 8L9 17h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"></path>
                            </svg>
                            <span class="text-sm text-green-700">カート内: ${cartQuantity}個</span>
                        </div>
                    ` : ''}

                    <button
                        class="add-to-cart-btn w-full px-4 py-2 rounded text-white ${
                            isOutOfStock 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                        }"
                        ${isOutOfStock ? 'disabled' : ''}
                        data-product-id="${product.id}"
                    >
                        ${isOutOfStock ? '在庫なし' : 'カートに追加'}
                    </button>
                </div>
            </div>
        `;
    }

    updateDashboard() {
        const totalSales = this.data.sales.reduce((sum, sale) => sum + sale.total, 0);
        const totalProducts = this.data.products.length;
        const lowStockProducts = this.data.products.filter(product => product.stock <= 3).length;
        const todaySales = this.data.sales
            .filter(sale => new Date(sale.date).toDateString() === new Date().toDateString())
            .reduce((sum, sale) => sum + sale.total, 0);

        document.getElementById('totalSales').textContent = `¥${totalSales.toLocaleString()}`;
        document.getElementById('totalTransactions').textContent = `${this.data.sales.length}件の取引`;
        document.getElementById('totalProducts').textContent = `${totalProducts}個`;
        document.getElementById('lowStockProducts').textContent = `${lowStockProducts}個が在庫少`;
        document.getElementById('todaySales').textContent = `¥${todaySales.toLocaleString()}`;
    }

    updateSalesView() {
        const listEl = document.getElementById('salesList');
        const summaryEl = document.getElementById('salesSummary');
        const grandEl = document.getElementById('salesGrandTotal');
        const chartEl = document.getElementById('salesChart');
        if (!listEl || !summaryEl || !grandEl || !chartEl) return;

        if (this.data.sales.length === 0) {
            listEl.innerHTML = '<div class="p-4 text-gray-600">まだ売上がありません。</div>';
            summaryEl.innerHTML = '';
            grandEl.textContent = '¥0';
            chartEl.innerHTML = '<div class="text-gray-600">本日の売上はまだありません。</div>';
            return;
        }

        // リスト
        const rows = this.data.sales
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(sale => {
                const date = new Date(sale.date);
                const itemsCount = (sale.items || []).reduce((n, it) => n + (it.quantity || 0), 0);
                return `
                    <div class="p-4 flex items-center justify-between">
                        <div>
                            <div class="text-sm text-gray-900 dark:text-gray-100">${date.toLocaleString()}</div>
                            <div class="text-xs text-gray-600 dark:text-gray-300">${itemsCount}点 / 取引ID: ${sale.id}</div>
                        </div>
                        <div class="text-base text-blue-600">¥${(sale.total || 0).toLocaleString()}</div>
                    </div>
                `;
            }).join('');
        listEl.innerHTML = rows;

        // 商品別サマリーと総合計
        const productMap = new Map();
        let grandTotal = 0;
        this.data.sales.forEach(sale => {
            (sale.items || []).forEach(it => {
                const product = this.data.products.find(p => p.id === it.productId);
                const name = it.name || (product ? product.name : '(削除済み商品)');
                const price = typeof it.price === 'number' ? it.price : (product ? product.price : 0);
                const amount = price * (it.quantity || 0);
                grandTotal += amount;
                const prev = productMap.get(it.productId) || { name, qty: 0, amount: 0 };
                prev.name = name;
                prev.qty += (it.quantity || 0);
                prev.amount += amount;
                productMap.set(it.productId, prev);
            });
        });
        const summaryRows = [...productMap.values()]
            .sort((a, b) => b.amount - a.amount)
            .map(s => `
                <tr>
                    <td class="px-3 py-2">${s.name}</td>
                    <td class="px-3 py-2 text-right">${s.qty.toLocaleString()}</td>
                    <td class="px-3 py-2 text-right">¥${s.amount.toLocaleString()}</td>
                </tr>
            `).join('');
        summaryEl.innerHTML = summaryRows || '<tr><td class="px-3 py-2 text-gray-600" colspan="3">データがありません</td></tr>';
        grandEl.textContent = `¥${grandTotal.toLocaleString()}`;

        // 30分ごとの売上金額（本日）
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setDate(end.getDate() + 1);
        const bins = Array.from({ length: 48 }, () => 0);
        this.data.sales.forEach(sale => {
            const d = new Date(sale.date);
            if (d >= start && d < end) {
                const bin = Math.max(0, Math.min(47, Math.floor((d - start) / (30 * 60 * 1000))));
                // 金額はアイテムから再計算（価格スナップショットに対応）
                const amount = (sale.items || []).reduce((sum, it) => {
                    const product = this.data.products.find(p => p.id === it.productId);
                    const price = typeof it.price === 'number' ? it.price : (product ? product.price : 0);
                    return sum + price * (it.quantity || 0);
                }, 0);
                bins[bin] += amount;
            }
        });
        const max = Math.max(...bins, 0);
        if (max === 0) {
            chartEl.innerHTML = '<div class="text-gray-600 dark:text-gray-300">本日の売上はまだありません。</div>';
        } else {
            const barRows = bins.map((v, i) => {
                const minutes = i * 30;
                const hh = Math.floor(minutes / 60).toString().padStart(2, '0');
                const mm = (minutes % 60).toString().padStart(2, '0');
                const label = `${hh}:${mm}`;
                const width = Math.max(4, Math.round((v / max) * 100));
                return `
                    <div class="flex items-center space-x-2">
                        <div class="w-16 text-xs text-gray-600 dark:text-gray-300">${label}</div>
                        <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded h-2">
                            <div class="bg-blue-600 h-2 rounded" style="width:${width}%"></div>
                        </div>
                        <div class="w-24 text-right text-xs text-gray-700 dark:text-gray-300">¥${v.toLocaleString()}</div>
                    </div>
                `;
            }).join('');
            chartEl.innerHTML = barRows;
        }
    }

    updateProductsView() {
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;
        const rows = this.data.products.map(p => {
            const isEditing = this.editProductId === p.id;
            return `
            <tr>
                <td class="px-4 py-2">
                    ${p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.name}" class="w-16 h-16 object-cover rounded border" onerror="this.style.display='none'">` : '<div class="w-16 h-16 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-400">No Img</div>'}
                </td>
                <td class="px-4 py-2">${isEditing ? `<input class=\"border rounded px-2 py-1 w-full\" data-field=\"name\" value=\"${p.name}\">` : p.name}</td>
                <td class="px-4 py-2 text-right">${isEditing ? `<input type=\"number\" min=\"0\" class=\"border rounded px-2 py-1 w-24 text-right\" data-field=\"price\" value=\"${p.price}\">` : `¥${p.price.toLocaleString()}`}</td>
                <td class="px-4 py-2 text-right">${isEditing ? `<input type=\"number\" min=\"0\" class=\"border rounded px-2 py-1 w-20 text-right\" data-field=\"stock\" value=\"${p.stock}\">` : p.stock}</td>
                <td class="px-4 py-2">${isEditing ? `<input class=\"border rounded px-2 py-1 w-full\" data-field=\"category\" value=\"${p.category}\">` : p.category}</td>
                <td class="px-4 py-2 text-right space-x-2">
                    <button class="px-2 py-1 bg-gray-100 rounded" data-action="stock-dec" data-product-id="${p.id}">-1</button>
                    <button class="px-2 py-1 bg-gray-100 rounded" data-action="stock-inc" data-product-id="${p.id}">+1</button>
                </td>
                <td class="px-4 py-2 text-right space-x-2">
                    ${isEditing ? `
                        <input class=\"border rounded px-2 py-1 w-48\" data-field=\"imageUrl\" placeholder=\"画像URL\" value=\"${p.imageUrl || ''}\">
                        <button class=\"px-2 py-1 bg-blue-600 text-white rounded\" data-action=\"save\" data-product-id=\"${p.id}\">保存</button>
                        <button class=\"px-2 py-1 bg-gray-300 rounded\" data-action=\"cancel\" data-product-id=\"${p.id}\">取消</button>
                    ` : `
                        <button class=\"px-2 py-1 bg-white border rounded\" data-action=\"edit\" data-product-id=\"${p.id}\">編集</button>
                        <button class=\"px-2 py-1 bg-red-600 text-white rounded\" data-action=\"delete\" data-product-id=\"${p.id}\">削除</button>
                    `}
                </td>
            </tr>`;
        }).join('');
        tbody.innerHTML = rows;

        // One-time bindings for delegation and CSV export
        if (!tbody._bound) {
            tbody.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-action]');
                if (!btn) return;
                const id = btn.dataset.productId;
                const action = btn.dataset.action;
                if (action === 'stock-inc') this.adjustStock(id, 1);
                if (action === 'stock-dec') this.adjustStock(id, -1);
                if (action === 'edit') { this.editProductId = id; }
                if (action === 'cancel') { this.editProductId = null; }
                if (action === 'save') {
                    const row = btn.closest('tr');
                    const getVal = (sel) => row.querySelector(`[data-field="${sel}"]`)?.value ?? '';
                    const name = getVal('name').trim();
                    const price = Math.max(0, parseInt(getVal('price') || '0', 10));
                    const stock = Math.max(0, parseInt(getVal('stock') || '0', 10));
                    const category = getVal('category').trim();
                    const imageUrl = getVal('imageUrl').trim();
                    if (!name) { alert('商品名を入力してください'); return; }
                    this.data.updateProduct(id, { name, price, stock, category, imageUrl });
                    this.editProductId = null;
                }
                if (action === 'delete') {
                    if (confirm('この商品を削除しますか？')) this.data.deleteProduct(id);
                }
                this.updateProductsView();
                this.updateUI();
            });
            tbody._bound = true;
        }

        const exportBtn = document.getElementById('exportCsvBtn');
        if (exportBtn && !exportBtn._bound) {
            exportBtn.addEventListener('click', () => this.data.exportCSV());
            exportBtn._bound = true;
        }

        const exportJsonBtn = document.getElementById('exportJsonBtn');
        if (exportJsonBtn && !exportJsonBtn._bound) {
            exportJsonBtn.addEventListener('click', () => this.data.exportProductsJSON());
            exportJsonBtn._bound = true;
        }

        const importBtn = document.getElementById('importJsonBtn');
        const importInput = document.getElementById('importJsonInput');
        if (importBtn && importInput && !importBtn._bound) {
            importBtn.addEventListener('click', () => importInput.click());
            importInput.addEventListener('change', async (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                try {
                    const text = await file.text();
                    const json = JSON.parse(text);
                    if (this.data.importProductsJSON(json)) {
                        alert('JSONを取り込みました');
                        this.updateProductsView();
                        this.updateUI();
                    } else {
                        alert('JSONの形式が不正です');
                    }
                } catch (err) {
                    alert('JSONの読み込みに失敗しました');
                } finally {
                    e.target.value = '';
                }
            });
            importBtn._bound = true;
        }

        const resetBtn = document.getElementById('resetDataBtn');
        if (resetBtn && !resetBtn._bound) {
            resetBtn.addEventListener('click', () => {
                if (confirm('全データを初期化しますか？（売上・カート含む）')) {
                    this.data.resetAllData();
                    alert('初期化しました');
                    // 検索・ソートも初期化
                    this.searchQuery = '';
                    this.sortKey = 'default';
                    const s = document.getElementById('productSearch');
                    const so = document.getElementById('productSort');
                    if (s) s.value = '';
                    if (so) so.value = 'default';
                    this.updateProductsView();
                    this.updateUI();
                }
            });
            resetBtn._bound = true;
        }

        // Add product form bindings (one-time)
        const addBtn = document.getElementById('addProductBtn');
        if (addBtn && !addBtn._bound) {
            addBtn.addEventListener('click', () => {
                const nameEl = document.getElementById('newProductName');
                const priceEl = document.getElementById('newProductPrice');
                const stockEl = document.getElementById('newProductStock');
                const categoryEl = document.getElementById('newProductCategory');
                const imageUrlEl = document.getElementById('newProductImageUrl');
                const name = (nameEl.value || '').trim();
                const price = Math.max(0, parseInt(priceEl.value || '0', 10));
                const stock = Math.max(0, parseInt(stockEl.value || '0', 10));
                const category = (categoryEl.value || '').trim() || '未分類';
                const imageUrl = (imageUrlEl.value || '').trim();
                if (!name) { alert('商品名を入力してください'); return; }
                this.data.addProduct({ name, price, stock, category, imageUrl });
                // clear
                nameEl.value = '';
                priceEl.value = '';
                stockEl.value = '';
                categoryEl.value = '';
                imageUrlEl.value = '';
                this.updateProductsView();
                this.updateUI();
            });
            addBtn._bound = true;
        }
    }

    adjustStock(productId, delta) {
        const product = this.data.products.find(p => p.id === productId);
        if (!product) return;
        const next = product.stock + delta;
        product.stock = Math.max(0, next);
        this.data.saveToStorage();
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
    const dataStorage = new DataStorage();
    const uiController = new UIController(dataStorage);
});
