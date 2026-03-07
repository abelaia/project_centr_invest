<template>
    <div class="manufacturer">
        <h3 class="manufacturer__title">Производитель</h3>
    
        <SearchButton />
        
        <div class="manufacturer__list" :class="{ 'manufacturer__list--expanded': isExpanded }">
            <label 
                v-for="item in displayedManufacturers" 
                :key="item.id" 
                class="manufacturer__item"
            >
                <input 
                    type="checkbox" 
                    class="manufacturer__checkbox"
                    v-model="selectedManufacturers"
                    :value="item.id"
                >
                <span class="manufacturer__name">{{ item.name }}</span>
                <span class="manufacturer__count">({{ item.count }})</span>
            </label>
        </div>

        <button 
            v-if="manufacturers.length > 4" 
            class="manufacturer__btn"
            @click="isExpanded = !isExpanded"
        >
            {{ isExpanded ? 'Скрыть ▲' : 'Показать все ▼' }}
        </button>
    </div>    
</template>

<script>
import SearchButton from '@/components/Buttons/SearchButton.vue';

export default {
    name: 'ManufacturerList',
    components: {
        SearchButton,
    },
    data() {
        return {
            searchQuery: '',
            selectedManufacturers: [],
            isExpanded: false,
            manufacturers: [
                { id: 1, name: 'Grifon ', count: 56 },
                { id: 2, name: 'Boyscout ', count: 66 },
                { id: 3, name: 'Paclan ', count: 166 },
                { id: 4, name: 'Булгари Грин ', count: 21 },
                { id: 5, name: 'Нэфис ', count: 45 },
                { id: 6, name: 'AOS ', count: 34 },
                { id: 7, name: 'BIMAX ', count: 28 },
                { id: 8, name: 'Sorti ', count: 52 },
                { id: 9, name: 'Grifon Pro ', count: 15 },
                { id: 10, name: 'Boyscout Premium ', count: 23 }
            ]
        };
    },
    computed: {
        filteredManufacturers() {
            if (!this.searchQuery) return this.manufacturers;
            return this.manufacturers.filter(m => 
                m.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        displayedManufacturers() {
            if (this.isExpanded) {
                return this.filteredManufacturers;
            }
            return this.filteredManufacturers.slice(0, 4);
        }
    }
}
</script>

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
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px; 

        .manufacturer__item {
            font-size: $font-size-sm;
            font-weight: $font-weight-regular;
            color: $color-primary;
        }
    }

    .manufacturer__btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: $font-size-xs;
        font-weight: $font-weight-medium;
        color: $color-primary;
    }
}
</style>
