export function renderFoodLibraryPage(container, app) {
    container.innerHTML = `
        <!-- 菜品库页面 -->
        <div id="food-library" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <button class="text-dark opacity-70 back-btn">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h1 class="text-xl font-semibold text-primary">菜品库</h1>
                    <div class="w-6"></div>
                </div>
            </header>

            <main class="px-4 py-6">
                <!-- 搜索框 -->
                <div class="mb-6">
                    <div class="relative">
                        <input type="text" placeholder="搜索菜品" class="w-full px-4 py-3 pl-10 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>

                <!-- 分类导航 -->
                <div class="bg-white p-4 rounded-xl mb-6 card-shadow">
                    <div class="flex space-x-3 overflow-x-auto">
                        <button class="px-4 py-2 bg-primary rounded-full text-white text-sm whitespace-nowrap">全部</button>
                        <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">主食</button>
                        <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">配菜</button>
                        <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">汤品</button>
                        <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">甜点</button>
                        <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">饮品</button>
                    </div>
                </div>

                <!-- 菜品列表 -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- 菜品卡片 -->
                    <div class="bg-white rounded-xl overflow-hidden card-shadow">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20fried%20rice%20with%20egg%20and%20vegetables%2C%20appetizing%20presentation&image_size=square" alt="蛋炒饭" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">蛋炒饭</h3>
                            <p class="text-xs text-gray-500 mt-1">主食</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20egg%20soup%20in%20a%20bowl%2C%20clear%20broth%2C%20fresh%20ingredients&image_size=square" alt="番茄蛋汤" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">番茄蛋汤</h3>
                            <p class="text-xs text-gray-500 mt-1">汤品</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stir%20fried%20broccoli%20with%20garlic%2C%20vibrant%20green%2C%20healthy%20dish&image_size=square" alt="蒜蓉西兰花" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">蒜蓉西兰花</h3>
                            <p class="text-xs text-gray-500 mt-1">配菜</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chocolate%20chip%20cookies%20on%20a%20plate%2C%20golden%20brown%2C%20delicious&image_size=square" alt="巧克力曲奇" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">巧克力曲奇</h3>
                            <p class="text-xs text-gray-500 mt-1">甜点</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindFoodLibraryEvents(app);
}

function bindFoodLibraryEvents(app) {
    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            app.navigateTo('menu');
        });
    }
}
