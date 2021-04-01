import { writable } from "svelte/store";

// Todos
const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
export const todos = writable(storedTodos);
todos.subscribe((value) => {
  localStorage.setItem("todos", JSON.stringify(value.constructor === Array ? value : []));
});

// Theme
const storedTheme = localStorage.getItem("theme") || "dark";
export const theme = writable(storedTheme);
theme.subscribe((value) => {
  localStorage.setItem("theme", value === "light" ? "light" : "dark");
});

// Meme autoload
const storedMemeAutoload = (localStorage.getItem("memeAutoload") || "true") === "true" ? true : false;
export const memeAutoload = writable(storedMemeAutoload);
memeAutoload.subscribe((value) => {
  localStorage.setItem("memeAutoload", value === true ? "true" : "false");
});
