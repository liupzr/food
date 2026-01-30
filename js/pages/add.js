export function renderAddPage(container, app) {
    container.innerHTML = `
        <!-- 添加美食记录页 -->
        <div id="add" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <button class="text-dark opacity-70 back-btn">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h1 class="text-xl font-semibold text-primary">添加美食记录</h1>
                    <button class="text-primary font-medium" id="save-btn">
                        保存
                    </button>
                </div>
            </header>

            <main class="px-4 py-6">
                <!-- 图片上传区域 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">美食图片</h3>
                    <div class="grid grid-cols-3 gap-3">
                        <div class="aspect-square bg-neutral rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <i class="fa fa-camera text-gray-400 text-2xl"></i>
                        </div>
                        <div class="aspect-square bg-neutral rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <i class="fa fa-camera text-gray-400 text-2xl"></i>
                        </div>
                        <div class="aspect-square bg-neutral rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <i class="fa fa-camera text-gray-400 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- 美食名称 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">美食名称</h3>
                    <input type="text" placeholder="给美食起个名字吧" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50">
                </div>

                <!-- 备注 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">备注</h3>
                    <textarea placeholder="添加一些备注吧，比如制作过程、口感等" rows="4" class="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
                </div>

                <!-- 分类选择 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">分类</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-3 py-1 bg-primary rounded-full text-white">自制</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">外出</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">主食</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">配菜</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">汤品</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">甜点</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">饮品</span>
                        <span class="text-xs px-3 py-1 bg-neutral rounded-full">其他</span>
                    </div>
                </div>

                <!-- AI功能入口 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-3">AI 功能</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <i class="fa fa-star text-primary"></i>
                                </div>
                                <span class="text-sm">AI 评分</span>
                            </div>
                            <i class="fa fa-chevron-right text-gray-400"></i>
                        </div>
                        <div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                                    <i class="fa fa-pencil text-secondary"></i>
                                </div>
                                <span class="text-sm">AI 文案</span>
                            </div>
                            <i class="fa fa-chevron-right text-gray-400"></i>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindAddEvents(app);
}

function bindAddEvents(app) {
    // 保存按钮点击事件
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            alert('保存成功！');
            app.navigateTo('home');
        });
    }

    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            app.navigateTo('home');
        });
    }
}
