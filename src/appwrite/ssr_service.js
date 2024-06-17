import config from "../config/config";
import {
    Client,
    Databases,
    Storage,
} from "node-appwrite";

export class Service {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
            .setKey(config.appwriteApiKey);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // async createPost({ title, slug, content, featuredImage, status, userId }) {
    //     try {
    //         return await this.database.createDocument(
    //             config.appwriteDatabaseId,
    //             {
    //                 title,
    //                 body: content,
    //                 featuredImage,
    //                 status,
    //                 userId,
    //             },
    //             [slug]
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: createPost :: error :: ", error);
    //     }
    // }

    // async updatePost(slug, { title, content, featuredImage, status }) {
    //     try {
    //         return await this.database.updateDocument(
    //             config.appwriteDatabaseId,
    //             slug,
    //             {
    //                 title,
    //                 body: content,
    //                 featuredImage,
    //                 status,
    //             }
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: updatePost :: error :: ", error);
    //     }
    // }

    // async deletePost(slug) {
    //     try {
    //         await this.database.deleteDocument(config.appwriteDatabaseId, slug);
    //     } catch (error) {
    //         console.log("Appwrite service :: deletePost :: error :: ", error);
    //     }
    // }

    async getPosts(queries = []) {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error :: ", error);
        }
    }

    // async getFilePreview(fileId) {
    //     return await this.storage.getFilePreview(
    //         config.appwriteBucketID,
    //         fileId
    //     );
    // }

    // async getPost(slug) {
    //     try {
    //         return await this.database.getDocument(
    //             config.appwriteDatabaseId,
    //             slug
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: getPost :: error :: ", error);
    //     }
    // }

    // async uploadFile(file) {
    //     try {
    //         return await this.storage.createFile(file);
    //     } catch (error) {
    //         console.log("Appwrite service :: uploadFile :: error :: ", error);
    //     }
    // }
}

const ssrService = new Service();
export default ssrService;
