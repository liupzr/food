export function renderMenuPage(container, app) {
    container.innerHTML = `
        <!-- 个人菜单页 -->
        <div id="menu" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <h1 class="text-xl font-semibold text-primary">我的菜单</h1>
                    <button class="text-dark opacity-70" id="menu-add-btn">
                        <i class="fa fa-plus text-lg"></i>
                    </button>
                </div>
            </header>

            <!-- 分类导航 -->
            <div class="bg-white p-4 overflow-x-auto">
                <div class="flex space-x-3">
                    <button class="px-4 py-2 bg-primary rounded-full text-white text-sm whitespace-nowrap">全部</button>
                    <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">主食</button>
                    <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">配菜</button>
                    <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">汤品</button>
                    <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">甜点</button>
                    <button class="px-4 py-2 bg-neutral rounded-full text-dark text-sm whitespace-nowrap">饮品</button>
                </div>
            </div>

            <!-- 菜单列表 -->
            <main class="px-4 py-6">
                <div class="grid grid-cols-2 gap-4">
                    <!-- 菜品卡片 -->
                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20fried%20rice%20with%20egg%20and%20vegetables%2C%20appetizing%20presentation&image_size=square" alt="蛋炒饭" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">蛋炒饭</h3>
                            <p class="text-xs text-gray-500 mt-1">主食</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20egg%20soup%20in%20a%20bowl%2C%20clear%20broth%2C%20fresh%20ingredients&image_size=square" alt="番茄蛋汤" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">番茄蛋汤</h3>
                            <p class="text-xs text-gray-500 mt-1">汤品</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stir%20fried%20broccoli%20with%20garlic%2C%20vibrant%20green%2C%20healthy%20dish&image_size=square" alt="蒜蓉西兰花" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">蒜蓉西兰花</h3>
                            <p class="text-xs text-gray-500 mt-1">配菜</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chocolate%20chip%20cookies%20on%20a%20plate%2C%20golden%20brown%2C%20delicious&image_size=square" alt="巧克力曲奇" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">巧克力曲奇</h3>
                            <p class="text-xs text-gray-500 mt-1">甜点</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20tea%20latte%20in%20a%20glass%2C%20foam%20on%20top%2C%20cozy%20vibe&image_size=square" alt="抹茶拿铁" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">抹茶拿铁</h3>
                            <p class="text-xs text-gray-500 mt-1">饮品</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden card-shadow menu-item">
                        <div class="h-36 overflow-hidden">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20avocado%20toast%20on%20sourdough%20bread%2C%20healthy%20breakfast&image_size=square" alt="牛油果吐司" class="w-full h-full object-cover">
                        </div>
                        <div class="p-3">
                            <h3 class="font-medium text-sm">牛油果吐司</h3>
                            <p class="text-xs text-gray-500 mt-1">早餐</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- 底部操作菜单 -->
        <div id="action-menu" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-end justify-center">
            <div class="bg-white rounded-t-xl w-full max-w-md p-6 animate-slide-up">
                <div class="flex justify-center mb-4">
                    <div class="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <h3 class="font-medium text-center mb-6">添加菜品</h3>
                <div class="space-y-4">
                    <button class="w-full flex items-center justify-center p-4 bg-primary/10 rounded-lg transition-all hover:bg-primary/20" id="action-library-btn">
                        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <i class="fa fa-book text-primary"></i>
                        </div>
                        <span>从菜品库添加</span>
                    </button>
                    <button class="w-full flex items-center justify-center p-4 bg-secondary/10 rounded-lg transition-all hover:bg-secondary/20" id="action-custom-btn">
                        <div class="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                            <i class="fa fa-plus text-secondary"></i>
                        </div>
                        <span>自定义添加</span>
                    </button>
                    <button class="w-full p-4 bg-gray-100 rounded-lg transition-all hover:bg-gray-200 mt-6" id="action-cancel-btn">
                        取消
                    </button>
                </div>
            </div>
        </div>

        <!-- 解锁菜谱弹窗 -->
        <div id="unlock-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center">
            <div class="bg-white rounded-xl w-full max-w-md p-6 animate-fade-in">
                <h3 class="font-medium text-center mb-4">解锁菜谱</h3>
                <div class="text-center mb-6">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20homemade%20dish%20in%20a%20bowl%2C%20appetizing%20presentation%2C%20soft%20lighting&image_size=square" alt="菜谱图片" class="w-32 h-32 object-cover rounded-lg mx-auto mb-3">
                    <h4 class="font-medium">番茄蛋汤</h4>
                    <p class="text-sm text-gray-500 mt-1">需要 10 米粒解锁</p>
                </div>
                <div class="space-y-3">
                    <button class="w-full py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90" id="unlock-btn">
                        10 米粒解锁菜谱
                    </button>
                    <button class="w-full py-3 bg-gray-100 text-dark rounded-lg transition-all hover:bg-gray-200" id="unlock-cancel-btn">
                        取消
                    </button>
                </div>
            </div>
        </div>
    `;

    // 绑定事件
    bindMenuEvents(app);
}

function bindMenuEvents(app) {
    // 添加按钮点击事件
    const menuAddBtn = document.getElementById('menu-add-btn');
    const actionMenu = document.getElementById('action-menu');
    if (menuAddBtn) {
        menuAddBtn.addEventListener('click', () => {
            actionMenu.classList.remove('hidden');
        });
    }

    // 底部操作菜单 - 取消按钮点击事件
    const actionCancelBtn = document.getElementById('action-cancel-btn');
    if (actionCancelBtn) {
        actionCancelBtn.addEventListener('click', () => {
            actionMenu.classList.add('hidden');
        });
    }

    // 点击菜单外部区域关闭菜单
    if (actionMenu) {
        actionMenu.addEventListener('click', (e) => {
            if (e.target === actionMenu) {
                actionMenu.classList.add('hidden');
            }
        });
    }

    // 底部操作菜单 - 从菜品库添加按钮点击事件
    const actionLibraryBtn = document.getElementById('action-library-btn');
    if (actionLibraryBtn) {
        actionLibraryBtn.addEventListener('click', () => {
            actionMenu.classList.add('hidden');
            app.navigateTo('food-library');
        });
    }

    // 底部操作菜单 - 自定义添加按钮点击事件
    const actionCustomBtn = document.getElementById('action-custom-btn');
    if (actionCustomBtn) {
        actionCustomBtn.addEventListener('click', () => {
            actionMenu.classList.add('hidden');
            app.navigateTo('custom-food');
        });
    }

    // 菜单页面食谱卡片点击事件
    const menuItems = document.querySelectorAll('.menu-item');
    const unlockModal = document.getElementById('unlock-modal');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            unlockModal.classList.remove('hidden');
        });
    });

    // 解锁弹窗取消按钮点击事件
    const unlockCancelBtn = document.getElementById('unlock-cancel-btn');
    if (unlockCancelBtn) {
        unlockCancelBtn.addEventListener('click', () => {
            unlockModal.classList.add('hidden');
        });
    }

    // 点击弹窗外部关闭弹窗
    if (unlockModal) {
        unlockModal.addEventListener('click', (e) => {
            if (e.target === unlockModal) {
                unlockModal.classList.add('hidden');
            }
        });
    }

    // 解锁按钮点击事件
    const unlockBtn = document.getElementById('unlock-btn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', () => {
            alert('解锁成功！');
            unlockModal.classList.add('hidden');
            app.navigateTo('recipe-detail');
        });
    }
}
