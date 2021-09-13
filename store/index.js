import axios from 'axios'
import xml2js from 'xml2js'

const state = () => ({
  feedResults: [], // element example: {story, img, pubDate, title, preview, categories}
  urlString: null,
  parseError: null,
  fetchError: null,
})

const getters = {
  getFeedResults: (state) => state.feedResults,
  getUrlString: (state) => state.urlString,
  getParseError: (state) => state.parseError,
  getFetchError: (state) => state.fetchError,
}

const actions = {
  // +======================================================+
  // |                    FETCH RSS FEED                    |
  // +======================================================+
  // fetch and parse the feed provided by the url
  //  if no url is passed to the function then the test url is used
  //  the xml from the feed is parsed into json
  async fetchFeed({ commit }, url = null) {
    // test url provided in readme
    const testUrl =
      'https://www.simplifyingthemarket.com/en/feed/?a=186161-a1b0b6b3364ed92fe215bff8a46af47a'
    // setting up an xml to json parser
    const parser = new xml2js.Parser({ ignoreAttrs: true, trim: true })
    // if a url isn't passed as an argument then use the test url
    const feedUrl = url == null ? testUrl : url
    // commit url string to state
    commit('setUrlString', feedUrl)
    try {
      // make axios request to get RSS data
      const response = await axios.get(feedUrl)
      // attempt to parse data into json
      //   if parsing fails, commit the parse error to state
      //   if parsing is successfull, clean up the returned data to be used
      parser.parseString(response.data, (error, result) => {
        if (error) {
          commit('setParseError', error)
        } else {
          const data = result.rss.channel[0].item
          const cleanData = []
          data.forEach((element) => {
            const categories = element.category
            const pubDate = element.pubDate[0].split(' +')[0]
            const title = element.title[0].split(' [')[0]
            const preview = element.description[0].split('549px" />')[1]
            const story = element['content:encoded'][0]
            let img = story.split('src="')[1]
            img = img.split('"')[0]
            cleanData.push({ story, img, pubDate, title, preview, categories })
          })
          // commit the cleaned up data to the feed results in state
          commit('setFeedResults', cleanData)
        }
      })
      // error handling for http request
    } catch (exception) {
      commit('setFetchError', exception)
    }
  },

  // +=======================================================+
  // |                    DELETE RSS FEED                    |
  // +=======================================================+
  // REMOVE SEARCH STRING AND SEARCH RESULTS
  deleteFeed({ commit }) {
    commit('removeFeedResults')
    commit('removeUrlString')
  },
}

const mutations = {
  setFeedResults: (state, results) => (state.feedResults = results),
  setUrlString: (state, urlString) => (state.urlString = urlString),
  setParseError: (state, error) => (state.parseError = error),
  setFetchError: (state, error) => (state.fetchError = error),
  removeFeedResults: (state) => (state.feedResults = []),
  removeUrlString: (state) => (state.urlString = ''),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
