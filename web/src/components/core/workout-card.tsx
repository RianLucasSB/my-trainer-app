import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


export function WorkoutCard() {
  return (
    <Card className="bg-primary text-white cursor-pointer max-w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">Back workout</CardTitle>
        <CardDescription>Lorem ipsum  illo laudantium aperiam?</CardDescription>
      </CardHeader>
      <CardContent>
        <ul >
          <li>4x12 inclined rows</li>
          <li>4x12 inclined rows</li>
          <li>4x12 inclined rows</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">See full workout</Button>
      </CardFooter>
    </Card>

  )
}