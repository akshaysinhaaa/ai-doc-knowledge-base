import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Database, LucideLoader2, MoveUp, RefreshCcw } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

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
                  <div className='gap-4'>
                    <Button>
                      
                    </Button>
                      <Textarea />
                  </div>
                </div>
                <Button variant={'outline'} className='w-full h-full'>
                  <Database size={50}/>
                </Button>
              </div>
            </CardContent>
        </Card>
    </main>
  )
}

export default VectorDBpage