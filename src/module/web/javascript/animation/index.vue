<template>
<div class="gsap">
  <h1>GSAP - 动画库</h1>
  <h2>简介</h2>
  <p>GSAP (GreenSock Animation Platform) 被誉为业界最强大的 JavaScript 动画库，在现代网页设计和开发中占据着无可替代的地位。它不仅提供了令人惊叹的性能表现，还拥有丰富的插件生态系统，让开发者能够轻松创建出专业级的动画效果。</p>
  <h2>GSAP 的核心优势</h2>
  <p>
    <ul>
      <li>极致性能: 60fps 流畅动画，CPU 占用率极低</li>
      <li>丰富的动画属性: 支持几乎所有 CSS 属性的动画</li>
      <li>强大的插件系统: DrawSVG、MorphSVG、MotionPath 等专业插件</li>
      <li>跨平台兼容: 完美支持现代浏览器和移动设备</li>
      <li>简单易用: 简洁的 API 设计，学习曲线平缓</li>
      <li>时间线控制: 精确的动画序列编排能力</li>
    </ul>
  </p>
  <h2>安装</h2>
  <p>
    <FuCode language="shell" code="pnpm add gsap" />
  </p>
  <h2>基础动画 – 入门体验</h2>
  <p>
    让我们从一个简单但令人印象深刻的动画开始，体验 GSAP 的基础魅力：
    <div class="box1">
      <span ref="boxRef" @click="animate"></span>
    </div>
  </p>
  <h2>Draggable 拖拽动画 – 交互体验升级</h2>
  <p>
    GSAP 的 Draggable 插件让拖拽交互变得简单而强大，支持触摸设备，性能卓越：
    <div class="box2" ref="boxRef2">
      <span >
        X: {{ Math.round(position.x) }} Y: {{ Math.round(position.y) }}
      </span>
    </div>
  </p>
  <h2>DrawSVG 插件 – SVG 路径动画</h2>
  <p>
    DrawSVG 插件让 SVG 路径绘制动画变得轻而易举，是创建复杂图形动画的利器：
    <div class="box3">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <path
          ref="pathRef"
          d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
          fill="none"
          stroke="#0ae448"
          stroke-width="2"
        />
      </svg>
    </div>
  </p>

  <h2>MorphSVG 插件 – 形状变形动画</h2>
  <p>
    MorphSVG 插件实现了令人惊叹的形状变形效果，让静态图形变得生动有趣：
    <div class="box4">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <path
          ref="shapeRef"
          d="M 50 0 C 50 0, 100 0, 100 50 C 100 50, 100 100, 50 100 C 50 100, 0 100, 0 50 C 0 50, 0 0, 50 0 Z"
          fill="#4CAF50"
          stroke="#2E7D32"
          stroke-width="2"
        />
      </svg>
    </div>
  </p>

  <h2>MotionPath 插件 – 路径运动动画</h2>
  <p>
    MotionPath 插件让元素沿着复杂路径运动，为动画添加了无限的可能性：
    <div class="box5">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <!-- 运动路径 -->
        <path
          ref="pathRef2"
          d="M 150 50 
            C 200 50, 250 100, 250 150
            C 250 200, 200 250, 150 250
            C 100 250, 50 200, 50 150
            C 50 100, 100 50, 150 50"
          fill="none"
          stroke="#ddd"
          stroke-width="2"
        />
        <!-- 移动的圆点 -->
        <circle
          ref="circleRef"
          r="8"
          fill="#FF69B4"
          stroke="#FF1493"
          stroke-width="2"
        />
      </svg>
    </div>
  </p>

  <h2>TextPlugin 文本动画 – 文字动效</h2>
  <p>
    TextPlugin 让文字动画变得简单而强大，支持逐字、逐行等多种动画效果：
    <div class="box6" ref="textRef">
      Hello World!
    </div>
  </p>

  <h2>时间线动画 – 复杂序列编排</h2>
  <p>
    GSAP 的时间线功能让复杂动画序列的编排变得简单而精确：
    <div class="box7">
      <div
        ref="timeline11"
        class="text-purple-600"
      >
        Join our
      </div>
      <div
        ref="timeline12"
        class="text-blue-600"
      >
        growing
      </div>
      <div
        ref="timeline13"
        class="text-green-600"
      >
        community
      </div>
    </div>
  </p>
  <h2>总结</h2>
  <p>
    GSAP 让复杂的动画变得简单，让简单的动画变得精彩。无论是创建微交互、页面过渡，还是复杂的动画序列，GSAP 都能为您提供最佳的解决方案。
    <ul>
      <li>基础动画: 简单而强大的动画 API</li>
      <li>交互动画: 拖拽、惯性等交互效果</li>
      <li>SVG 动画: 路径绘制、形状变形、路径运动</li>
      <li>文本动画: 丰富的文字动效</li>
      <li>时间线控制: 精确的动画序列编排</li>
    </ul>
  </p>
</div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册拖拽插件
gsap.registerPlugin(Draggable);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


const boxRef = ref<HTMLElement|null>(null)
const boxRef2 = ref<HTMLElement|null>(null)
const pathRef = ref<HTMLElement|null>(null);
const shapeRef = ref(null);

const textRef = ref(null);

const timeline11 = ref(null);
const timeline12 = ref(null);
const timeline13 = ref(null);

const position = ref({ x: 0, y: 0 });
const  draggable = ref<Draggable | null>(null);

const animate = () => {
  gsap.to(boxRef.value, {
    duration: 1,
    scale: 1.5,            // 放大
    rotation: 360,         // 旋转
    ease: "power2.inOut",  // 缓动函数，让动画更自然流畅
    yoyo: true,            // 往返动画效果
    repeat: -1,            // 重复次数控制
  });
};

const circleRef = ref(null);
const pathRef2 = ref(null);

onMounted(() => {
  // 组件挂载后的初始化动画
  gsap.from(boxRef.value, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });

  if(boxRef2.value) {
    draggable = Draggable.create(boxRef.value, {
      type: "x,y",
      onDrag: function () {
        position.value = {
          x: this.x,
          y: this.y,
        };
      },
      onDragStart: function () {
        gsap.to(this.target, {
          scale: 1.1,
          duration: 0.2,
        });
      },
      onDragEnd: function () {
        gsap.to(this.target, {
          scale: 1,
          duration: 0.2,
        });
      },
    });
  }

  gsap.fromTo(
    pathRef.value,
    {
      drawSVG: "0%",
    },
    {
      drawSVG: "100%",
      duration: 2,
      ease: "power1.inOut",
      repeat: 10,
      yoyo: true,
    }
  );

  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
 
  const circlePath =
    "M 50 0 C 50 0, 100 0, 100 50 C 100 50, 100 100, 50 100 C 50 100, 0 100, 0 50 C 0 50, 0 0, 50 0 Z";
  const starPath =
    "M 50 0 C 50 0, 55 20, 61 35 C 61 35, 80 35, 98 35 C 98 35, 70 45, 68 57 C 68 57, 75 75, 79 91 C 79 91, 60 80, 50 70 C 50 70, 40 80, 21 91 C 21 91, 25 75, 32 57 C 32 57, 30 45, 2 35 C 2 35, 20 35, 39 35 C 39 35, 45 20, 50 0 Z";
 
  timeline.to(shapeRef.value, {
    duration: 3,
    morphSVG: starPath,
    ease: "power2.inOut",
  });
 
  timeline.to(shapeRef.value, {
    duration: 3,
    morphSVG: circlePath,
    ease: "power2.inOut",
  });

  const timeline2 = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
 
  timeline2.to(circleRef.value, {
    duration: 3,
    motionPath: {
      path: pathRef2.value,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      curviness: 1,
      type: "cubic",
      resolution: 100,
      align: pathRef2.value,
    },
    ease: "none",
  });

  gsap.to(textRef.value, {
    // duration: 5,
    repeat: -1,
    yoyo: true,
    text: {
      value: "Welcome to GSAP!",
      delimiter: " ",
      newClass: "text-red-500",
    },
  });

  gsap.set([timeline11.value, timeline12.value, timeline13.value], {
    opacity: 0,
    y: 30,
    scale: 0.8,
    repeat: -1,
    yoyo: true,
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "back.out(1.7)",
    },
  });
 
  tl.to(timeline11.value, {
    opacity: 1,
    y: 0,
    scale: 1,
  })
    .to(
      timeline12.value,
      {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      "-=0.8"
    )
    .to(
      timeline13.value,
      {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      "-=0.8"
    );
});


onUnmounted(() => {
  if (draggable.value) {
    draggable.value.kill();
  }

  ScrollTrigger.getAll().forEach(t => t.kill());
})
</script>
<style scoped lang="scss">
.gsap {
  p,
  section {
    width: 100%;
    height: auto;
    max-height: 100vh;

    .box1,
    .box2 {
      width: 10vw;
      height: 10vw;
      background-color: antiquewhite;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 50%;
        height: 50%;
        background-color: crimson;
      }
    }

    .box2 {
      width: 20vw;
      height: 20vw;
      span {
        width: 5rem;
        height: 5rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.box8 {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .card {
    position: sticky;
    top: 15vh;
    width: 26rem;
    padding: 7rem 1rem;
    background-color: #2e251e;
  }
}

</style>

