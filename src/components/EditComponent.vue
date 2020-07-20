<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Student</h3>
      <form @submit.prevent="handleUpdateForm">
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
          <button class="btn btn-danger btn-block">Update</button>
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
      book: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-book/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.book = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-book/${this.$route.params.id}`;

      axios
        .post(apiURL, this.book)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
