
import { nextTick } from 'vue';

const ToggleSubmenu = {
  // 在绑定元素的 mounted 阶段
    mounted(el, binding) {

        nextTick(() => {
            // 获取子菜单元素（通过选择器）
            const submenuSelector = binding.value;
            const submenu = el.querySelector(submenuSelector);

            if (!submenu) {
                console.warn(`Submenu element with selector "${submenuSelector}" not found.`);
                return;
            }

            // 初始隐藏子菜单
            submenu.style.display = 'none';

            // 点击触发元素时切换子菜单显示状态
            el.__toggleHandler__ = function () {
                const isHidden = submenu.style.display === 'none';
                submenu.style.display = isHidden ? 'block' : 'none';
            };

            el.addEventListener('click', el.__toggleHandler__);
        })

    },

    // 清理事件监听器
    unmounted(el) {
        el.removeEventListener('click', el.__toggleHandler__);
    }
};

export default ToggleSubmenu;