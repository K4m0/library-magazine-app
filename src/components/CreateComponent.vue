<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Book</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>ISBN</label>
          <input
            type="text"
            class="form-control"
            v-model="book.isbn"
            required
          />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            v-model="book.title"
            required
          />
        </div>

        <div class="form-group">
          <label>Author</label>
          <input
            type="text"
            class="form-control"
            v-model="book.author"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            cols="40"
            rows="5"
            class="form-control"
            v-model="book.description"
          />
        </div>

        <div class="form-group">
          <label>Published Date</label>
          <input
            type="date"
            class="form-control"
            v-model="book.published_date"
          />
        </div>

        <div class="form-group">
          <label>Publisher</label>
          <input type="text" class="form-control" v-model="book.publisher" />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      book: {
        isbn: "",
        title: "",
        author: "",
        description: "",
        published_date: "",
        publisher: "",
        updated_date: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-book";

      axios
        .post(apiURL, this.book)
        .then(() => {
          this.$router.push("/view");
          this.book = {
            isbn: "",
            title: "",
            author: "",
            description: "",
            published_date: "",
            publisher: "",
            updated_date: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
