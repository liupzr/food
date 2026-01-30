export function renderStatsPage(container, app) {
    container.innerHTML = `
        <!-- 统计页面 -->
        <div id="stats" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <button class="text-dark opacity-70 back-btn">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h1 class="text-xl font-semibold text-primary">美食统计</h1>
                    <div class="w-6"></div>
                </div>
            </header>

            <main class="px-4 py-6">
                <!-- 月份选择 -->
                <div class="flex items-center justify-between mb-6">
                    <button class="text-gray-500">
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <h2 class="text-lg font-medium">2026年1月</h2>
                    <button class="text-gray-500">
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>

                <!-- 日历 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <!-- 星期标题 -->
                    <div class="grid grid-cols-7 gap-1 mb-3">
                        <div class="text-center text-xs text-gray-500">日</div>
                        <div class="text-center text-xs text-gray-500">一</div>
                        <div class="text-center text-xs text-gray-500">二</div>
                        <div class="text-center text-xs text-gray-500">三</div>
                        <div class="text-center text-xs text-gray-500">四</div>
                        <div class="text-center text-xs text-gray-500">五</div>
                        <div class="text-center text-xs text-gray-500">六</div>
                    </div>
                    <!-- 日历格子 -->
                    <div class="grid grid-cols-7 gap-1">
                        <!-- 上月日期 -->
                        <div class="text-center py-2 text-gray-300 text-sm">29</div>
                        <div class="text-center py-2 text-gray-300 text-sm">30</div>
                        <div class="text-center py-2 text-gray-300 text-sm">31</div>
                        <!-- 当月日期 -->
                        <div class="text-center py-2 text-sm">1</div>
                        <div class="text-center py-2 text-sm">2</div>
                        <div class="text-center py-2 text-sm">3</div>
                        <div class="text-center py-2 text-sm">4</div>
                        <div class="text-center py-2 text-sm">5</div>
                        <div class="text-center py-2 text-sm">6</div>
                        <div class="text-center py-2 text-sm">7</div>
                        <div class="text-center py-2 text-sm">8</div>
                        <div class="text-center py-2 text-sm">9</div>
                        <div class="text-center py-2 text-sm">10</div>
                        <div class="text-center py-2 text-sm">11</div>
                        <div class="text-center py-2 text-sm">12</div>
                        <div class="text-center py-2 text-sm">13</div>
                        <div class="text-center py-2 text-sm">14</div>
                        <div class="text-center py-2 text-sm">15</div>
                        <div class="text-center py-2 text-sm">16</div>
                        <div class="text-center py-2 text-sm">17</div>
                        <div class="text-center py-2 text-sm">18</div>
                        <div class="text-center py-2 text-sm">19</div>
                        <div class="text-center py-2 text-sm">20</div>
                        <div class="text-center py-2 text-sm">21</div>
                        <div class="text-center py-2 text-sm">22</div>
                        <div class="text-center py-2 text-sm">23</div>
                        <div class="text-center py-2 text-sm">24</div>
                        <!-- 有美食记录的日期 -->
                        <div class="text-center py-2 text-sm relative">
                            <span>25</span>
                            <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                        </div>
                        <div class="text-center py-2 text-sm">26</div>
                        <div class="text-center py-2 text-sm">27</div>
                        <!-- 今天 -->
                        <div class="text-center py-2 text-sm font-medium text-primary relative">
                            <span>28</span>
                            <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                        </div>
                        <div class="text-center py-2 text-sm">29</div>
                        <div class="text-center py-2 text-sm">30</div>
                        <div class="text-center py-2 text-sm">31</div>
                        <!-- 下月日期 -->
                        <div class="text-center py-2 text-gray-300 text-sm">1</div>
                        <div class="text-center py-2 text-gray-300 text-sm">2</div>
                        <div class="text-center py-2 text-gray-300 text-sm">3</div>
                        <div class="text-center py-2 text-gray-300 text-sm">4</div>
                    </div>
                </div>

                <!-- 选中日期的美食记录 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <h3 class="font-medium mb-4">1月28日的美食</h3>
                    <!-- 美食记录卡片 -->
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 rounded-lg overflow-hidden mr-3">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20strawberry%20cake%20with%20fresh%20strawberries%20on%20top%2C%20soft%20lighting%2C%20delicious%20looking&image_size=square" alt="草莓蛋糕" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-sm">自制草莓蛋糕</h4>
                            <p class="text-xs text-gray-500 mt-1">14:30</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-16 h-16 rounded-lg overflow-hidden mr-3">
                            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=latte%20art%20coffee%20in%20a%20white%20cup%2C%20cozy%20cafe%20setting%2C%20soft%20lighting&image_size=square" alt="拿铁咖啡" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-sm">街角咖啡店</h4>
                            <p class="text-xs text-gray-500 mt-1">09:15</p>
                        </div>
                    </div>
                </div>

                <!-- 月度统计概览 -->
                <div class="bg-white rounded-xl p-4 card-shadow">
                    <h3 class="font-medium mb-4">1月概览</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-neutral rounded-lg p-4">
                            <p class="text-sm text-gray-500">本月记录</p>
                            <p class="text-2xl font-semibold text-primary mt-1">12</p>
                        </div>
                        <div class="bg-neutral rounded-lg p-4">
                            <p class="text-sm text-gray-500">自制美食</p>
                            <p class="text-2xl font-semibold text-primary mt-1">8</p>
                        </div>
                        <div class="bg-neutral rounded-lg p-4">
                            <p class="text-sm text-gray-500">外出就餐</p>
                            <p class="text-2xl font-semibold text-primary mt-1">4</p>
                        </div>
                        <div class="bg-neutral rounded-lg p-4">
                            <p class="text-sm text-gray-500">连续记录</p>
                            <p class="text-2xl font-semibold text-primary mt-1">7天</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindStatsEvents(app);
}

function bindStatsEvents(app) {
    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            app.navigateTo('home');
        });
    }
}
