import { NextApiRequest, NextApiResponse } from "next";
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

export default async (req:NextApiRequest, res:NextApiResponse ) => {
    if(req.method === 'POST') {
        const { indexname, namespace } = JSON.parse(req.body)
        await handleUpload(indexname, namespace, res);
    }
}

function handleUpload(indexname: string, namespace: string, res: NextApiResponse) {
    const loader = new DirectoryLoader('./documents', {
        '.pdf': (path: string) => new PDFLoader(path)
    })
}
