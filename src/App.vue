<template>
    <router-view/>
    <div>
        <BaseInput
            v-model:salutation.capitalaze="form.salutation"
            v-model:name.capitalaze.reverse="form.name"
        />
        <p>
            Glad to see you again {{ form.salutation }} {{ form.name }}
        </p>
    </div>
    <div>
        <BaseSelect
            v-model="form.category"
            :options="categories"
        />
    </div>
    <div>
        <BaseCheckbox
            v-model="form.isChecked"
            :label="form.name"
        />
    </div>
    <div>
        <h3>Are you have pets?</h3>
        <BaseRadio
            v-model="form.pets"
            :value="1"
            label="Yes"
            name="pets"
        />
        <BaseRadio
            v-model="form.pets"
            :value="0"
            label="No"
            name="pets"
        />
    </div>

    <div id="end-of-body"></div>
</template>

<script lang="ts">
    import {defineComponent, reactive} from 'vue'
    import BaseInput from "@/components/BaseInput.vue";
    import BaseSelect from "@/components/BaseSelect.vue";
    import BaseCheckbox from "@/components/BaseCheckbox.vue";
    import BaseRadio from "@/components/BaseRadio.vue";

    export default defineComponent({
        components: {
            BaseInput,
            BaseSelect,
            BaseCheckbox,
            BaseRadio,
        },
        setup() {
            const form = reactive({
                salutation: '',
                name: '',
                category: '',
                isChecked: false,
                pets: 0,
            })

            const categories = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']

            return {
                form,
                categories,
            }
        },
    })
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
