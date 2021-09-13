<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon href="https://github.com/styrofomeBoots" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        href="https://www.linkedin.com/in/sethnewbill/"
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'KcM Search App',
    }
  },
}
</script>
