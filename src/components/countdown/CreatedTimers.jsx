import React from 'react'
import Timer from './Timer';
import { Page, Layout, Button } from "@shopify/polaris";

export default function CreatedTimers({ setPage }) {

  //here we setting timer
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

  const secondaryButton = <Button secondary onClick={() => setPage('empty')}>Back</Button>

  return (
    <Page title='Your clocks is here!'
      primaryAction={secondaryButton}
    >
      <Layout>
        <Timer targetDate={dateTimeAfterThreeDays} />
      </Layout>
    </Page>
  )
}

