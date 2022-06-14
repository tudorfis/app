import React, {useState} from 'react'
import CreatedTimers from './CreatedTimers';
import { Page, Card, Layout, Button, EmptyState} from "@shopify/polaris";

export default function Home() {

    const [page, setPage] = useState('empty')

    if (page !== 'empty') return <CreatedTimers setPage={setPage}/>

    return (
        <Page 
            title='Add your own countdown clock!'
            primaryAction={
                    <Button primary onClick={() => setPage('timer')}>Create a new timer</Button>
                }
            >
            <Layout sectioned>
                <Card sectioned>
                    <EmptyState
                        image="https://i.ibb.co/6bsTzmN/svg-icon-free-fast-icon-1024848.png"
                        action={{
                            content: 'Create a new timer',
                            onAction: () => setPage('timer')
                        }}
                        heading="Here you can create your timers, or manage the existing ones"
                    >
                        <p>Start by creating a new timer</p>
                    </EmptyState>
                </Card>
            </Layout>
        </Page>
    )
}
