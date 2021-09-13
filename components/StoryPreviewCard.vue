<template>
  <v-card max-width="500">
    <v-img height="250" :src="result.img"></v-img>
    <v-card-title>{{ result.title }}</v-card-title>
    <v-card-subtitle>Published On: {{ result.pubDate }}</v-card-subtitle>
    <v-chip-group column class="ml-2 my-n4">
      <v-chip
        v-for="(cat, index) in result.categories"
        :key="index"
        color="primary"
      >
        {{ cat }}
      </v-chip>
    </v-chip-group>
    <v-card-text v-html="result.preview"></v-card-text>
    <v-card-actions class="mr-2 mt-n2">
      <v-spacer></v-spacer>
      <v-btn color="success" @click="showDialog()">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['result', 'index'],
  data() {
    return {}
  },
  methods: {
    showDialog() {
      this.$emit('showDialog', this.index)
    },
  },
}
</script>

<style></style>
