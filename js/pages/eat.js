// 吃啥页面模块
export function renderEatPage(container, app) {
    container.innerHTML = `
        <div class="eat-page">
            <!-- 顶部导航栏 -->
            <header class="bg-white py-3 px-4 flex items-center justify-between shadow-sm">
                <button class="back-btn text-dark">
                    <i class="fa fa-arrow-left text-lg"></i>
                </button>
                <h1 class="text-lg font-medium">吃啥</h1>
                <div class="w-8"></div>
            </header>
            
            <!-- 功能切换标签 -->
            <div class="tab-switcher bg-white px-4 py-3 border-b border-gray-100">
                <div class="flex space-x-6">
                    <button class="tab-btn active flex-1 text-center py-2 font-medium text-primary border-b-2 border-primary">随机选菜</button>
                    <button class="tab-btn flex-1 text-center py-2 font-medium text-gray-500">AI定制</button>
                </div>
            </div>
            
            <!-- 随机选菜内容 -->
            <div class="random-tab-content">
                <!-- 转盘区域 -->
                <div class="wheel-container bg-white p-6 mt-3">
                    <div class="wheel-wrapper relative w-full h-72 mb-8">
                        <!-- 指针 -->
                        <div class="wheel-pointer absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-20">
                            <div class="pointer-triangle w-0 h-0 border-left-10 border-right-10 border-bottom-20 border-left-transparent border-right-transparent border-bottom-primary shadow-md"></div>
                            <div class="pointer-base absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-md"></div>
                        </div>
                        
                        <!-- 转盘 -->
                        <div class="wheel absolute inset-0 rounded-full border-4 border-gray-100 shadow-xl">
                            <div class="wheel-inner relative w-full h-full rounded-full overflow-hidden transition-transform duration-3000 ease-out">
                                <!-- 转盘扇区 -->
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(0deg); clip-path: polygon(50% 50%, 100% 0%, 100% 50%); background-color: #F8BBD0;">
                                    <div class="sector-content absolute top-1/4 right-1/4 transform -translate-y-1/2 rotate-30">
                                        <span class="text-white font-medium text-sm">川菜</span>
                                    </div>
                                </div>
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(60deg); clip-path: polygon(50% 50%, 100% 50%, 86.6% 100%); background-color: #E1F5FE;">
                                    <div class="sector-content absolute bottom-1/4 right-1/4 transform translate-y-1/2 rotate-120">
                                        <span class="text-dark font-medium text-sm">粤菜</span>
                                    </div>
                                </div>
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(120deg); clip-path: polygon(50% 50%, 86.6% 100%, 13.4% 100%); background-color: #E8F5E8;">
                                    <div class="sector-content absolute bottom-1/4 left-1/4 transform translate-y-1/2 -rotate-120">
                                        <span class="text-dark font-medium text-sm">鲁菜</span>
                                    </div>
                                </div>
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(180deg); clip-path: polygon(50% 50%, 13.4% 100%, 0% 50%); background-color: #FFE0B2;">
                                    <div class="sector-content absolute bottom-1/4 left-1/4 transform translate-y-1/2 -rotate-60">
                                        <span class="text-dark font-medium text-sm">湘菜</span>
                                    </div>
                                </div>
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(240deg); clip-path: polygon(50% 50%, 0% 50%, 0% 0%); background-color: #C8E6C9;">
                                    <div class="sector-content absolute top-1/4 left-1/4 transform -translate-y-1/2 rotate-60">
                                        <span class="text-dark font-medium text-sm">闽菜</span>
                                    </div>
                                </div>
                                <div class="wheel-sector absolute inset-0 transform-origin-center flex items-center justify-center" style="transform: rotate(300deg); clip-path: polygon(50% 50%, 0% 0%, 100% 0%); background-color: #B3E5FC;">
                                    <div class="sector-content absolute top-1/4 right-1/4 transform -translate-y-1/2 -rotate-30">
                                        <span class="text-dark font-medium text-sm">浙菜</span>
                                    </div>
                                </div>
                                
                                <!-- 菜系图标 -->
                                <div class="cuisine-icons absolute inset-0 rounded-full">
                                    <div class="icon-item absolute top-1/4 right-1/4 transform -translate-y-1/2 translate-x-1/4 text-white">
                                        <i class="fa fa-fire text-lg"></i>
                                    </div>
                                    <div class="icon-item absolute bottom-1/4 right-1/4 transform translate-y-1/2 translate-x-1/4 text-dark">
                                        <i class="fa fa-star text-lg"></i>
                                    </div>
                                    <div class="icon-item absolute bottom-1/4 left-1/4 transform translate-y-1/2 -translate-x-1/4 text-dark">
                                        <i class="fa fa-leaf text-lg"></i>
                                    </div>
                                    <div class="icon-item absolute bottom-1/4 left-1/4 transform translate-y-1/2 -translate-x-1/4 text-dark">
                                        <i class="fa fa-heart text-lg"></i>
                                    </div>
                                    <div class="icon-item absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/4 text-dark">
                                        <i class="fa fa-moon-o text-lg"></i>
                                    </div>
                                    <div class="icon-item absolute top-1/4 right-1/4 transform -translate-y-1/2 translate-x-1/4 text-dark">
                                        <i class="fa fa-sun-o text-lg"></i>
                                    </div>
                                </div>
                                
                                <!-- 转盘中心 -->
                                <div class="wheel-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                                    <div class="inner-circle w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                                        <i class="fa fa-cutlery text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 按钮区域 -->
                    <button class="spin-btn w-full py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-primary/90 transition-all duration-300 active:scale-95">
                        <i class="fa fa-refresh mr-2"></i> 开始随机
                    </button>
                </div>
                
                <!-- 推荐结果 -->
                <div class="recommendation-container bg-white p-4 mt-3 mb-20">
                    <h3 class="text-base font-medium mb-3">推荐结果</h3>
                    <div class="recommendation-result text-center py-8 border border-dashed border-gray-200 rounded-lg">
                        <i class="fa fa-cutlery text-3xl text-primary mb-3"></i>
                        <p class="text-gray-500 mb-2">点击上方按钮开始随机</p>
                        <p class="text-sm text-gray-400">让我们帮你决定今天吃什么</p>
                    </div>
                </div>
            </div>
            
            <!-- AI定制内容 -->
            <div class="ai-tab-content hidden">
                <!-- AI定制表单 -->
                <div class="ai-form-container bg-white p-4 mt-3">
                    <h3 class="text-base font-medium mb-3">AI定制菜谱</h3>
                    
                    <!-- 食材输入 -->
                    <div class="form-group mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">现有食材</label>
                        <textarea class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" rows="3" placeholder="请输入你现有的食材，例如：鸡蛋、西红柿、黄瓜..."></textarea>
                    </div>
                    
                    <!-- 口味偏好 -->
                    <div class="form-group mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">口味偏好</label>
                        <div class="flavor-tags flex flex-wrap gap-2">
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">辣</button>
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">甜</button>
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">酸</button>
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">咸</button>
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">清淡</button>
                            <button class="flavor-tag px-3 py-1 border border-gray-200 rounded-full text-sm">重口味</button>
                        </div>
                    </div>
                    
                    <!-- 其他要求 -->
                    <div class="form-group mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-1">其他要求</label>
                        <input type="text" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：健康、快手、低卡路里...">
                    </div>
                    
                    <!-- 生成按钮 -->
                    <button class="generate-btn w-full py-3 bg-primary text-white rounded-lg font-medium">
                        <i class="fa fa-magic mr-2"></i> 生成菜谱
                    </button>
                </div>
                
                <!-- AI生成结果 -->
                <div class="ai-result-container bg-white p-4 mt-3 mb-20">
                    <h3 class="text-base font-medium mb-3">AI推荐</h3>
                    <div class="ai-result-placeholder text-center py-8 border border-dashed border-gray-200 rounded-lg">
                        <i class="fa fa-magic text-3xl text-primary mb-3"></i>
                        <p class="text-gray-500 mb-2">输入食材和要求，点击生成按钮</p>
                        <p class="text-sm text-gray-400">AI将为你定制专属菜谱</p>
                    </div>
                </div>
            </div>
            
            <!-- 菜谱详情模态框 -->
            <div class="recipe-modal fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center">
                <div class="modal-content bg-white rounded-lg w-5/6 max-w-md">
                    <div class="modal-header p-4 border-b flex items-center justify-between">
                        <h3 class="font-medium">菜谱详情</h3>
                        <button class="close-modal-btn text-gray-500">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body p-4 max-h-96 overflow-y-auto">
                        <!-- 菜谱图片 -->
                        <div class="recipe-image w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                        
                        <!-- 菜谱信息 -->
                        <h4 class="text-lg font-medium mb-2" id="modal-recipe-name">番茄炒蛋</h4>
                        <div class="recipe-meta flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-4"><i class="fa fa-clock-o mr-1"></i> 15分钟</span>
                            <span><i class="fa fa-fire mr-1"></i> 250大卡</span>
                        </div>
                        
                        <!-- 食材列表 -->
                        <h5 class="font-medium mb-2">食材</h5>
                        <ul class="ingredients-list mb-4 text-sm">
                            <li class="flex justify-between py-1">
                                <span>番茄</span>
                                <span class="text-gray-500">2个</span>
                            </li>
                            <li class="flex justify-between py-1">
                                <span>鸡蛋</span>
                                <span class="text-gray-500">3个</span>
                            </li>
                            <li class="flex justify-between py-1">
                                <span>葱花</span>
                                <span class="text-gray-500">适量</span>
                            </li>
                            <li class="flex justify-between py-1">
                                <span>盐</span>
                                <span class="text-gray-500">适量</span>
                            </li>
                        </ul>
                        
                        <!-- 制作步骤 -->
                        <h5 class="font-medium mb-2">制作步骤</h5>
                        <ol class="steps-list text-sm space-y-2">
                            <li class="flex">
                                <span class="step-number w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">1</span>
                                <span>番茄洗净切块，鸡蛋打散备用</span>
                            </li>
                            <li class="flex">
                                <span class="step-number w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">2</span>
                                <span>热锅倒油，倒入蛋液炒熟盛出</span>
                            </li>
                            <li class="flex">
                                <span class="step-number w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">3</span>
                                <span>锅中留底油，放入番茄炒软出汁</span>
                            </li>
                            <li class="flex">
                                <span class="step-number w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">4</span>
                                <span>加入炒好的鸡蛋，加盐调味，撒上葱花即可</span>
                            </li>
                        </ol>
                    </div>
                    <div class="modal-footer p-4 border-t flex justify-end">
                        <button class="cancel-btn px-4 py-2 text-gray-600 mr-2">关闭</button>
                        <button class="save-btn px-4 py-2 bg-primary text-white rounded">保存菜谱</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 绑定事件
    bindEatEvents(container, app);
}

// 绑定事件
function bindEatEvents(container, app) {
    // 绑定返回按钮事件
    container.querySelector('.back-btn').addEventListener('click', () => {
        app.renderPage('home');
    });
    
    // 绑定标签切换事件
    const tabBtns = container.querySelectorAll('.tab-btn');
    const randomTabContent = container.querySelector('.random-tab-content');
    const aiTabContent = container.querySelector('.ai-tab-content');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // 更新标签状态
            tabBtns.forEach(b => {
                b.classList.remove('active', 'text-primary', 'border-b-2', 'border-primary');
                b.classList.add('text-gray-500');
            });
            btn.classList.add('active', 'text-primary', 'border-b-2', 'border-primary');
            btn.classList.remove('text-gray-500');
            
            // 切换内容
            if (index === 0) {
                randomTabContent.classList.remove('hidden');
                aiTabContent.classList.add('hidden');
            } else {
                randomTabContent.classList.add('hidden');
                aiTabContent.classList.remove('hidden');
            }
        });
    });
    
    // 绑定转盘按钮事件
    const spinBtn = container.querySelector('.spin-btn');
    const wheel = container.querySelector('.wheel-inner');
    const recommendationResult = container.querySelector('.recommendation-result');
    
    spinBtn.addEventListener('click', () => {
        // 重置过渡效果
        wheel.style.transition = 'none';
        wheel.style.transform = 'rotate(0deg)';
        
        // 强制重排
        void wheel.offsetWidth;
        
        // 添加旋转动画
        const randomDegrees = 360 * 5 + Math.floor(Math.random() * 360);
        wheel.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)';
        wheel.style.transform = `rotate(${randomDegrees}deg)`;
        
        // 添加转盘发光效果
        wheel.classList.add('shadow-lg', 'shadow-primary/20');
        
        // 禁用按钮
        spinBtn.disabled = true;
        spinBtn.classList.add('opacity-70');
        spinBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 随机中...';
        
        // 模拟延迟，显示结果
        setTimeout(() => {
            // 恢复按钮状态
            spinBtn.disabled = false;
            spinBtn.classList.remove('opacity-70');
            spinBtn.innerHTML = '<i class="fa fa-refresh mr-2"></i> 开始随机';
            
            // 移除发光效果
            wheel.classList.remove('shadow-lg', 'shadow-primary/20');
            
            // 计算最终指向的菜系
            const normalizedDegrees = randomDegrees % 360;
            const cuisineIndex = Math.floor(normalizedDegrees / 60);
            const cuisines = ['川菜', '粤菜', '鲁菜', '湘菜', '闽菜', '浙菜'];
            const randomCuisine = cuisines[cuisineIndex];
            const dishes = {
                '川菜': '麻婆豆腐',
                '粤菜': '白切鸡',
                '鲁菜': '糖醋里脊',
                '湘菜': '红烧肉',
                '闽菜': '佛跳墙',
                '浙菜': '西湖醋鱼'
            };
            const randomDish = dishes[randomCuisine];
            
            // 显示推荐结果，添加动画效果
            recommendationResult.innerHTML = `
                <div class="recommendation-content animate-fade-in">
                    <div class="recommendation-dish text-center mb-4">
                        <div class="inline-block p-3 rounded-full bg-primary/10 mb-3">
                            <i class="fa fa-cutlery text-2xl text-primary"></i>
                        </div>
                        <h4 class="text-xl font-bold text-primary mb-2">${randomDish}</h4>
                        <p class="text-gray-500">${randomCuisine}</p>
                    </div>
                    <div class="recommendation-image w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                        <div class="w-full h-full flex items-center justify-center">
                            <i class="fa fa-cutlery text-4xl text-gray-300"></i>
                        </div>
                    </div>
                    <div class="recommendation-actions flex space-x-2">
                        <button class="action-btn flex-1 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                            <i class="fa fa-plus mr-1"></i> 添加到计划
                        </button>
                        <button class="action-btn flex-1 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                            <i class="fa fa-cutlery mr-1"></i> 查看菜谱
                        </button>
                    </div>
                </div>
            `;
            
            // 绑定查看菜谱按钮事件
            const viewRecipeBtn = recommendationResult.querySelector('.action-btn:last-child');
            viewRecipeBtn.addEventListener('click', () => {
                showRecipeModal(container, randomDish);
            });
            
            // 绑定添加到计划按钮事件
            const addToPlanBtn = recommendationResult.querySelector('.action-btn:first-child');
            addToPlanBtn.addEventListener('click', () => {
                app.renderPage('plan');
                alert(`已将${randomDish}添加到计划！`);
            });
        }, 4000);
    });
    
    // 绑定AI生成按钮事件
    const generateBtn = container.querySelector('.generate-btn');
    const aiResultPlaceholder = container.querySelector('.ai-result-placeholder');
    
    generateBtn.addEventListener('click', () => {
        // 禁用按钮
        generateBtn.disabled = true;
        generateBtn.classList.add('opacity-70');
        generateBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 生成中...';
        
        // 模拟AI生成过程
        setTimeout(() => {
            // 恢复按钮状态
            generateBtn.disabled = false;
            generateBtn.classList.remove('opacity-70');
            generateBtn.innerHTML = '<i class="fa fa-magic mr-2"></i> 生成菜谱';
            
            // 显示AI推荐结果
            const recommendedDishes = [
                { name: '番茄炒蛋', cuisine: '家常菜', time: '15分钟', calories: '250大卡' },
                { name: '酸辣土豆丝', cuisine: '川菜', time: '10分钟', calories: '180大卡' },
                { name: '蒜蓉西兰花', cuisine: '粤菜', time: '8分钟', calories: '120大卡' }
            ];
            
            aiResultPlaceholder.innerHTML = `
                <div class="ai-result-list">
                    ${recommendedDishes.map(dish => `
                        <div class="ai-dish-item p-3 border-b border-gray-100 last:border-0">
                            <div class="dish-header flex justify-between items-start mb-2">
                                <h4 class="font-medium">${dish.name}</h4>
                                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">${dish.cuisine}</span>
                            </div>
                            <div class="dish-meta flex text-xs text-gray-500 mb-3">
                                <span class="mr-4"><i class="fa fa-clock-o mr-1"></i> ${dish.time}</span>
                                <span><i class="fa fa-fire mr-1"></i> ${dish.calories}</span>
                            </div>
                            <button class="view-recipe-btn text-sm text-primary">
                                <i class="fa fa-cutlery mr-1"></i> 查看菜谱
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            
            // 绑定查看菜谱按钮事件
            const viewRecipeBtns = aiResultPlaceholder.querySelectorAll('.view-recipe-btn');
            viewRecipeBtns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    showRecipeModal(container, recommendedDishes[index].name);
                });
            });
        }, 2000);
    });
    
    // 绑定口味标签点击事件
    const flavorTags = container.querySelectorAll('.flavor-tag');
    flavorTags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('bg-primary');
            tag.classList.toggle('text-white');
            tag.classList.toggle('border-primary');
        });
    });
    
    // 绑定模态框事件
    const recipeModal = container.querySelector('.recipe-modal');
    const closeModalBtn = container.querySelector('.close-modal-btn');
    const cancelBtn = container.querySelector('.cancel-btn');
    const saveBtn = container.querySelector('.save-btn');
    
    function showRecipeModal(container, dishName) {
        const recipeModal = container.querySelector('.recipe-modal');
        const modalRecipeName = container.querySelector('#modal-recipe-name');
        modalRecipeName.textContent = dishName;
        recipeModal.classList.remove('hidden');
        recipeModal.classList.add('flex');
    }
    
    function closeRecipeModal() {
        recipeModal.classList.add('hidden');
        recipeModal.classList.remove('flex');
    }
    
    closeModalBtn.addEventListener('click', closeRecipeModal);
    cancelBtn.addEventListener('click', closeRecipeModal);
    
    // 绑定保存菜谱按钮事件
    saveBtn.addEventListener('click', () => {
        alert('菜谱保存成功！');
        closeRecipeModal();
    });
    
    // 点击模态框外部关闭
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            closeRecipeModal();
        }
    });
}
