import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const formSchema = z.object({
  username: z.string(),
  password: z.string().min(4, "Password must have at least 4 characters"),
})

type FormValue = z.infer<typeof formSchema>

export function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: FormValue) {
    console.log(values)
  }

  return (
    <div className="flex items-center bg-primary justify-center h-screen min-h-screen w-screen">
      <div className="bg-foreground p-12 w-[520px] text-white rounded-md border border-white ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="w-[70%]" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input className="w-[70%]" type="password" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-1 items-center gap-4">
              <div className="w-full border border-white" />
              <Button className="flex p-6 " type="submit" variant="secondary">Login</Button>
              <div className="w-full border border-white" />
            </div>

            <span>Or <Link className="hover:underline" to="/sign">create your account</Link></span>
          </form>
        </Form>
      </div>
    </div>
  )
}