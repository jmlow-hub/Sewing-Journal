import React from 'react'
import CalendarInput from '../../components/CalendarInput';
import NumberInput from '../../components/NumberInput/';
import TextInput from '../../components/TextInput/';
import Button from "../../components/Button";
import styles from "./JournalPage.module.scss";
import TextArea from '../../components/TextArea/';

const JournalPage = () => {
  return (
    <div className={styles.journalPage}>
      

      <CalendarInput />
      <TextInput />
      <NumberInput />
      <TextArea />
      <Button />
      
    </div>
  )
}

export default JournalPage
