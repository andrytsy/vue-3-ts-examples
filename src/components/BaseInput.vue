<template>
    <select @change="updateSalutation">
        <option value="">-</option>
        <option
            v-for="item in salutations"
            :key="item"
            :value="item"
            :selected="salutation === item"
        >
            {{ item }}
        </option>
    </select>
    <input
        :value="name"
        @input="updateName"
        type="text"
    >
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    const salutations = [
        'Ms.',
        'Mrs.',
        'Miss',
        'Mx.',
        'Dr.',
    ]

    export default defineComponent({
        props: {
            salutation: {
                type: String,
                default: '',
            },
            salutationModifiers: {
                type: Object,
                default: () => ({})
            },
            name: {
                type: String,
                default: '',
            },
            nameModifiers: {
                type: Object,
                default: () => ({})
            },
        },
        setup(props, { emit }) {
            const updateSalutation = (event: any) => {
                const modifiers = props.salutationModifiers;
                let val = event.target.value;

                if (modifiers.sapitalaze) {
                    val = val.toUpperCase()
                }

                emit('update:salutation', val)
            }

            const updateName = (event: any) => {
                const modifiers = props.nameModifiers;
                let val = event.target.value;

                if (modifiers.sapitalaze) {
                    val = val.toUpperCase()
                }
                if (modifiers.reverse) {
                    val = val.split('').reverse().join('');
                }

                emit('update:name', val)
            }

            return {
                updateSalutation,
                updateName,
                salutations,
            };
        },
    });
</script>
