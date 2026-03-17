<script>
export default {
    name: 'PaginationApp',
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="pagination">
        <button 
            class="pagination__arrow" 
            :disabled="currentPage === 1"
            @click="$emit('update:currentPage', currentPage - 1)"
        >
            <img src="@/assets/images/left-arrow.svg" alt="left-arrow" class="arrow-icon">
        </button>
        
        <button 
            v-for="page in totalPages"  
            :key="page"
            class="pagination__btn"
            :class="{ 'pagination__btn--active': currentPage === page }"
            @click="$emit('update:currentPage', page)"
        >
            {{ page }}
        </button>
        
        <button 
            class="pagination__arrow"
            :disabled="currentPage === totalPages"
            @click="$emit('update:currentPage', currentPage + 1)"
        >
            <img src="@/assets/images/right-arrow.svg" alt="right-arrow" class="arrow-icon">
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 70px;

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        font-size: $font-size-sm;
        font-weight: $font-weight-medium;
        color: $color-primary;
        background: none;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;

        &--active {
            color: $color-white;
            background: $color-secondary;
        }

        &:hover:not(&--active) {
            background: $color-secondary-light;
        }
    }

    &__arrow {
        padding: 0 10px;
        font-size: 20px;
        color: $color-primary;
        background: none;
        border: none;
        cursor: pointer;
        transition: color 0.2s ease;

        &:hover {
            color: $color-secondary;
        }

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    }
}
</style>
