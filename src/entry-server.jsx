import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { createStore } from "./store/store.js";
import appwriteService from "./appwrite/ssr_service";
import appwriteCsrService from "./appwrite/conf_service";
import { Query } from "appwrite";

export async function render(url, ssrManifest, options) {
    const store = createStore();
    const posts = await appwriteService
        .getPosts([Query.equal("status", "active")])
        .then((res) => {
            if (res) {
                return res.documents;
            }
        });
    // console.log(initialPosts)
    const initialPosts = await Promise.all(
        posts.map(async (post) => {
            const imageUrl = appwriteCsrService.getFilePreview(
                post.featuredImage
            );
            // console.log(imageUrl.href);
            return {
                ...post,
                imageUrl: imageUrl,
            };
        })
    );
    // console.log("server:  ", initialPosts);
    // console.log(initialPosts);
    // const initialPosts = [];
    const appHtml = renderToPipeableStream(
        <Provider store={store}>
            <StaticRouter location={`/${url}`}>
                <AppRoutes initialPosts={initialPosts} />
            </StaticRouter>
        </Provider>,
        options
    );

    const preloadedState = store.getState();
    return { appHtml, preloadedState, initialPosts };
}
