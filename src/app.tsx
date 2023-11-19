import './app.css'
interface StrengthTrainingExercise {
  type: "upper" | "lower" | "core" | "skills" | "recovery"
}
interface RunningExercise {
  type: "sprint" | "tempo" | "base" | "long" | "recovery"
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
type Schedule = AmPmSchedule | WholeDaySchedule | CustomSchedule;
interface Day {
  schedule: Schedule;
}

export function App() {
  return (
    <>
      <div class="container">
        <div class="date">
          {new Date().toLocaleDateString()}
        </div>
        <div class="day">
          <h1>Title</h1>
          <p>AM: Easy Run (2 miles)</p>
          <p>PM: Upper Body Workout</p>
        </div>
      </div>
    </>
  )
}
