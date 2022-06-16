import React, { useState } from "react";
import Timer from "./Timer";
import {
  Page,
  Layout,
  Button,
  Card,
  FormLayout,
  TextField,
  DatePicker,
} from "@shopify/polaris";
import { useCallback } from "react";
import timerSettings from "../../data/timerSettings";

export default function CreatedTimers({ setPage }) {
  
  const [hours, setHours] = useState(timerSettings.hours);
  const [minutes, setMinutes] = useState(timerSettings.minutes);
  const [seconds, setSeconds] = useState(timerSettings.seconds);

  const secondaryButton = (
    <Button secondary onClick={() => setPage("empty")}>
      Back
    </Button>
  );

  //datePicker states
  const date = new Date();

  const [{ month, year }, setDate] = useState({
    month: date.getMonth(),
    year: date.getFullYear(),
  });
  const [selectedDates, setSelectedDates] = useState({
    start: date,
    end: new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000),
  });
  const yesterday = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  const handleHoursChange = useCallback((newValue) => setHours(newValue), [])
  const handleMinutesChange = useCallback((newValue) => setMinutes(newValue), [])
  const handleSecondsChange = useCallback((newValue) => setSeconds(newValue), [])

  //here we setting timer
  const differenceInDatePickerDates =
    selectedDates.end.getDate() - selectedDates.start.getDate();

  const TIME_IN_MS =
    (((differenceInDatePickerDates * 24 + parseInt(hours))
    * 60 + parseInt(minutes)) * 60 + parseInt(seconds)) * 1000;

  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterChoosenTime = TIME_IN_MS + NOW_IN_MS;

  return (
    <Page title="Your clocks is here!" primaryAction={secondaryButton}>
      <Layout>
        <Card sectioned>
          <FormLayout>
            <DatePicker
              year={year}
              month={month}
              disableDatesBefore={yesterday}
              selected={selectedDates}
              onChange={setSelectedDates}
              onMonthChange={handleMonthChange}
              allowRange
              multiMonth
            />

            <TextField
              label="Hours"
              type="number"
              value={hours}
              onChange={handleHoursChange}
              autoComplete="off"
            />
            <TextField
              label="Minutes"
              type="number"
              value={minutes}
              onChange={handleMinutesChange}
              autoComplete="off"
            />
            <TextField
              label="Seconds"
              type="number"
              value={seconds}
              onChange={handleSecondsChange}
              autoComplete="off"
            />
          </FormLayout>
        </Card>
        <Card>
          <Timer targetDate={dateTimeAfterChoosenTime} />
        </Card>
      </Layout>
    </Page>
  );
}
