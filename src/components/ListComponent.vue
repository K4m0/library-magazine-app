<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Publised Date</th>
            <th>Publiser</th>
            <th>Updated Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in Books" :key="book._id">
            <td>{{ book.isbn }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.description }}</td>
            <td>{{ book.published_date }}</td>
            <td>{{ book.publisher }}</td>
            <td>{{ book.updated_date }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: book._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteBook(book._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Books: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Books = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteBook(id) {
      let apiURL = `http://localhost:4000/api/delete-book/${id}`;
      let indexOfArrayItem = this.Books.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Books.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
