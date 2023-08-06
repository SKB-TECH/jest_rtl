import { render , screen} from "@testing-library/react"
import Great from "./Great"

test('great renders correctly', () => {
   render(<Great/>);
   const textElement=screen.getByText(/Hello/i);
   expect(textElement).toBeInTheDocument();
})

test('great a name argument', () => {
  render(<Great name="Benjamin" />);
  const textElement=screen.getByText(/Hello Benjamin/i);
  expect(textElement).toBeInTheDocument();

})
