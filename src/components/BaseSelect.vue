<template>
    <label v-if="label">{{ label }}</label>
    <select
        :value="modelValue"
        v-bind="{
            ...$attrs,
            onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
        }"
    >
        <option
            v-for="option in options"
            :value="option"
            :key="option"
            :selected="option === modelValue"
        >{{ option }}</option>
    </select>
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
                type: String,
                default: ''
            },
            options: {
                type: Array,
                required: true
            }
        }
    })
</script>
