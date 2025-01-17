import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

export default function MainForm(){

    const form = useForm()

    return (
        <div>
            <Form {...form}>
            <FormField
                control={form.control}
                name="userName"
                render={(field) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                    <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
        </Form>
        </div>
    )
}