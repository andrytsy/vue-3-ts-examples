<template>
    <input
        @change="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
        type="checkbox"
    >
    <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        props: {
            label: {
                type: String,
                default: '',
            },
            modelValue: {
                type: Boolean,
                default: false,
            }
        }
    })
</script>
