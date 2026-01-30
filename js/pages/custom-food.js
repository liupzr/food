export function renderCustomFoodPage(container, app) {
    container.innerHTML = `
        <!-- 自定义添加菜品页面 -->
        <div id="custom-food" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <button class="text-dark opacity-70 back-btn">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h1 class="text-xl font-semibold text-primary">自定义添加</h1>
                    <button class="text-primary font-medium" id="custom-save-btn">
                        保存
                    </button>
                </div>
            </header>

            <main class="px-4 py-6">
                <!-- 菜品图片 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">菜品图片</h3>
                    <div class="aspect-square bg-neutral rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                        <i class="fa fa-camera text-gray-400 text-2xl"></i>
                    </div>
                    <p class="text-xs text-gray-500">点击上传菜品图片</p>
                </div>

                <!-- 菜品名称 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">菜品名称</h3>
                    <input type="text" placeholder="输入菜品名称" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50">
                </div>

                <!-- 菜品分类 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">菜品分类</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">主食</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">配菜</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">汤品</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">甜点</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">饮品</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">其他</span>
                    </div>
                </div>

                <!-- 制作步骤 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">制作步骤</h3>
                    <div class="bg-white rounded-xl border border-gray-200">
                        <div class="p-4">
                            <div class="flex items-start mb-3">
                                <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-3 mt-0.5">1</div>
                                <input type="text" placeholder="输入步骤描述" class="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                            </div>
                            <div class="flex items-start mb-3">
                                <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-3 mt-0.5">2</div>
                                <input type="text" placeholder="输入步骤描述" class="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                            </div>
                            <button class="flex items-center text-primary text-sm">
                                <i class="fa fa-plus mr-1"></i> 添加步骤
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 备注 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">备注</h3>
                    <textarea placeholder="添加备注信息" rows="3" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindCustomFoodEvents(app);
}

function bindCustomFoodEvents(app) {
    // 保存按钮点击事件
    const customSaveBtn = document.getElementById('custom-save-btn');
    if (customSaveBtn) {
        customSaveBtn.addEventListener('click', () => {
            alert('保存成功！');
            app.navigateTo('menu');
        });
    }

    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            app.navigateTo('menu');
        });
    }
}
