<template>
    <div>Capacity: {{ capacity }}, but spacesLeft: {{ spacesLeft }}</div>
    <button @click="increaseCapacity">Increase Capacity</button>

    <h2>Attending</h2>
    <ul>
        <li v-for="(name, value) in attending" :key="value">{{ name }}</li>
    </ul>
</template>

<script lang="ts">
    import {defineComponent, ref, computed, reactive, toRefs} from 'vue'

    export default defineComponent({
        setup() {
            const capacity = ref(3)
            const attending = ref(['Tim', 'Bob', 'Joe'])
            const spacesLeft = computed(() => capacity.value - attending.value.length)
            const reactiveObject = reactive({
                capacity: 3,
                attending: ['Tim', 'Bob', 'Joe'],
                spacesLeft: computed(() => capacity.value - attending.value.length),
            })
            function increaseCapacity() {
                capacity.value++;
            }

            return {
                ...toRefs(reactiveObject),
                increaseCapacity,
            }
        }
    })
</script>
