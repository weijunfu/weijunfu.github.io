
import { nextTick } from 'vue';
import type { DirectiveBinding } from 'vue';

const handlerMap = new WeakMap<HTMLElement, () => void>()

const ToggleSubmenu = {
    // 在绑定元素的 mounted 阶段
    mounted(el: HTMLElement, binding: DirectiveBinding) {

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
            const toggleHandler  = function () {
                const isHidden = submenu.style.display === 'none';
                submenu.style.display = isHidden ? 'block' : 'none';
            };

            el.addEventListener('click', toggleHandler);
            handlerMap.set(el, toggleHandler)
        })

    },

    // 清理事件监听器
    unmounted(el:HTMLElement) {
        const handler = handlerMap.get(el)
        if(handler) {
            el.removeEventListener('click', handler);
            handlerMap.delete(el)
        }
    }
};

export default ToggleSubmenu;