import { type } from "os"

type GreatProps={
    name?:string;
}

const Great = (props:GreatProps) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

export default Great
