import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import {
    Home,
    Login,
    SignUp,
    AllPosts,
    AddPost,
    EditPost,
    Post,
} from "./pages/index";
import { AuthLayout } from "./components/index.js";

function AppRoutes({ initialPosts }) {
    // console.log("Routes: ",initialPosts);
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home initialPosts={initialPosts}/>} />
                <Route
                    path="login"
                    element={
                        <AuthLayout authentication={false}>
                            <Login />
                        </AuthLayout>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <AuthLayout authentication={false}>
                            <SignUp />
                        </AuthLayout>
                    }
                />
                <Route
                    path="all-posts"
                    element={
                        <AuthLayout authentication>
                            <AllPosts />
                        </AuthLayout>
                    }
                />
                <Route
                    path="add-post"
                    element={
                        <AuthLayout authentication>
                            <AddPost />
                        </AuthLayout>
                    }
                />
                <Route
                    path="edit-post/:slug"
                    element={
                        <AuthLayout authentication>
                            <EditPost />
                        </AuthLayout>
                    }
                />
                <Route
                    path="post/:slug"
                    element={
                        <AuthLayout authentication>
                            <Post />
                        </AuthLayout>
                    }
                />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
