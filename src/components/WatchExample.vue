<template>
    <div>
        <p>
            Найди свой город <input type="text" v-model="search">
        </p>
        <p>
            Твой город: {{ results }}
        </p>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref, Ref, watchEffect, watch} from 'vue'
    import {findCity} from '@/api/eventApi'

    export default defineComponent({
        setup() {
            const search: Ref = ref('')
            const results: Ref = ref('')

            watchEffect(() => {
                results.value = findCity(search.value)
            })

            // OR
            // watch(search,() => {
            //     results.value = findCity(search.value)
            // }, {immediate: true})

            return {
                search,
                results,
            }
        }
    })
</script>
