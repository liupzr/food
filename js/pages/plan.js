// 计划页面模块
export function renderPlanPage(container, app) {
    container.innerHTML = `
        <div class="plan-page">
            <!-- 顶部导航栏 -->
            <header class="bg-white py-3 px-4 flex items-center justify-between shadow-sm">
                <button class="back-btn text-dark">
                    <i class="fa fa-arrow-left text-lg"></i>
                </button>
                <h1 class="text-lg font-medium">美食计划</h1>
                <div class="w-8"></div>
            </header>
            
            <!-- 日历导航 -->
            <div class="calendar-nav bg-white px-4 py-3 flex items-center justify-between">
                <button class="calendar-prev text-gray-600">
                    <i class="fa fa-chevron-left"></i>
                </button>
                <h2 class="text-base font-medium" id="current-month"></h2>
                <button class="calendar-next text-gray-600">
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
            
            <!-- 日历选择器 -->
            <div class="calendar-container bg-white px-4 pb-4">
                <div class="calendar-scroll overflow-x-auto">
                    <div class="calendar-grid flex space-x-2" id="calendar-grid"></div>
                </div>
            </div>
            
            <!-- 选中日期的餐点计划 -->
            <div class="meal-plan-container mt-3 px-4 pb-20">
                <h3 class="text-lg font-medium mb-3" id="selected-date-title"></h3>
                
                <!-- 早餐 -->
                <div class="meal-item bg-white rounded-lg p-4 mb-3 shadow-sm">
                    <div class="meal-header flex items-center justify-between mb-2">
                        <h4 class="font-medium">早餐</h4>
                        <button class="add-meal-btn text-primary text-sm">
                            <i class="fa fa-plus mr-1"></i> 添加
                        </button>
                    </div>
                    <div class="meal-content" id="breakfast-content">
                        <div class="empty-state text-center py-4 text-gray-400">
                            <i class="fa fa-coffee text-xl mb-2"></i>
                            <p>还没有添加早餐</p>
                        </div>
                    </div>
                </div>
                
                <!-- 午餐 -->
                <div class="meal-item bg-white rounded-lg p-4 mb-3 shadow-sm">
                    <div class="meal-header flex items-center justify-between mb-2">
                        <h4 class="font-medium">午餐</h4>
                        <button class="add-meal-btn text-primary text-sm">
                            <i class="fa fa-plus mr-1"></i> 添加
                        </button>
                    </div>
                    <div class="meal-content" id="lunch-content">
                        <div class="empty-state text-center py-4 text-gray-400">
                            <i class="fa fa-cutlery text-xl mb-2"></i>
                            <p>还没有添加午餐</p>
                        </div>
                    </div>
                </div>
                
                <!-- 晚餐 -->
                <div class="meal-item bg-white rounded-lg p-4 mb-3 shadow-sm">
                    <div class="meal-header flex items-center justify-between mb-2">
                        <h4 class="font-medium">晚餐</h4>
                        <button class="add-meal-btn text-primary text-sm">
                            <i class="fa fa-plus mr-1"></i> 添加
                        </button>
                    </div>
                    <div class="meal-content" id="dinner-content">
                        <div class="empty-state text-center py-4 text-gray-400">
                            <i class="fa fa-moon-o text-xl mb-2"></i>
                            <p>还没有添加晚餐</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 悬浮菜篮 -->
            <div class="basket-float fixed right-6 bottom-24 z-20">
                <button class="basket-btn w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg relative hover:bg-primary/90 transition-all duration-300 active:scale-95">
                    <i class="fa fa-shopping-basket text-xl"></i>
                    <span class="basket-count absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">0</span>
                </button>
            </div>
            
            <!-- 添加餐点的模态框 -->
            <div class="meal-modal fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center">
                <div class="modal-content bg-white rounded-lg w-5/6 max-w-md">
                    <div class="modal-header p-4 border-b flex items-center justify-between">
                        <h3 class="font-medium">选择菜品</h3>
                        <button class="close-modal-btn text-gray-500">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body p-4 max-h-96 overflow-y-auto">
                        <div class="food-list">
                            <!-- 菜品列表将动态生成 -->
                        </div>
                    </div>
                    <div class="modal-footer p-4 border-t flex justify-end">
                        <button class="cancel-btn px-4 py-2 text-gray-600 mr-2">取消</button>
                        <button class="confirm-btn px-4 py-2 bg-primary text-white rounded">确认</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 初始化日历
    initCalendar(container);
    
    // 初始化食材清单
    initIngredientsList(container);
    
    // 绑定事件
    bindPlanEvents(container, app);
}

// 食材清单页面
export function renderIngredientsPage(container, app) {
    container.innerHTML = `
        <div class="ingredients-page">
            <!-- 顶部导航栏 -->
            <header class="bg-white py-3 px-4 flex items-center justify-between shadow-sm">
                <button class="back-btn text-dark">
                    <i class="fa fa-arrow-left text-lg"></i>
                </button>
                <h1 class="text-lg font-medium">食材清单</h1>
                <div class="w-8"></div>
            </header>
            
            <!-- 食材列表 -->
            <div class="ingredients-container px-4 py-6">
                <div class="ingredients-list">
                    <!-- 食材列表将动态生成 -->
                </div>
            </div>
            
            <!-- 底部操作栏 -->
            <footer class="fixed bottom-0 left-0 right-0 bg-white py-3 px-4 border-t border-gray-100">
                <div class="flex justify-between items-center">
                    <button class="select-all-btn text-primary font-medium">全选</button>
                    <div class="flex space-x-3">
                        <button class="delete-btn px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">删除</button>
                        <button class="confirm-btn px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">确认</button>
                    </div>
                </div>
            </footer>
        </div>
    `;
    
    // 初始化食材列表
    initIngredientsList(container);
    
    // 绑定事件
    bindIngredientsEvents(container, app);
}

// 初始化日历
function initCalendar(container) {
    const calendarGrid = container.querySelector('#calendar-grid');
    const currentMonthEl = container.querySelector('#current-month');
    const selectedDateTitle = container.querySelector('#selected-date-title');
    
    // 获取当前日期
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // 设置当前月份标题
    currentMonthEl.textContent = `${currentYear}年${currentMonth + 1}月`;
    
    // 生成未来两周的日期
    const dates = [];
    for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }
    
    // 渲染日历格子
    calendarGrid.innerHTML = '';
    dates.forEach((date, index) => {
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const isToday = index === 0;
        const isSelected = index === 0; // 默认选中今天
        
        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        
        const dateCell = document.createElement('div');
        dateCell.className = `calendar-date flex flex-col items-center justify-center w-16 h-20 rounded-lg ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'} ${isToday ? 'border-2 border-primary' : ''}`;
        dateCell.dataset.date = date.toISOString().split('T')[0];
        
        dateCell.innerHTML = `
            <span class="text-xs">${weekDays[dayOfWeek]}</span>
            <span class="text-lg font-medium">${dayOfMonth}</span>
        `;
        
        calendarGrid.appendChild(dateCell);
        
        // 绑定日期选择事件
        dateCell.addEventListener('click', () => {
            // 移除其他日期的选中状态
            calendarGrid.querySelectorAll('.calendar-date').forEach(cell => {
                cell.classList.remove('bg-primary', 'text-white');
                cell.classList.add('bg-gray-100', 'text-gray-600');
            });
            
            // 添加当前日期的选中状态
            dateCell.classList.remove('bg-gray-100', 'text-gray-600');
            dateCell.classList.add('bg-primary', 'text-white');
            
            // 更新选中日期标题
            selectedDateTitle.textContent = `${date.getMonth() + 1}月${dayOfMonth}日 计划`;
        });
    });
    
    // 默认选中今天
    selectedDateTitle.textContent = `${currentMonth + 1}月${today.getDate()}日 计划`;
}

// 初始化食材清单
function initIngredientsList(container) {
    // 模拟食材数据
    const ingredients = [
        { name: '番茄', quantity: '2个', recipes: ['番茄炒蛋', '番茄汤'] },
        { name: '鸡蛋', quantity: '3个', recipes: ['番茄炒蛋', '煎蛋'] },
        { name: '米饭', quantity: '1碗', recipes: ['蛋炒饭'] },
        { name: '猪肉', quantity: '200g', recipes: ['红烧肉'] },
        { name: '青菜', quantity: '200g', recipes: ['清炒青菜'] }
    ];
    
    // 检查是否是在食材清单页面
    const ingredientsList = container.querySelector('.ingredients-list');
    if (ingredientsList) {
        ingredientsList.innerHTML = '';
        
        if (ingredients.length === 0) {
            ingredientsList.innerHTML = `
                <div class="empty-state text-center py-12">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-shopping-basket text-3xl text-primary"></i>
                    </div>
                    <p class="text-gray-500 text-lg mb-2">暂无待准备食材</p>
                    <p class="text-sm text-gray-400">添加计划后会自动生成食材清单</p>
                </div>
            `;
        } else {
            ingredients.forEach((ingredient, index) => {
                const ingredientItem = document.createElement('div');
                ingredientItem.className = 'ingredient-item flex items-center p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer';
                ingredientItem.innerHTML = `
                    <div class="checkbox-wrapper mr-4 flex-shrink-0">
                        <div class="checkbox relative w-6 h-6 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors">
                            <input type="checkbox" class="ingredient-checkbox absolute inset-0 opacity-0 cursor-pointer" id="ingredient-${index}">
                            <i class="fa fa-check text-white hidden"></i>
                        </div>
                    </div>
                    <div class="ingredient-info flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h5 class="ingredient-name font-medium text-gray-800">${ingredient.name}</h5>
                            <span class="ingredient-quantity text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">${ingredient.quantity}</span>
                        </div>
                        <div class="recipes-info text-xs text-gray-500">
                            <span class="font-medium">用于: </span>
                            ${ingredient.recipes.map(recipe => `<span class="recipe-tag bg-gray-100 text-gray-600 px-2 py-0.5 rounded mr-1">${recipe}</span>`).join('')}
                        </div>
                    </div>
                `;
                ingredientsList.appendChild(ingredientItem);
                
                // 绑定点击事件，实现划掉功能
                const checkbox = ingredientItem.querySelector('.ingredient-checkbox');
                const checkboxWrapper = ingredientItem.querySelector('.checkbox');
                const checkIcon = ingredientItem.querySelector('.fa-check');
                const ingredientName = ingredientItem.querySelector('.ingredient-name');
                const ingredientInfo = ingredientItem.querySelector('.ingredient-info');
                
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        // 标记为已完成
                        checkboxWrapper.classList.add('bg-primary', 'border-primary');
                        checkboxWrapper.classList.remove('border-gray-300');
                        checkIcon.classList.remove('hidden');
                        ingredientName.classList.add('line-through', 'text-gray-400');
                        ingredientInfo.classList.add('opacity-70');
                        ingredientItem.classList.add('opacity-80');
                    } else {
                        // 标记为未完成
                        checkboxWrapper.classList.remove('bg-primary', 'border-primary');
                        checkboxWrapper.classList.add('border-gray-300');
                        checkIcon.classList.add('hidden');
                        ingredientName.classList.remove('line-through', 'text-gray-400');
                        ingredientInfo.classList.remove('opacity-70');
                        ingredientItem.classList.remove('opacity-80');
                    }
                });
                
                // 点击整个食材项也能切换状态
                ingredientItem.addEventListener('click', (e) => {
                    if (!e.target.closest('.checkbox')) {
                        checkbox.checked = !checkbox.checked;
                        checkbox.dispatchEvent(new Event('change'));
                    }
                });
            });
        }
    }
    
    // 更新菜篮计数
    updateBasketCount(container, ingredients.length);
}

// 更新菜篮计数
function updateBasketCount(container, count) {
    const basketCount = container.querySelector('.basket-count');
    if (basketCount) {
        basketCount.textContent = count;
        
        // 如果计数为0，隐藏计数
        if (count === 0) {
            basketCount.classList.add('hidden');
        } else {
            basketCount.classList.remove('hidden');
        }
    }
}

function bindPlanEvents(container, app) {
    // 绑定返回按钮事件
    container.querySelector('.back-btn').addEventListener('click', () => {
        app.renderPage('home');
    });
    
    // 绑定日历导航事件
    container.querySelector('.calendar-prev').addEventListener('click', () => {
        // 这里可以实现月份切换逻辑
        alert('上个月');
    });
    
    container.querySelector('.calendar-next').addEventListener('click', () => {
        // 这里可以实现月份切换逻辑
        alert('下个月');
    });
    
    // 绑定添加餐点按钮事件
    const addMealBtns = container.querySelectorAll('.add-meal-btn');
    const mealModal = container.querySelector('.meal-modal');
    const closeModalBtn = mealModal.querySelector('.close-modal-btn');
    const cancelBtn = mealModal.querySelector('.cancel-btn');
    const confirmBtn = mealModal.querySelector('.confirm-btn');
    
    let currentMealType = '';
    
    addMealBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mealItem = e.target.closest('.meal-item');
            const mealHeader = mealItem.querySelector('.meal-header h4');
            currentMealType = mealHeader.textContent;
            
            // 显示模态框
            mealModal.classList.remove('hidden');
            mealModal.classList.add('flex');
            
            // 生成菜品列表
            generateFoodList(container);
        });
    });
    
    // 关闭模态框
    function closeModal() {
        mealModal.classList.add('hidden');
        mealModal.classList.remove('flex');
    }
    
    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // 确认添加餐点
    confirmBtn.addEventListener('click', () => {
        const selectedFoods = mealModal.querySelectorAll('.food-item.selected');
        if (selectedFoods.length > 0) {
            selectedFoods.forEach(food => {
                const foodName = food.querySelector('.food-name').textContent;
                addFoodToMeal(container, currentMealType, foodName);
            });
        }
        closeModal();
    });
    
    // 点击模态框外部关闭
    mealModal.addEventListener('click', (e) => {
        if (e.target === mealModal) {
            closeModal();
        }
    });
    
    // 绑定菜篮点击事件
    const basketBtn = container.querySelector('.basket-btn');
    
    basketBtn.addEventListener('click', () => {
        app.renderPage('ingredients');
    });
}

// 绑定食材清单页面事件
function bindIngredientsEvents(container, app) {
    // 绑定返回按钮事件
    container.querySelector('.back-btn').addEventListener('click', () => {
        app.renderPage('plan');
    });
    
    // 绑定全选按钮事件
    const selectAllBtn = container.querySelector('.select-all-btn');
    selectAllBtn.addEventListener('click', () => {
        const checkboxes = container.querySelectorAll('.ingredient-checkbox');
        const isAllChecked = [...checkboxes].every(cb => cb.checked);
        checkboxes.forEach(cb => {
            cb.checked = !isAllChecked;
            // 触发change事件，更新UI
            cb.dispatchEvent(new Event('change'));
        });
        selectAllBtn.textContent = isAllChecked ? '全选' : '取消全选';
    });
    
    // 绑定删除按钮事件
    const deleteBtn = container.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        const checkedCheckboxes = container.querySelectorAll('.ingredient-checkbox:checked');
        if (checkedCheckboxes.length > 0) {
            if (confirm(`确定要删除 ${checkedCheckboxes.length} 项食材吗？`)) {
                checkedCheckboxes.forEach(checkbox => {
                    const ingredientItem = checkbox.closest('.ingredient-item');
                    ingredientItem.classList.add('opacity-50', 'scale-95');
                    ingredientItem.style.transition = 'all 0.3s ease';
                    setTimeout(() => {
                        ingredientItem.remove();
                        // 更新食材列表
                        const remainingIngredients = container.querySelectorAll('.ingredient-item');
                        if (remainingIngredients.length === 0) {
                            const ingredientsList = container.querySelector('.ingredients-list');
                            ingredientsList.innerHTML = `
                                <div class="empty-state text-center py-12">
                                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i class="fa fa-shopping-basket text-3xl text-primary"></i>
                                    </div>
                                    <p class="text-gray-500 text-lg mb-2">食材清单已清空</p>
                                    <p class="text-sm text-gray-400">添加计划后会自动生成食材清单</p>
                                </div>
                            `;
                        }
                    }, 300);
                });
            }
        } else {
            alert('请先选择要删除的食材');
        }
    });
    
    // 绑定确认按钮事件
    const confirmBtn = container.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', () => {
        const checkedCheckboxes = container.querySelectorAll('.ingredient-checkbox:checked');
        if (checkedCheckboxes.length > 0) {
            alert(`已确认 ${checkedCheckboxes.length} 项食材`);
        } else {
            alert('请先选择要确认的食材');
        }
    });
}

// 生成菜品列表
function generateFoodList(container) {
    const mealModal = container.querySelector('.meal-modal');
    const foodList = mealModal.querySelector('.food-list');
    
    // 模拟菜品数据
    const foods = [
        { name: '番茄炒蛋', calories: '250大卡' },
        { name: '红烧肉', calories: '450大卡' },
        { name: '清蒸鱼', calories: '300大卡' },
        { name: '宫保鸡丁', calories: '350大卡' },
        { name: '麻婆豆腐', calories: '320大卡' },
        { name: '糖醋排骨', calories: '400大卡' },
        { name: '酸辣土豆丝', calories: '180大卡' },
        { name: '蒜蓉西兰花', calories: '150大卡' }
    ];
    
    foodList.innerHTML = '';
    foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item flex items-center justify-between p-3 border-b border-gray-100';
        foodItem.innerHTML = `
            <div class="food-info">
                <h5 class="food-name font-medium">${food.name}</h5>
                <p class="food-calories text-xs text-gray-500">${food.calories}</p>
            </div>
            <div class="food-checkbox w-5 h-5 border border-gray-300 rounded flex items-center justify-center"></div>
        `;
        
        // 绑定选择事件
        foodItem.addEventListener('click', () => {
            foodItem.classList.toggle('selected');
            const checkbox = foodItem.querySelector('.food-checkbox');
            if (foodItem.classList.contains('selected')) {
                checkbox.classList.add('bg-primary');
                checkbox.innerHTML = '<i class="fa fa-check text-white text-xs"></i>';
            } else {
                checkbox.classList.remove('bg-primary');
                checkbox.innerHTML = '';
            }
        });
        
        foodList.appendChild(foodItem);
    });
}

// 添加食物到餐点
function addFoodToMeal(container, mealType, foodName) {
    let mealContent;
    switch (mealType) {
        case '早餐':
            mealContent = container.querySelector('#breakfast-content');
            break;
        case '午餐':
            mealContent = container.querySelector('#lunch-content');
            break;
        case '晚餐':
            mealContent = container.querySelector('#dinner-content');
            break;
    }
    
    // 移除空状态
    const emptyState = mealContent.querySelector('.empty-state');
    if (emptyState) {
        mealContent.removeChild(emptyState);
    }
    
    // 添加食物项
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item flex items-center justify-between p-2 border-b border-gray-100';
    foodItem.innerHTML = `
        <span>${foodName}</span>
        <button class="remove-food-btn text-gray-400">
            <i class="fa fa-trash"></i>
        </button>
    `;
    
    // 绑定删除事件
    foodItem.querySelector('.remove-food-btn').addEventListener('click', () => {
        foodItem.remove();
        
        // 如果没有食物了，显示空状态
        if (mealContent.children.length === 0) {
            let emptyIcon, emptyText;
            switch (mealType) {
                case '早餐':
                    emptyIcon = 'fa-coffee';
                    emptyText = '还没有添加早餐';
                    break;
                case '午餐':
                    emptyIcon = 'fa-cutlery';
                    emptyText = '还没有添加午餐';
                    break;
                case '晚餐':
                    emptyIcon = 'fa-moon-o';
                    emptyText = '还没有添加晚餐';
                    break;
            }
            
            mealContent.innerHTML = `
                <div class="empty-state text-center py-4 text-gray-400">
                    <i class="fa ${emptyIcon} text-xl mb-2"></i>
                    <p>${emptyText}</p>
                </div>
            `;
        }
    });
    
    mealContent.appendChild(foodItem);
}
