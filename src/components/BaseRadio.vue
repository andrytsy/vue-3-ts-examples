<template>
    <input
        @change="$emit('update:modelValue', $props.value)"
        :id="`radio-${$attrs.name}-${value}`"
        :checked="modelValue === value"
        :value="value"
        v-bind="$attrs"
        type="radio"
    />
    <label :for="`radio-${$attrs.name}-${value}`" v-if="label">{{ label }}</label>
</template>

<script>
    import {defineComponent} from 'vue'

    export default defineComponent({
        props: {
            label: {
                type: String,
                default: '',
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            value: {
                type: [String, Number],
                required: true,
            },
        },
        setup() {
            return {}
        }
    })
</script>

