// 食谱详情页面模块
export function renderRecipeDetailPage(container, app) {
    container.innerHTML = `
        <div class="recipe-detail-page">
            <!-- 顶部导航栏 -->
            <header class="bg-white py-3 px-4 flex items-center justify-between shadow-sm">
                <button class="back-btn text-dark">
                    <i class="fa fa-arrow-left text-lg"></i>
                </button>
                <h1 class="text-lg font-medium">食谱详情</h1>
                <div class="w-8"></div>
            </header>
            
            <!-- 食谱图片 -->
            <div class="recipe-image w-full h-48 bg-gray-200 flex items-center justify-center">
                <i class="fa fa-cutlery text-4xl text-gray-400"></i>
            </div>
            
            <!-- 食谱信息 -->
            <div class="recipe-info p-4 bg-white">
                <h2 class="text-xl font-bold mb-2">番茄炒蛋</h2>
                <div class="recipe-meta flex items-center text-sm text-gray-500 mb-4">
                    <span class="mr-4"><i class="fa fa-clock-o mr-1"></i> 15分钟</span>
                    <span><i class="fa fa-fire mr-1"></i> 250大卡</span>
                </div>
                <div class="recipe-stats flex justify-between mb-4">
                    <div class="stat-item text-center">
                        <div class="stat-value text-lg font-bold text-primary">4.8</div>
                        <div class="stat-label text-xs text-gray-500">美味度</div>
                    </div>
                    <div class="stat-item text-center">
                        <div class="stat-value text-lg font-bold text-secondary">4.5</div>
                        <div class="stat-label text-xs text-gray-500">简易度</div>
                    </div>
                    <div class="stat-item text-center">
                        <div class="stat-value text-lg font-bold text-accent">4.7</div>
                        <div class="stat-label text-xs text-gray-500">健康度</div>
                    </div>
                </div>
            </div>
            
            <!-- 食材列表 -->
            <div class="ingredients-section mt-3 p-4 bg-white">
                <h3 class="text-lg font-medium mb-3">食材</h3>
                <ul class="ingredients-list">
                    <li class="ingredient-item flex justify-between items-center py-2 border-b border-gray-100">
                        <span>番茄</span>
                        <span class="text-gray-500">2个</span>
                    </li>
                    <li class="ingredient-item flex justify-between items-center py-2 border-b border-gray-100">
                        <span>鸡蛋</span>
                        <span class="text-gray-500">3个</span>
                    </li>
                    <li class="ingredient-item flex justify-between items-center py-2 border-b border-gray-100">
                        <span>葱花</span>
                        <span class="text-gray-500">适量</span>
                    </li>
                    <li class="ingredient-item flex justify-between items-center py-2">
                        <span>盐</span>
                        <span class="text-gray-500">适量</span>
                    </li>
                </ul>
            </div>
            
            <!-- 做法步骤 -->
            <div class="steps-section mt-3 p-4 bg-white mb-20">
                <h3 class="text-lg font-medium mb-3">做法</h3>
                <div class="steps-list">
                    <div class="step-item mb-4">
                        <div class="step-number bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">1</div>
                        <div class="step-content">
                            <p>番茄洗净切块，鸡蛋打散备用</p>
                        </div>
                    </div>
                    <div class="step-item mb-4">
                        <div class="step-number bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">2</div>
                        <div class="step-content">
                            <p>热锅倒油，倒入蛋液炒熟盛出</p>
                        </div>
                    </div>
                    <div class="step-item mb-4">
                        <div class="step-number bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">3</div>
                        <div class="step-content">
                            <p>锅中留底油，放入番茄炒软出汁</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">4</div>
                        <div class="step-content">
                            <p>加入炒好的鸡蛋，加盐调味，撒上葱花即可</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 绑定事件
    bindRecipeDetailEvents(container, app);
}

function bindRecipeDetailEvents(container, app) {
    // 绑定返回按钮事件
    container.querySelector('.back-btn').addEventListener('click', () => {
        app.renderPage('menu');
    });
}
