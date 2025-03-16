import { Button } from '@/components/ui/button'
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
            <CardContent>
              <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-2 grid gap-4 border rounded-lg p-6'>

                </div>
                <Button variant={'outline'} className='w-full h-full'></Button>
              </div>
            </CardContent>
        </Card>
    </main>
  )
}

export default VectorDBpage