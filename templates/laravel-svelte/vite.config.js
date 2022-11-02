import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import autoProcess from "svelte-preprocess";

export default defineConfig(({ command, mode, ssrBuild }) => {
    if (command === "build") {
        console.log("using production config");
        return prodDev;
    } else {
        console.log("using dev config");
        return devConfig;
    }
});

const devConfig = {
    plugins: [
        svelte({ preprocess: autoProcess() }),
        laravel(["resources/sass/app.scss", "resources/js/app.js"])
    ]
};

const prodDev = {
    plugins: [
        svelte({ preprocess: autoProcess() }),
        laravel(["resources/sass/app.scss", "resources/js/app.js"])
    ],
    server: {
        https: true
    }
};
