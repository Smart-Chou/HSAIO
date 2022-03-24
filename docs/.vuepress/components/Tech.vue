<template>
    <div class="tech-stack">
        <h1>我的技术栈</h1>
        <div class="tech-logo">
            <div  v-for="teched in currentPageData" :key="teched.name" class="tech-logo-icon" :data-tooltip="teched.name"><img :src="teched.link" :alt="teched.name" /></div>
        </div>
    </div>
</template>

<script>
import techData from '../public/data/techData';

export default {
    data() {
        return {
            techData,
            currentPage: 1,
        };
    },
    computed: {
        currentPageData() {
            const start = (this.currentPage - 1) * 88;
            const end = this.currentPage * 88;
            return this.techData.slice(start, end);
        },
    },
    methods: {
        getCurrentPage(currentPage) {
            this.currentPage = currentPage;
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 165);
        },
    },
};
</script>

<style lang="stylus" scoped>
.home .tech-stack
    margin-top: 2.5rem
    padding: 1.2rem 0
    text-align: center
    border-top: 1px solid #eaecef

.home .tech-stack h1
    text-align: center
    color: #4e6e8e

.home .tech-stack .tech-logo
    text-align: center

.home .tech-stack .tech-logo-icon
    position: relative
    display: inline-block
    width: 128px
    height: 128px
    text-align: center
    transition-duration: 0.3s
    --transform-translate-x: 0
    --transform-translate-y: 0
    --transform-rotate: 0
    --transform-skew-x: 0
    --transform-skew-y: 0
    --transform-scale-x: 1
    --transform-scale-y: 1
    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))

.home .tech-stack .tech-logo-icon img
    padding: 32px
    width: 64px
    height: 64px

.home .tech-stack .tech-logo-icon:hover
    --transform-scale-x: 1.1
    --transform-scale-y: 1.1

.home .tech-stack .tech-logo-icon:hover:before
    content: ''
    position: absolute
    bottom: 13px
    left: 50%
    width: 0
    height: 0
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-bottom: 6px solid #0e2439
    margin-left: -6px

.home .tech-stack .tech-logo-icon:hover:after
    content: attr(data-tooltip)
    position: absolute
    bottom: -13px
    left: 0
    display: flex
    justify-content: center
    padding: 4px 8px
    margin: 0 auto
    width: 100%
    color: hsla(0, 0%, 100%, 0.88)
    background: #0e2439
    border-radius: 4px
</style>
