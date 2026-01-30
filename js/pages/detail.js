export function renderDetailPage(container, app) {
    container.innerHTML = `
        <!-- 美食详情页 -->
        <div id="detail" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <button class="text-dark opacity-70 back-btn">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h1 class="text-xl font-semibold text-primary">美食详情</h1>
                    <button class="text-primary font-medium" id="detail-edit-btn">
                        编辑
                    </button>
                </div>
            </header>

            <main class="px-4 py-6">
                <!-- 图片展示 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">美食图片</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=homemade%20strawberry%20cake%20with%20fresh%20strawberries%20on%20top%2C%20soft%20lighting%2C%20delicious%20looking&image_size=square" alt="草莓蛋糕" class="w-full h-48 object-cover rounded-lg">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20strawberry%20cake%20texture%2C%20cream%20frosting%2C%20fresh%20berries&image_size=square" alt="草莓蛋糕细节" class="w-full h-48 object-cover rounded-lg">
                    </div>
                </div>

                <!-- 美食名称 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">美食名称</h3>
                    <input type="text" value="自制草莓蛋糕" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" disabled>
                </div>

                <!-- 备注 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">备注</h3>
                    <textarea rows="4" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" disabled>第一次尝试做蛋糕，味道还不错！草莓是早上刚买的，很新鲜。</textarea>
                </div>

                <!-- 分类选择 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">分类</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-3 py-1 bg-primary rounded-full text-white">自制</span>
                        <span class="text-xs px-3 py-1 bg-secondary rounded-full">甜点</span>
                    </div>
                </div>

                <!-- 时间信息 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">时间信息</h3>
                    <div class="bg-white rounded-xl p-4 border border-gray-200">
                        <p class="text-sm text-gray-600">记录时间：2026年1月28日 14:30</p>
                    </div>
                </div>

                <!-- AI评分 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">AI 评分</h3>
                    <div class="bg-white rounded-xl p-4 border border-gray-200">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm">美食颜值</span>
                            <span class="text-sm font-medium">92分</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <div class="bg-primary h-2 rounded-full" style="width: 92%"></div>
                        </div>
                        <p class="text-sm text-gray-600">哇！这个草莓蛋糕看起来太诱人了！粉粉嫩嫩的颜色，新鲜的草莓点缀，简直就是甜点界的颜值担当～味道肯定也很棒吧！</p>
                    </div>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindDetailEvents(app);
}

function bindDetailEvents(app) {
    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            app.navigateTo('home');
        });
    }

    // 编辑按钮点击事件
    const detailEditBtn = document.getElementById('detail-edit-btn');
    if (detailEditBtn) {
        detailEditBtn.addEventListener('click', () => {
            alert('进入编辑模式');
        });
    }
}
