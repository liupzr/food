import { renderHomePage } from './pages/home.js';
import { renderMenuPage } from './pages/menu.js';
import { renderEatPage } from './pages/eat.js';
import { renderPlanPage, renderIngredientsPage } from './pages/plan.js';
import { renderProfilePage } from './pages/profile.js';
import { renderAddPage } from './pages/add.js';
import { renderStatsPage } from './pages/stats.js';
import { renderDetailPage } from './pages/detail.js';
import { renderFoodLibraryPage } from './pages/food-library.js';
import { renderCustomFoodPage } from './pages/custom-food.js';
import { renderRecipeDetailPage } from './pages/recipe-detail.js';
import { renderSharePage } from './pages/share.js';

class App {
    constructor() {
        this.currentPage = 'home';
        this.pageContainer = document.getElementById('page-container');
        this.tabbarItems = document.querySelectorAll('.tabbar-item');
        this.init();
    }

    init() {
        // 初始化页面
        this.renderPage(this.currentPage);
        
        // 绑定底部导航栏事件
        this.bindTabbarEvents();
        
        // 绑定全局事件
        this.bindGlobalEvents();
    }

    renderPage(pageName) {
        this.currentPage = pageName;
        
        // 更新底部导航栏状态
        this.tabbarItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageName) {
                item.classList.add('active');
            }
        });

        // 渲染对应页面
        switch (pageName) {
            case 'home':
                renderHomePage(this.pageContainer, this);
                break;
            case 'menu':
                renderMenuPage(this.pageContainer, this);
                break;
            case 'eat':
                renderEatPage(this.pageContainer, this);
                break;
            case 'plan':
                renderPlanPage(this.pageContainer, this);
                break;
            case 'ingredients':
                renderIngredientsPage(this.pageContainer, this);
                break;
            case 'profile':
                renderProfilePage(this.pageContainer, this);
                break;
            case 'add':
                renderAddPage(this.pageContainer, this);
                break;
            case 'stats':
                renderStatsPage(this.pageContainer, this);
                break;
            case 'detail':
                renderDetailPage(this.pageContainer, this);
                break;
            case 'food-library':
                renderFoodLibraryPage(this.pageContainer, this);
                break;
            case 'custom-food':
                renderCustomFoodPage(this.pageContainer, this);
                break;
            case 'recipe-detail':
                renderRecipeDetailPage(this.pageContainer, this);
                break;
            case 'share':
                renderSharePage(this.pageContainer, this);
                break;
            default:
                renderHomePage(this.pageContainer, this);
        }
    }

    bindTabbarEvents() {
        this.tabbarItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetPage = item.getAttribute('data-page');
                this.renderPage(targetPage);
            });
        });
    }

    bindGlobalEvents() {
        // 全局事件监听
        document.addEventListener('click', (e) => {
            // 处理返回按钮
            if (e.target.closest('.back-btn')) {
                this.renderPage('home');
            }
            
            // 处理浮动添加按钮
            if (e.target.closest('.float-btn')) {
                this.renderPage('add');
            }
        });
    }

    // 导航到指定页面
    navigateTo(pageName) {
        this.renderPage(pageName);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
