import { defineStore } from "pinia";
import { supabase } from "../lib/supabaseClient";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    todosByUserId: [],
  }),
  getters: {
    getTodosLength(state) {
      return state.todos.length;
    },
    getUserTodos(state) {
      return state.todosByUserId;
    },
    getUserTodosLength(state) {
      return state.todosByUserId.length;
    },
    getUserDoneTodosLength(state) {
      return state.todosByUserId.filter((todo) => todo.todo_done).length;
    },
    getUserTodoById(state) {
      return (id) => state.todosByUserId.find((t) => t.id == id);
    },
  },
  actions: {
    async fetchTodosData() {
      try {
        let { data: todos, error } = await supabase.from("todos").select();
        this.todos = [...todos];
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTodoDataByUser(userId) {
      try {
        let { data: todos, error } = await supabase
          .from("todos")
          .select()
          .eq("user_id", userId);
        this.todosByUserId = todos;
        if (error) throw error;
        return this.todosByUserId;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTodoDataByUserAndId(userId, todoId) {
      // await this.fetchTodoDataByUser(userId);
      // return this.todosByUserId.find((todo) => todo.id == todoId);

      try {
        let { data: todo, error } = await supabase
          .from("todos")
          .select()
          .eq("user_id", userId)
          .eq("id", todoId);

        if (error) throw error;
        return todo;
      } catch (error) {
        console.error(error);
      }
    },
    async insertData(todoName, userId) {
      const { data, error } = await supabase
        .from("todos")
        .insert({
          todo_name: todoName,
          user_id: userId,
        })
        .select();

      this.todos = [...this.todos, ...data];
      this.todosByUserId = [...this.todosByUserId, ...data];
    },
    async deleteData(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todosByUserId = this.todosByUserId.filter((todo) => todo.id !== id);

      const { error } = await supabase.from("todos").delete().eq("id", id);
    },

    async updateData(id, newValue) {
      const { error } = await supabase
        .from("todos")
        .update({ todo_name: newValue })
        .eq("id", id);
    },

    async toggleTodoDone(id) {
      let todoCur = this.todosByUserId.find((todo) => todo.id == id);
      todoCur.todo_done = !todoCur.todo_done;

      try {
        const { data: todo } = await supabase
          .from("todos")
          .select()
          .eq("id", id);

        const { data, error } = await supabase
          .from("todos")
          .update({ todo_done: !todo[0].todo_done })
          .eq("id", id)
          .select();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
