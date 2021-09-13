<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-text-field
          v-model="searchString"
          solo
          rounded
          clearable
          color="secondary"
          append-outer-icon="mdi-send"
          @click:append-outer="searchFeed"
        >
          <template #append>
            <v-tooltip bottom>
              <template #activator="{ on }">
                <v-btn icon color="secondary" @click="searchTestFeed()">
                  <v-icon v-on="on">{{
                    usingTestFeed
                      ? 'mdi-emoticon-wink-outline'
                      : 'mdi-emoticon-outline'
                  }}</v-icon>
                </v-btn>
              </template>
              {{ tooltipString }}
            </v-tooltip>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <div v-if="!dialog">
      <v-row class="d-flex justify-center mb-4 mt-n6">
        <v-btn
          v-if="searchResults.length > 0"
          color="accent"
          @click="deleteSearch"
        >
          Clear Search
        </v-btn>
      </v-row>
      <v-row
        v-for="(result, index) in searchResults"
        :key="index"
        class="d-flex justify-center mb-2"
      >
        <StoryPreviewCard
          :result="result"
          :index="index"
          @showDialog="toggleDialog"
        />
      </v-row>
    </div>
    <StoryDialog
      v-if="dialog"
      :dialog="dialog"
      :title="searchResults[storyIndex].title"
      :story="searchResults[storyIndex].story"
      @closeDialog="toggleDialog"
    />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import StoryPreviewCard from '../components/StoryPreviewCard.vue'
import StoryDialog from '../components/StoryDialog.vue'
export default {
  components: {
    StoryPreviewCard,
    StoryDialog,
  },
  data() {
    return {
      searchString: null,
      searchResults: [],
      tooltipString: 'Use the test URL!',
      usingTestFeed: false, // boolean used to toggle smiley face :D
      dialog: false, // boolean used to toggle dialog activity
      storyIndex: 0, // index of preview card. used to pass story and title to dialog
    }
  },
  methods: {
    ...mapActions(['fetchFeed', 'deleteFeed']),
    // search the test feed provided in assignment
    async searchTestFeed() {
      await this.fetchFeed()
      this.searchResults = this.$store.getters.getFeedResults
      this.searchString = this.$store.getters.getUrlString
      this.usingTestFeed = true
    },
    // search a feed that is entered into the searchbar
    async searchFeed() {
      await this.fetchFeed(this.searchString)
      this.searchResults = this.$store.getters.getFeedResults
      this.searchString = this.$store.getters.getUrlString
      this.usingTestFeed = false
    },
    toggleDialog(value) {
      this.storyIndex = value
      this.dialog = !this.dialog
    },
    deleteSearch() {
      this.deleteFeed()
      this.searchResults = this.$store.getters.getFeedResults
      this.searchString = this.$store.getters.getUrlString
    },
  },
}
</script>

<style></style>
