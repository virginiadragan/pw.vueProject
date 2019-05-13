<template>
    <div>
        <b-form-group label="Marime:">
            <b-form-radio-group
            v-model="selected"
            :options="optionsM"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Forma:">
            <b-form-radio-group
            v-model="selected1"
            :options="optionsF"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Tipul:">
            <b-form-radio-group
            :options="optionsT"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        Total price:<span class="pricePizza" v-if="selected !=0">{{selected + this.$store.getters.getToppingPrice}}</span>
    </div>
</template>
<script>
  export default {
      name : 'radioBtn',
    data() {
      return {
        selected: 65,
        selected1: 'Rotund',
        optionsM: [
          { text: 'S', value: 65 },
          { text: 'L', value: 85 },
          { text: 'XL', value: 100 }
        ],
        optionsF: [
          { text: 'Rotund', value: 'Rotund'},
          { text: 'Oval', value: 'Oval' }
        ],
        optionsT: [
          { text: 'Subtire'},
          { text: 'Gros' }
        ]
      }
    }
  }
</script>