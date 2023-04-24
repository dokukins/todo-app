import { defineStore } from "pinia";
import { supabase } from "../lib/supabaseClient";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null,
  }),
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    async getLoggedInUser() {
      try {
        this.currentUser = (await supabase.auth.getUser()).data.user;
      } catch (error) {
        console.error(error);
      }
    },
    async signOutUser() {
      try {
        const { error } = await supabase.auth.signOut();
        this.currentUser = null;
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    async signIn(email, password) {
      try {
        this.currentUser = (
          await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
        ).data.user;
      } catch (error) {
        console.error(error);
      }
    },
    async signUp(email, password) {
      try {
        this.currentUser = (
          await supabase.auth.signUp({
            email: email,
            password: password,
          })
        ).data.user;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
