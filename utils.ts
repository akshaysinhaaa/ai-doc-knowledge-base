import { Pinecone } from "@pinecone-database/pinecone";
import { Document } from "langchain/document";

export async function updateVectorDB(
    client: Pinecone,
    indexname: string,
    namespace: string,
    docs: Document[],
    progressCallback: (fileName: string, totalChunks: number, chunksUpserted: number, isComplete: boolean) 

) {
    
}