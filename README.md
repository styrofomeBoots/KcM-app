# KcM-app

## Notes

Thank you very much for the opportunity to complete this evaluation! It was a fun little challenge. I did option B and used the Vue.js framework with Nuxt. Just wanted to give a few notes here:

- Any syntax choices I made I am completely open to changing if necessary. I have no problem adapting to team guidelines.
- I used the Vuex store and this seems like overkill for this size project, but I wanted to demonstrate my ability to use it.
- I chose to parse the xml into JSON. I did this parsing in the Vuex store. In a bigger project I would create seperate javascript files to hold modules that would handle that type of functionality and then import them where needed. I try to have functions within components only handle component functions, functions within the vuex store only handling vuex functionality, and additional functionality divided out into files that hold similar functionality and then I import them.
- Project Flow:
  - index.vue Includes the search bar with the preview card and story dialog imported in.
  - Instances of the preview card iterate over the search results and display.
  - Clicking "Read More" emits the index of the selected story from the search result array.
  - The selected story index is used to pass the relevant title and story to the story dialog.

Again, thank you so much for your consideration and I hope to speak with you soon!

## Instructions

Please choose one of the following minimal projects to complete:  
A. Very minimal API - Golang  
B. RSS Reader - Javascript
Please provide the source code either via git repo or zip file, and any notes you feel are necessary.

### Option A

Using Golang and any framework you choose (or no framework), put together a very simple API
providing standard CRUD operations on a resource you choose, have some fun with it!
Make sure your API meets the following criteria:

- An endpoint to create a new item
- An endpoint to read an item
- An endpoint to read all items
  - Set this endpoint up to allow for at least 2 different query parameters used to filter the
    resources returned in anyway you choose (i.e. an option to only return items with
    numbers in their titles, etc.)
- An endpoint to update an item
- An endpoint to delete an item
  Note: data can be setup using a database but does not need to be, feel free to use a hardcoded
  datastore

### Option B

Using vanilla Javascript or Javascript plus any framework you choose (other than jQuery), create a simple
app that accepts one input for an RSS feed URL and presents a visual list of the blog posts within that
RSS feed.
Use this feed URL for testing: https://www.simplifyingthemarket.com/en/feed/?a=186161-a1b0b6b3364ed92fe215bff8a46af47a  
For each item in the list, make sure to display the following:

- Featured image
- Title
- Date published
- Excerpt
- Button to read the full post

The button to read the full post should hide the list of all posts and display the full version of whichever
post was chosen along with a button to go back to the list.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
