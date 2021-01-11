<template>
    <teleport to="#end-of-body" :disabled="!showText">
        TEST
    </teleport>
    <div>
        This should be at the top.
    </div>
    <button @click="showText = !showText">
        Toggle showText
    </button>
</template>

<script lang="ts">
    import {defineComponent, Ref, ref} from 'vue'

    export default defineComponent({
        setup() {
            const showText: Ref = ref(false)

            return {
                showText,
            }
        }
    })
</script>
