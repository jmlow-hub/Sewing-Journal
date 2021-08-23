import React from 'react'
import CalendarInput from '../../components/CalendarInput';
import NumberInput from '../../components/NumberInput/';
import TextInput from '../../components/TextInput/';
import styles from "./JournalPage.module.scss";
import TextArea from '../../components/TextArea/';

const JournalPage = () => {
  return (
    <div className={styles.journalPage}>
      <h2>My new make:</h2>

      <CalendarInput />
      <TextInput />
      <NumberInput />
      <TextArea />
      
    </div>
  )
}

export default JournalPage
