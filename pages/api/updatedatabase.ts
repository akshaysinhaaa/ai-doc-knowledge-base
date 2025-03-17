import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest, res:NextApiResponse ) => {
    if(req.method === 'POST') {
        const { indexname, namespace } = JSON.parse(req.body)
        await handleUpload(indexname, namespace, res);
    }
}

function handleUpload(indexname: string, namespace: string, res: NextApiResponse) {
    throw new Error("Function not implemented.");
}
