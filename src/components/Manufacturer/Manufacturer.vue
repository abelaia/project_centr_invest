<script>
import AppInputButton from '@/components/UI/AppInputButton.vue';
import AppCheckbox from '@/components/UI/AppCheckbox.vue'
import AppHideShowButton from '@/components/UI/AppHideShowButton.vue'
import { manufacturers } from '@/constants/manufacturers';

export default {
    name: 'ManufacturerList',
    components: {
        AppInputButton,
        AppCheckbox,
        AppHideShowButton,
    },
    data() {
        return {
            searchQuery: '',
            selectedManufacturers: [],
            isExpanded: false,
            manufacturers,
        };
    },
    computed: {
        filteredManufacturers() {
            if (!this.searchQuery) {
                return this.manufacturers;
            }
            
            return this.manufacturers.filter(({name}) => 
                name.toLowerCase().includes(this.searchQuery.toLowerCase()),
            );
        },
        displayedManufacturers() {
            if (this.isExpanded) {
                return this.filteredManufacturers;
            }

            return this.filteredManufacturers.slice(0, 4);
        },
    },
};
</script>

<template>
    <div class="manufacturer">
        <h3 class="manufacturer__title">
            Производитель
        </h3>
        <AppInputButton
            placeholder="Поиск..."
            :icon="require('@/assets/images/search.svg')"
            buttonAlt="search"
            variant="search"
            @submit="handleSearch"
        />
        <div class="manufacturer__list" :class="{ 'manufacturer__list--expanded': isExpanded }">
            <AppCheckbox
                v-for="item in displayedManufacturers" 
                :key="item.id"
                v-model="selectedManufacturers"
                :value="item.id"
                :label="item.name"
                :count="item.count"
            />
        </div>
        <AppHideShowButton
            class="manufacturer__btn-hide-show"
            v-if="manufacturers.length > 4"
            :expanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
        />
    </div>    
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.manufacturer {
    margin-top: 30px;
    
    .manufacturer__title {
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
    }

    .manufacturer__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 15px;
    }

    .manufacturer__btn-hide-show {
        margin-top: 15px;
    }
}
</style>
