export function renderProfilePage(container, app) {
    container.innerHTML = `
        <!-- 个人中心页 -->
        <div id="profile" class="page active">
            <!-- 顶部导航栏 -->
            <header class="sticky top-0 z-10 bg-white nav-shadow">
                <div class="flex items-center justify-between px-4 py-3">
                    <h1 class="text-xl font-semibold text-primary">我的</h1>
                    <button class="text-dark opacity-70">
                        <i class="fa fa-cog text-lg"></i>
                    </button>
                </div>
            </header>

            <!-- 个人信息 -->
            <div class="bg-white p-6 mb-4 card-shadow">
                <div class="flex items-center">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20young%20person%20profile%20photo%2C%20natural%20smile%2C%20soft%20lighting&image_size=square" alt="个人头像" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h3 class="font-medium">用户名</h3>
                        <p class="text-xs text-gray-500 mt-1">点击编辑个人资料</p>
                    </div>
                </div>
            </div>

            <!-- 米粒积分 -->
            <div class="bg-white p-4 mb-4 card-shadow">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <i class="fa fa-star text-primary"></i>
                        </div>
                        <div>
                            <h3 class="font-medium">我的米粒</h3>
                            <p class="text-xs text-gray-500 mt-1">可用积分：<span id="rice-count">280</span></p>
                        </div>
                    </div>
                    <button class="text-primary text-sm">
                        查看明细
                    </button>
                </div>
            </div>

            <!-- 签到得米粒 -->
            <div class="bg-white p-4 mb-4 card-shadow">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                            <i class="fa fa-calendar-check-o text-yellow-500"></i>
                        </div>
                        <div>
                            <h3 class="font-medium">每日签到</h3>
                            <p class="text-xs text-gray-500 mt-1">连续签到：<span id="checkin-streak">0</span> 天</p>
                        </div>
                    </div>
                </div>
                <div id="checkin-section" class="mb-3">
                    <button id="checkin-btn" class="w-full py-3 bg-primary text-white rounded-lg font-medium transition-all hover:shadow-md">
                        立即签到 +10 米粒
                    </button>
                </div>
                <div class="checkin-calendar grid grid-cols-7 gap-1 text-center text-xs">
                    <div class="calendar-day p-2">日</div>
                    <div class="calendar-day p-2">一</div>
                    <div class="calendar-day p-2">二</div>
                    <div class="calendar-day p-2">三</div>
                    <div class="calendar-day p-2">四</div>
                    <div class="calendar-day p-2">五</div>
                    <div class="calendar-day p-2">六</div>
                    <div class="calendar-date p-2 text-gray-400">28</div>
                    <div class="calendar-date p-2 text-gray-400">29</div>
                    <div class="calendar-date p-2 text-gray-400">30</div>
                    <div class="calendar-date p-2 text-gray-400">31</div>
                    <div class="calendar-date p-2 bg-primary/20 text-primary rounded-full">1</div>
                    <div class="calendar-date p-2">2</div>
                    <div class="calendar-date p-2">3</div>
                    <div class="calendar-date p-2">4</div>
                    <div class="calendar-date p-2">5</div>
                    <div class="calendar-date p-2">6</div>
                    <div class="calendar-date p-2">7</div>
                    <div class="calendar-date p-2">8</div>
                    <div class="calendar-date p-2">9</div>
                    <div class="calendar-date p-2">10</div>
                </div>
            </div>

            <!-- 看广告赚米粒 -->
            <div class="bg-white p-4 mb-4 card-shadow">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <i class="fa fa-play-circle text-blue-500"></i>
                        </div>
                        <div>
                            <h3 class="font-medium">看广告赚米粒</h3>
                            <p class="text-xs text-gray-500 mt-1">今日剩余：<span id="ad-remaining">3</span>/3 次</p>
                        </div>
                    </div>
                </div>
                <div id="ad-section" class="mb-3">
                    <div class="ad-container bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center mb-4">
                        <div class="ad-placeholder w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <i class="fa fa-video-camera text-4xl text-gray-400"></i>
                        </div>
                        <button id="watch-ad-btn" class="w-full py-3 bg-blue-500 text-white rounded-lg font-medium transition-all hover:shadow-md">
                            观看广告 +20 米粒
                        </button>
                    </div>
                    <div class="ad-rules text-xs text-gray-500">
                        <p>• 每次观看广告可获得 20 米粒奖励</p>
                        <p>• 每日最多可观看 3 次广告</p>
                        <p>• 广告时长约 30 秒，请耐心观看</p>
                    </div>
                </div>
            </div>

            <!-- 功能入口 -->
            <main class="px-4 py-2">
                <!-- AI工具 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <h3 class="font-medium mb-4">AI 工具</h3>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="flex flex-col items-center">
                            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                <i class="fa fa-camera text-primary text-xl"></i>
                            </div>
                            <p class="text-xs text-center">美食评分</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                                <i class="fa fa-pencil text-secondary text-xl"></i>
                            </div>
                            <p class="text-xs text-center">文案生成</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                                <i class="fa fa-lightbulb-o text-accent text-xl"></i>
                            </div>
                            <p class="text-xs text-center">今天吃点啥</p>
                        </div>
                    </div>
                </div>

                <!-- 其他功能 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <div class="flex items-center justify-between py-3 border-b border-gray-100">
                        <div class="flex items-center">
                            <i class="fa fa-list text-primary mr-3"></i>
                            <span>我的收藏</span>
                        </div>
                        <i class="fa fa-chevron-right text-gray-400 text-xs"></i>
                    </div>
                    <div class="flex items-center justify-between py-3 border-b border-gray-100">
                        <div class="flex items-center">
                            <i class="fa fa-bell-o text-primary mr-3"></i>
                            <span>消息通知</span>
                        </div>
                        <i class="fa fa-chevron-right text-gray-400 text-xs"></i>
                    </div>
                    <div class="flex items-center justify-between py-3 border-b border-gray-100">
                        <div class="flex items-center">
                            <i class="fa fa-gift text-primary mr-3"></i>
                            <span>兑换中心</span>
                        </div>
                        <i class="fa fa-chevron-right text-gray-400 text-xs"></i>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <div class="flex items-center">
                            <i class="fa fa-question-circle text-primary mr-3"></i>
                            <span>帮助与反馈</span>
                        </div>
                        <i class="fa fa-chevron-right text-gray-400 text-xs"></i>
                    </div>
                </div>
            </main>
        </div>
    `;

    // 绑定事件
    bindProfileEvents(app);
}

function bindProfileEvents(app) {
    // 初始化数据
    initUserData();
    
    // 绑定签到按钮事件
    const checkinBtn = document.getElementById('checkin-btn');
    if (checkinBtn) {
        checkinBtn.addEventListener('click', handleCheckin);
    }
    
    // 绑定观看广告按钮事件
    const watchAdBtn = document.getElementById('watch-ad-btn');
    if (watchAdBtn) {
        watchAdBtn.addEventListener('click', handleWatchAd);
    }
}

// 初始化用户数据
function initUserData() {
    // 从localStorage读取数据
    const userData = JSON.parse(localStorage.getItem('userData')) || {
        riceCount: 280,
        lastCheckin: null,
        checkinStreak: 0,
        checkinHistory: [],
        todayAds: 0,
        lastAdDate: null
    };
    
    // 更新UI
    document.getElementById('rice-count').textContent = userData.riceCount;
    document.getElementById('checkin-streak').textContent = userData.checkinStreak;
    
    // 检查今日是否已签到
    checkIfCheckedInToday(userData);
    
    // 检查今日广告次数
    checkTodayAds(userData);
    
    // 保存数据
    localStorage.setItem('userData', JSON.stringify(userData));
}

// 检查今日是否已签到
function checkIfCheckedInToday(userData) {
    const today = new Date().toDateString();
    const lastCheckin = userData.lastCheckin;
    
    if (lastCheckin === today) {
        // 今日已签到
        const checkinBtn = document.getElementById('checkin-btn');
        const checkinSection = document.getElementById('checkin-section');
        
        if (checkinBtn && checkinSection) {
            checkinSection.innerHTML = `
                <div class="w-full py-3 bg-green-50 text-green-600 rounded-lg font-medium flex items-center justify-center">
                    <i class="fa fa-check-circle mr-2"></i> 今日已签到
                </div>
            `;
        }
    }
}

// 检查今日广告次数
function checkTodayAds(userData) {
    const today = new Date().toDateString();
    const lastAdDate = userData.lastAdDate;
    
    // 如果不是今天，重置广告次数
    if (lastAdDate !== today) {
        userData.todayAds = 0;
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    // 更新UI
    const adRemaining = document.getElementById('ad-remaining');
    if (adRemaining) {
        adRemaining.textContent = Math.max(0, 3 - userData.todayAds);
    }
    
    // 检查是否达到每日限制
    const watchAdBtn = document.getElementById('watch-ad-btn');
    if (watchAdBtn && userData.todayAds >= 3) {
        watchAdBtn.disabled = true;
        watchAdBtn.classList.remove('bg-blue-500', 'hover:shadow-md');
        watchAdBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
        watchAdBtn.textContent = '今日已达上限';
    }
}

// 处理签到
function handleCheckin() {
    const userData = JSON.parse(localStorage.getItem('userData')) || {
        riceCount: 280,
        lastCheckin: null,
        checkinStreak: 0,
        checkinHistory: [],
        todayAds: 0,
        lastAdDate: null
    };
    
    const today = new Date().toDateString();
    
    // 检查是否已签到
    if (userData.lastCheckin === today) {
        alert('今日已签到');
        return;
    }
    
    // 计算连续签到天数
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (userData.lastCheckin === yesterdayStr) {
        // 连续签到
        userData.checkinStreak += 1;
    } else if (userData.lastCheckin !== today) {
        // 中断签到
        userData.checkinStreak = 1;
    }
    
    // 计算签到奖励
    const baseReward = 10;
    let extraReward = 0;
    
    if (userData.checkinStreak >= 7) {
        extraReward = 5;
    } else if (userData.checkinStreak >= 3) {
        extraReward = 3;
    }
    
    const totalReward = baseReward + extraReward;
    
    // 更新用户数据
    userData.riceCount += totalReward;
    userData.lastCheckin = today;
    userData.checkinHistory.push({
        date: today,
        reward: totalReward,
        streak: userData.checkinStreak
    });
    
    // 保存数据
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // 更新UI
    document.getElementById('rice-count').textContent = userData.riceCount;
    document.getElementById('checkin-streak').textContent = userData.checkinStreak;
    
    // 更新签到按钮状态
    const checkinSection = document.getElementById('checkin-section');
    if (checkinSection) {
        checkinSection.innerHTML = `
            <div class="w-full py-3 bg-green-50 text-green-600 rounded-lg font-medium flex items-center justify-center">
                <i class="fa fa-check-circle mr-2"></i> 今日已签到
            </div>
        `;
    }
    
    // 显示签到成功动画和奖励提示
    showCheckinSuccessAnimation(totalReward);
}

// 处理观看广告
function handleWatchAd() {
    const userData = JSON.parse(localStorage.getItem('userData')) || {
        riceCount: 280,
        lastCheckin: null,
        checkinStreak: 0,
        checkinHistory: [],
        todayAds: 0,
        lastAdDate: null
    };
    
    const today = new Date().toDateString();
    
    // 检查今日广告次数
    if (userData.lastAdDate !== today) {
        userData.todayAds = 0;
    }
    
    if (userData.todayAds >= 3) {
        alert('今日观看广告次数已达上限');
        return;
    }
    
    // 模拟广告播放
    const adContainer = document.querySelector('.ad-container');
    const watchAdBtn = document.getElementById('watch-ad-btn');
    
    if (adContainer && watchAdBtn) {
        // 禁用按钮
        watchAdBtn.disabled = true;
        watchAdBtn.textContent = '广告播放中...';
        
        // 模拟广告播放（3秒）
        setTimeout(() => {
            // 更新用户数据
            const adReward = 20;
            userData.riceCount += adReward;
            userData.todayAds += 1;
            userData.lastAdDate = today;
            
            // 保存数据
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // 更新UI
            document.getElementById('rice-count').textContent = userData.riceCount;
            document.getElementById('ad-remaining').textContent = Math.max(0, 3 - userData.todayAds);
            
            // 恢复按钮状态
            watchAdBtn.disabled = false;
            
            // 检查是否达到每日限制
            if (userData.todayAds >= 3) {
                watchAdBtn.classList.remove('bg-blue-500', 'hover:shadow-md');
                watchAdBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
                watchAdBtn.textContent = '今日已达上限';
            } else {
                watchAdBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
                watchAdBtn.classList.add('bg-blue-500', 'hover:shadow-md');
                watchAdBtn.textContent = '观看广告 +20 米粒';
            }
            
            // 显示广告观看成功动画和奖励提示
            showAdSuccessAnimation(adReward);
        }, 3000);
    }
}

// 显示签到成功动画和奖励提示
function showCheckinSuccessAnimation(reward) {
    // 创建奖励提示元素
    const rewardToast = document.createElement('div');
    rewardToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center';
    rewardToast.innerHTML = `
        <i class="fa fa-gift mr-2"></i>
        <span>签到成功！获得 ${reward} 米粒</span>
    `;
    
    // 添加到页面
    document.body.appendChild(rewardToast);
    
    // 动画效果
    rewardToast.style.opacity = '0';
    rewardToast.style.transform = 'translate(-50%, -20px)';
    rewardToast.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        rewardToast.style.opacity = '1';
        rewardToast.style.transform = 'translate(-50%, 0)';
    }, 100);
    
    // 3秒后移除
    setTimeout(() => {
        rewardToast.style.opacity = '0';
        rewardToast.style.transform = 'translate(-50%, -20px)';
        
        setTimeout(() => {
            document.body.removeChild(rewardToast);
        }, 300);
    }, 3000);
}

// 显示广告观看成功动画和奖励提示
function showAdSuccessAnimation(reward) {
    // 创建奖励提示元素
    const rewardToast = document.createElement('div');
    rewardToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center';
    rewardToast.innerHTML = `
        <i class="fa fa-video-camera mr-2"></i>
        <span>观看完成！获得 ${reward} 米粒</span>
    `;
    
    // 添加到页面
    document.body.appendChild(rewardToast);
    
    // 动画效果
    rewardToast.style.opacity = '0';
    rewardToast.style.transform = 'translate(-50%, -20px)';
    rewardToast.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        rewardToast.style.opacity = '1';
        rewardToast.style.transform = 'translate(-50%, 0)';
    }, 100);
    
    // 3秒后移除
    setTimeout(() => {
        rewardToast.style.opacity = '0';
        rewardToast.style.transform = 'translate(-50%, -20px)';
        
        setTimeout(() => {
            document.body.removeChild(rewardToast);
        }, 300);
    }, 3000);
}
