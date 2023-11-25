import { styled } from "goober"
import { useState } from "react"
import { days, monthsFull } from "./lib/util"

interface StrengthTrainingExercise {
  type: 'upper' | 'lower' | 'core' | 'skills' | 'recovery'
}
interface RunningExercise {
  type: 'sprint' | 'tempo' | 'base' | 'long' | 'recovery'
  distance: number
}
type Exercise = {
  type: StrengthTrainingExercise | RunningExercise
  duration: number
}
interface AmPmSchedule {
  am: Exercise
  pm: Exercise
}
interface WholeDaySchedule {
  wholeDay: Exercise
}
interface Time {
  hour: number
  minute: number
}
interface CustomSchedule {
  exercises: Map<Time, Exercise>
}
type Schedule = AmPmSchedule | WholeDaySchedule | CustomSchedule
interface Day {
  schedule: Schedule
}
const Flex = styled('div')`
display: flex;
`;
const Grid = styled('div')`
display: grid;
`;
const Calendar = styled(Grid)`
grid-template-columns: repeat(7, 1fr);
gap: ${({theme}) => theme.types.p2};
width: min(80vw, 300px);
`;
const CalendarButton = styled(Flex)`
align-items: center;
justify-content: center;
padding: ${({theme}) => themes.types.p2};`
export function App() {
  const [date, setDate] = useState(new Date());
  const changeDate = (number: number) => {
    const newDate = new Date(date.getTime());
    newDate.setMonth(date.getMonth() + number);
    setDate(newDate);
  }
  const month = date.getMonth();
  const firstDayOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return (
    <>
      <div>
        <div>
          <div>
            <div onClick={() => changeDate(-1)}>&#8592;</div>
            <div>{monthsFull[month]}</div>
            <div onClick={() => changeDate(1)}>&#8594;</div>
          </div>
          <Calendar>
            {days.map((d)=><div>{d}</div>)}
            {(() => {
              let currentDay = 0;
              let monthStarted = false;
              let monthFinished = false;
              let numDaysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
              const days: number[] = [];
              for (let i = 0; i < 7 * 6; i++) {
                // if the month has not started
                if (!monthStarted) {
                  // see if it could start
                  if (i == firstDayOfTheMonth) {
                    monthStarted = true;
                    currentDay = 1;
                  } else {
                    // if it has not started and cannot start,
                    // get days from previous month
                    const daysTillStart = firstDayOfTheMonth - i;
                    const day = new Date(date.getFullYear(), date.getMonth(), -daysTillStart+1);
                    currentDay = day.getDate();
                  }
                  // if the month has started and not finished
                } else if (monthStarted && !monthFinished) {
                  // see if it should end
                  if (currentDay == numDaysInMonth) {
                    // reset to day one
                    monthFinished = true;
                    currentDay = 1;
                  } else {
                    // otherwise its just a normal day
                    currentDay += 1;
                  }
                } else if (monthFinished) {
                  currentDay += 1;
                }
                days.push(currentDay);
              }
              return days.map((day)=><div>{day}</div>);
            })()}
          </Calendar>
        </div>
        <div>{date.toLocaleDateString()}</div>
        <div>
          <h1>Title</h1>
          <p>AM: Easy Run (2 miles)</p>
          <p>PM: Upper Body Workout</p>
        </div>
      </div>
    </>
  )
}
