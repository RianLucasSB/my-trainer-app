import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4, "Password must have at least 4 characters"),
})

type FormValue = z.infer<typeof formSchema>

export function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: FormValue) {
    console.log(values)
  }

  return (
    <div className="flex items-center bg-primary  justify-center h-screen min-h-screen w-screen">
      <div className=" bg-foreground p-12 w-[520px] text-white rounded-md border border-white ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="w-[70%]" placeholder="shadcn" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input className="w-[70%]" placeholder="shadcn" {...field} />
                  </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-1 items-center gap-4">
              <div className="w-full border border-white" />
              <Button className="flex p-6 " type="submit" variant="secondary">Create account</Button>
              <div className="w-full border border-white" />
            </div>

            <span><Link className="hover:underline" to="/">Already have an account</Link></span>
          </form>
        </Form>
      </div>
    </div>
  )
}