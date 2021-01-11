<template>

</template>

<script lang="ts">
 import {defineComponent, ref, Ref, watch} from 'vue'
 import {findCity} from '@/api/eventApi'

 export default defineComponent({
     setup() {
         const searchInput: Ref = ref('')
         const results: Ref = ref('')
         const loading: Ref = ref(false)
         const error: Ref = ref('')

         async function loadData(search: string) {
             loading.value = true
             error.value = null
             results.value = null

             try {
                 results.value = await findCity(search)
             } catch (err) {
                 error.value = err
             } finally {
                 loading.value = false
             }
         }

         watch(searchInput, () => {
             if (searchInput.value !== '') {
                 loadData(searchInput.value)
             } else {
                 results.value = null
             }
         })

         return  {
             searchInput,
             results,
             loading,
             error,
         }
     }
 })
</script>
