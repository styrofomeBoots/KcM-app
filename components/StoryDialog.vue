<template>
  <v-dialog v-model="showDialog" persistant width="900">
    <v-card v-if="dialog">
      <v-card-title class="text-h5 grey lighten-2">
        {{ title }}
      </v-card-title>
      <v-card-text v-html="story"></v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="closeDialog()"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog', 'story', 'title'],
  data() {
    return {
      showDialog: false,
    }
  },
  created() {
    this.showDialog = this.dialog
  },
  methods: {
    closeDialog() {
      this.showDialog = false
      this.$emit('closeDialog', 0)
    },
  },
}
</script>

<style></style>
