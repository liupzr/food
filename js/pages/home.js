export function renderHomePage(container, app) {
    container.innerHTML = `
        <!-- 首页/时间线记录页 -->
        <div id="home" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <h1 class="text-xl font-semibold text-primary">小食本</h1>
                    <div class="flex items-center space-x-4">
                        <button class="text-dark opacity-70">
                            <i class="fa fa-search text-lg"></i>
                        </button>
                        <button class="text-primary opacity-70" id="stats-btn">
                            <i class="fa fa-bar-chart text-lg"></i>
                        </button>
                        <button class="text-dark opacity-70">
                            <i class="fa fa-bell-o text-lg"></i>
                        </button>
                    </div>
                </div>
            </header>

            <!-- 时间线记录内容 -->
            <main class="px-4 py-6">
                <!-- 日期标题 -->
                <div class="mb-8">
                    <h2 class="text-lg font-medium mb-4">今天</h2>
                    
                    <!-- 时间线记录项 -->
                    <div class="timeline-item relative pl-12 pb-8">
                        <div class="absolute left-0 top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                            <i class="fa fa-cutlery"></i>
                        </div>
                        <div class="bg-white rounded-xl p-4 card-shadow cursor-pointer" id="food-item-1">
                            <div class="flex items-start justify-between mb-3">
                                <h3 class="font-medium">自制草莓蛋糕</h3>
                                <span class="text-xs text-gray-400">14:30</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 mb-3">
                                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20strawberry%20cake%20with%20fresh%20strawberries%20on%20top%2C%20soft%20lighting%2C%20delicious%20looking&image_size=square" alt="草莓蛋糕" class="w-full h-32 object-cover rounded-lg">
                                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20strawberry%20cake%20texture%2C%20cream%20frosting%2C%20fresh%20berries&image_size=square" alt="草莓蛋糕细节" class="w-full h-32 object-cover rounded-lg">
                            </div>
                            <p class="text-sm text-gray-600 mb-3">第一次尝试做蛋糕，味道还不错！草莓是早上刚买的，很新鲜。</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs px-2 py-1 bg-accent rounded-full">自制</span>
                                    <span class="text-xs px-2 py-1 bg-secondary rounded-full">甜点</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <button class="text-gray-400 hover:text-primary">
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                    <button class="text-gray-400 hover:text-primary share-btn">
                                        <i class="fa fa-share-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item relative pl-12 pb-8">
                        <div class="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                            <i class="fa fa-coffee"></i>
                        </div>
                        <div class="bg-white rounded-xl p-4 card-shadow cursor-pointer" id="food-item-2">
                            <div class="flex items-start justify-between mb-3">
                                <h3 class="font-medium">街角咖啡店</h3>
                                <span class="text-xs text-gray-400">09:15</span>
                            </div>
                            <div class="mb-3">
                                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=latte%20art%20coffee%20in%20a%20white%20cup%2C%20cozy%20cafe%20setting%2C%20soft%20lighting&image_size=landscape_4_3" alt="拿铁咖啡" class="w-full h-48 object-cover rounded-lg">
                            </div>
                            <p class="text-sm text-gray-600 mb-3">周末的早晨，来杯拿铁开启美好一天。</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs px-2 py-1 bg-primary/20 rounded-full">外出</span>
                                    <span class="text-xs px-2 py-1 bg-secondary rounded-full">咖啡</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <button class="text-gray-400 hover:text-primary">
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                    <button class="text-gray-400 hover:text-primary share-btn">
                                        <i class="fa fa-share-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-8">
                    <h2 class="text-lg font-medium mb-4">昨天</h2>
                    
                    <div class="timeline-item relative pl-12 pb-8">
                        <div class="absolute left-0 top-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                            <i class="fa fa-cutlery"></i>
                        </div>
                        <div class="bg-white rounded-xl p-4 card-shadow">
                            <div class="flex items-start justify-between mb-3">
                                <h3 class="font-medium">虾仁炒饭</h3>
                                <span class="text-xs text-gray-400">18:30</span>
                            </div>
                            <div class="mb-3">
                                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shrimp%20fried%20rice%20in%20a%20white%20bowl%2C%20colorful%20vegetables%2C%20appetizing%20presentation&image_size=square" alt="虾仁炒饭" class="w-full h-48 object-cover rounded-lg">
                            </div>
                            <p class="text-sm text-gray-600 mb-3">简单又美味的晚餐，虾仁很新鲜。</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs px-2 py-1 bg-accent rounded-full">自制</span>
                                    <span class="text-xs px-2 py-1 bg-secondary rounded-full">主食</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <button class="text-gray-400 hover:text-primary">
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                    <button class="text-gray-400 hover:text-primary share-btn">
                                        <i class="fa fa-share-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- 浮动添加按钮 -->
            <button class="float-btn fixed right-6 bottom-24 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white card-shadow">
                <i class="fa fa-plus text-xl"></i>
            </button>
        </div>
    `;

    // 绑定事件
    bindHomeEvents(app);
}

function bindHomeEvents(app) {
    // 统计按钮点击事件
    const statsBtn = document.getElementById('stats-btn');
    if (statsBtn) {
        statsBtn.addEventListener('click', () => {
            app.navigateTo('stats');
        });
    }

    // 美食记录卡片点击事件
    const foodItems = document.querySelectorAll('.timeline-item .bg-white.rounded-xl');
    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            app.navigateTo('detail');
        });
    });

    // 分享按钮点击事件
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止冒泡
            app.navigateTo('share');
        });
    });

    // 浮动按钮点击事件
    const floatBtn = document.querySelector('.float-btn');
    if (floatBtn) {
        floatBtn.addEventListener('click', () => {
            app.navigateTo('add');
        });
    }
}
