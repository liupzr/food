// 分享页面模块
export function renderSharePage(container, app) {
    container.innerHTML = `
        <div class="share-page">
            <!-- 顶部导航栏 -->
            <header class="bg-white py-3 px-4 flex items-center justify-between shadow-sm">
                <button class="back-btn text-dark transition-transform hover:scale-105">
                    <i class="fa fa-arrow-left text-lg"></i>
                </button>
                <h1 class="text-lg font-medium">分享美食</h1>
                <div class="w-8"></div>
            </header>
            
            <!-- 自动生成美食长图 -->
            <div class="food-image-section p-4 bg-white mt-3 rounded-xl mx-3 shadow-sm">
                <div class="section-header flex items-center justify-between mb-4">
                    <h2 class="text-base font-medium">美食长图</h2>
                    <button class="regenerate-btn text-sm text-primary flex items-center transition-all hover:translate-x-1">
                        <i class="fa fa-refresh mr-1 transition-transform hover:rotate-180"></i> 重新生成
                    </button>
                </div>
                <div class="food-image-container bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-inner">
                    <div class="food-image w-full h-80 bg-white rounded-lg mb-4 flex items-center justify-center shadow-md overflow-hidden">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20chinese%20food%20dish%20with%20tomatoes%20and%20eggs%20on%20a%20white%20plate%2C%20professional%20food%20photography%2C%20bright%20lighting%2C%20vibrant%20colors&image_size=portrait_4_3" 
                             alt="美食长图" 
                             class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
                    </div>
                    <div class="image-info text-center">
                        <p class="text-sm text-gray-600 mb-1 font-medium">自动生成的美食长图</p>
                        <p class="text-xs text-gray-400">包含你的美食照片和制作信息</p>
                    </div>
                </div>
            </div>
            
            <!-- AI生成文案 -->
            <div class="ai-copy-section p-4 bg-white mt-4 rounded-xl mx-3 shadow-sm">
                <div class="section-header flex items-center justify-between mb-4">
                    <h2 class="text-base font-medium">AI文案</h2>
                    <div class="flex items-center gap-2">
                        <select class="copy-style-select text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                            <option value="default">默认风格</option>
                            <option value="professional">专业美食家</option>
                            <option value="casual">轻松随意</option>
                            <option value="poetic">文艺诗意</option>
                        </select>
                        <button class="generate-copy-btn text-sm text-primary flex items-center transition-all hover:translate-x-1">
                            <i class="fa fa-magic mr-1 text-primary"></i> 生成文案
                        </button>
                    </div>
                </div>
                <div class="copy-container">
                    <div class="copy-textarea-container bg-gray-50 rounded-lg p-4 shadow-inner">
                        <textarea class="copy-textarea w-full border-none bg-transparent resize-none focus:outline-none" rows="4" placeholder="点击上方按钮，让AI为你生成精彩文案..."></textarea>
                    </div>
                    <div class="copy-actions flex justify-end mt-3">
                        <button class="copy-btn text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-lg flex items-center transition-all hover:bg-primary/20">
                            <i class="fa fa-copy mr-1"></i> 复制
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- 社交媒体分享 -->
            <div class="social-share-section p-4 bg-white mt-4 rounded-xl mx-3 shadow-sm mb-24">
                <h2 class="text-base font-medium mb-4">分享到</h2>
                <div class="social-platforms grid grid-cols-4 gap-4">
                    <button class="social-btn flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg transition-all hover:border-green-400 hover:bg-green-50 hover:-translate-y-1 shadow-sm">
                        <div class="social-icon w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-2 transition-all hover:scale-110">
                            <i class="fa fa-weixin text-2xl text-green-600"></i>
                        </div>
                        <span class="social-name text-sm">朋友圈</span>
                    </button>
                    <button class="social-btn flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg transition-all hover:border-red-400 hover:bg-red-50 hover:-translate-y-1 shadow-sm">
                        <div class="social-icon w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-2 transition-all hover:scale-110">
                            <i class="fa fa-book text-2xl text-red-600"></i>
                        </div>
                        <span class="social-name text-sm">小红书</span>
                    </button>
                    <button class="social-btn flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg transition-all hover:border-blue-400 hover:bg-blue-50 hover:-translate-y-1 shadow-sm">
                        <div class="social-icon w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-2 transition-all hover:scale-110">
                            <i class="fa fa-weibo text-2xl text-blue-600"></i>
                        </div>
                        <span class="social-name text-sm">微博</span>
                    </button>
                    <button class="social-btn flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg transition-all hover:border-purple-400 hover:bg-purple-50 hover:-translate-y-1 shadow-sm">
                        <div class="social-icon w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-2 transition-all hover:scale-110">
                            <i class="fa fa-ellipsis-h text-2xl text-purple-600"></i>
                        </div>
                        <span class="social-name text-sm">更多</span>
                    </button>
                </div>
                <div class="quick-share mt-6">
                    <button class="quick-share-btn w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                        <i class="fa fa-share-alt mr-2"></i> 一键分享到所有平台
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // 绑定事件
    bindShareEvents(container, app);
}

function bindShareEvents(container, app) {
    // 绑定返回按钮事件
    container.querySelector('.back-btn').addEventListener('click', () => {
        app.renderPage('plan');
    });
    
    // 绑定重新生成图片按钮事件
    const regenerateBtn = container.querySelector('.regenerate-btn');
    regenerateBtn.addEventListener('click', () => {
        const foodImage = container.querySelector('.food-image');
        foodImage.classList.add('animate-pulse');
        
        // 模拟图片生成过程
        setTimeout(() => {
            // 随机生成不同的美食图片
            const foodPrompts = [
                'delicious chinese food dish with stir-fried vegetables and rice',
                'traditional chinese dumplings with dipping sauce',
                'homemade noodles with meat sauce',
                'chinese style steamed fish with ginger and scallions'
            ];
            const randomPrompt = foodPrompts[Math.floor(Math.random() * foodPrompts.length)];
            const foodImageElement = foodImage.querySelector('img');
            foodImageElement.src = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(randomPrompt)}&image_size=portrait_4_3`;
            
            foodImage.classList.remove('animate-pulse');
            
            // 显示生成成功的动画效果
            foodImage.classList.add('animate-bounce');
            setTimeout(() => {
                foodImage.classList.remove('animate-bounce');
            }, 500);
        }, 1000);
    });
    
    // 绑定生成文案按钮事件
    const generateCopyBtn = container.querySelector('.generate-copy-btn');
    const copyTextarea = container.querySelector('.copy-textarea');
    const copyStyleSelect = container.querySelector('.copy-style-select');
    
    generateCopyBtn.addEventListener('click', () => {
        copyTextarea.placeholder = '生成中...';
        
        // 根据选择的风格生成不同的文案
        const style = copyStyleSelect.value;
        let generatedCopy = '';
        
        setTimeout(() => {
            switch(style) {
                case 'professional':
                    generatedCopy = '【专业品鉴】这道番茄炒蛋堪称家常菜的典范，蛋液与番茄的完美融合，酸甜适口，色泽诱人。烹饪工艺精湛，火候掌握恰到好处，蛋液嫩滑，番茄多汁，是一道不可多得的家常美味。\n\n#美食分享 #专业品鉴 #家常菜';
                    break;
                case 'casual':
                    generatedCopy = '今天炒了盘番茄炒蛋，味道绝了！酸酸甜甜的，超级下饭，简单又好吃～\n\n做法超简单：\n1. 番茄切块，鸡蛋打散\n2. 先炒鸡蛋盛出来\n3. 再炒番茄出汁\n4. 把鸡蛋倒回去一起炒\n5. 加盐调味就好啦\n\n大家也试试吧！ #美食分享 #家常菜 #简单好吃';
                    break;
                case 'poetic':
                    generatedCopy = '【味蕾的诗意】\n番茄与鸡蛋的邂逅，\n是红色与黄色的交织，\n是酸甜与鲜香的融合。\n\n简单的食材，\n在锅铲的舞动中，\n演绎出最动人的家常味道。\n\n每一口都是家的温暖，\n每一勺都是生活的诗意。\n\n#美食分享 #生活美学 #家常菜';
                    break;
                default:
                    generatedCopy = '今天做了一道超美味的番茄炒蛋，色泽诱人，酸甜可口，简单又营养！\n\n做法：\n1. 番茄切块，鸡蛋打散\n2. 热锅倒油，炒鸡蛋盛出\n3. 锅中留底油，炒番茄出汁\n4. 加入鸡蛋，加盐调味\n5. 撒上葱花出锅\n\n#美食分享 #家常菜 #厨艺展示';
            }
            
            copyTextarea.value = generatedCopy;
            copyTextarea.placeholder = '点击上方按钮，让AI为你生成精彩文案...';
            
            // 显示生成成功的动画效果
            const copyContainer = container.querySelector('.copy-textarea-container');
            copyContainer.classList.add('bg-green-50');
            setTimeout(() => {
                copyContainer.classList.remove('bg-green-50');
            }, 1000);
        }, 1500);
    });
    
    // 绑定复制按钮事件
    const copyBtn = container.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
        const copyTextarea = container.querySelector('.copy-textarea');
        if (copyTextarea.value) {
            copyTextarea.select();
            document.execCommand('copy');
            
            // 显示复制成功的反馈
            copyBtn.innerHTML = '<i class="fa fa-check mr-1"></i> 已复制';
            copyBtn.classList.remove('bg-primary/10', 'text-primary');
            copyBtn.classList.add('bg-green-100', 'text-green-600');
            
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fa fa-copy mr-1"></i> 复制';
                copyBtn.classList.remove('bg-green-100', 'text-green-600');
                copyBtn.classList.add('bg-primary/10', 'text-primary');
            }, 1500);
        } else {
            alert('请先生成文案！');
        }
    });
    
    // 绑定社交媒体按钮事件
    const socialBtns = container.querySelectorAll('.social-btn');
    const platforms = ['朋友圈', '小红书', '微博', '更多平台'];
    const platformColors = ['bg-green-100 text-green-600', 'bg-red-100 text-red-600', 'bg-blue-100 text-blue-600', 'bg-purple-100 text-purple-600'];
    
    socialBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // 添加点击动画效果
            btn.classList.add('scale-95');
            setTimeout(() => {
                btn.classList.remove('scale-95');
            }, 150);
            
            // 显示分享成功的反馈
            alert(`分享到${platforms[index]}成功！`);
        });
    });
    
    // 绑定一键分享按钮事件
    const quickShareBtn = container.querySelector('.quick-share-btn');
    quickShareBtn.addEventListener('click', () => {
        quickShareBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 分享中...';
        quickShareBtn.classList.add('opacity-80');
        
        setTimeout(() => {
            quickShareBtn.innerHTML = '<i class="fa fa-check mr-2"></i> 分享成功！';
            quickShareBtn.classList.remove('opacity-80');
            quickShareBtn.classList.add('bg-green-500');
            
            setTimeout(() => {
                quickShareBtn.innerHTML = '<i class="fa fa-share-alt mr-2"></i> 一键分享到所有平台';
                quickShareBtn.classList.remove('bg-green-500');
                quickShareBtn.classList.add('bg-gradient-to-r', 'from-primary', 'to-primary/80');
            }, 1500);
        }, 2000);
    });
}
