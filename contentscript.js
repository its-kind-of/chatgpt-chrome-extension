// Import the necessary libraries
import Vue from "vue";
import VueGPT from "vue-gpt";

// Create a new Vue instance
const app = new Vue({
    el: "#app",

    data() {
        return {
            content: "",
            summary: "",
            paraphrase: "",
            isAIContent: false,
        };
    },

    mounted() {
        // Get the current page's content
        const content = document.querySelector("body").textContent;

        // Initialize the GPT model
        const gpt = new VueGPT();

        // Summarize the content
        this.summary = gpt.summarize(content);

        // Paraphrase the content
        this.paraphrase = gpt.paraphrase(content);

        // Check if the content contains AI-generated or manipulated content
        this.isAIContent = gpt.isAIContent(content);
    },
});