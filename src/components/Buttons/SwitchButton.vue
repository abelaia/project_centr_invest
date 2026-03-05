<template>
    <div class="switch-container">
        <div class="switch-buttons">
            <button 
                class="switch-btn" 
                :class="{ active: activeTab === 'grid' }"
                @click="$emit('update:activeTab', 'grid')"
            >
                <img src="@/assets/images/grid-icon.svg" alt="grid" class="icon">
            </button>
            <button 
                class="switch-btn" 
                :class="{ active: activeTab === 'list' }"
                @click="$emit('update:activeTab', 'list')"
            >
                <img src="@/assets/images/list-icon.svg" alt="list" class="icon">
            </button>
            <div class="active-indicator" :style="{ left: indicatorPosition }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SwitchButton',
    props: {
        activeTab: {
            type: String,
            default: 'grid'
        }
    },
    computed: {
        indicatorPosition() {
            return this.activeTab === 'grid' ? '3px' : '50px';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.switch-container {
    display: flex;
    justify-content: flex-end;
    margin-left: 30px;

    .switch-buttons {
        position: relative;
        display: flex;
        width: 100px;
        height: 45px;
        background: $color-switch-bg;
        opacity: 0.2;
        border-radius: 30px;
        padding: 3px;

        .switch-btn {
            padding: 0;
            position: relative;
            z-index: 2;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            cursor: pointer;

            .icon {
                width: 16px;
                height: 16px;
                padding: 10px 16px;
                object-fit: contain;
            }
        }

        .active-indicator {
            position: absolute;
            top: 4px;
            left: 4px;
            bottom: 4px;
            width: 49px;
            height: 42px;
            background: $color-white;
            border-radius: 27px;
            transition: left 0.3s ease;
            z-index: 1;
            box-shadow: 0 2px 4px $color-indicator-shadow;
        }
    }
}
</style>
