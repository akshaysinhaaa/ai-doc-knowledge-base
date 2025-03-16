import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const VectorDBpage = (props: Props) => {
  return (
    <main className='flex flex-col items-center p-24'>
        <Card>
            <CardHeader>
              <CardTitle>Update Knowledge Base</CardTitle>
              <CardDescription>Add new Documents to your Vector DB</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
        </Card>
    </main>
  )
}

export default VectorDBpage