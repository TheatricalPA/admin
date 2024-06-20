"use client"

import { toast } from "sonner"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "@/components/submit-button"


interface Props {
  displayName: string
}

export function DisplayNameForm({ displayName }: Props) {
  return (
    <Card>
        <CardHeader>
          <CardTitle>Display Name</CardTitle>
          <CardDescription>
            Enter a name you would liked to have displayed to other users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="display_name" className="sr-only">
              Display Name
            </Label>
            <Input
              id="display_name"
              name="display_name"
              type="text"
              placeholder="John Smith"
              defaultValue={displayName}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton>Save</SubmitButton>
        </CardFooter>
    </Card>
  )
}
