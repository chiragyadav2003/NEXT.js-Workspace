"use client"
import { DeleteTodo } from "@/actions/deleteTodo";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
interface todoCardProps{
    todos:{
        id:Number,
        content:string
    }[],
    // router:NextRouter
}

export function TodoCard({todos}:todoCardProps){
    const { toast } = useToast()
    const router = useRouter()
    return (
        <div className="w-[400px] lg:w-[600px]"> 
            <ul >
                {todos.map((todo)=>{
                    const id = todo.id
                    return (
                        <li className=" list-disc mb-4 rounded-2xl px-4 py-3 border-2  border-slate-300 " key={todo.content}>
                            <div className="flex items-center">
                                <div className="flex justify-start items-start w-full  ">
                                    {todo.content}
                                </div>
                                <div className=" flex justify-end  w-full ">
                                    <Button
                                        onClick={async()=>{
                                            await DeleteTodo(Number(id))
                                            toast({
                                                description: "todo deleted successfully",
                                            })
                                            router.refresh()
                                        }}
                                    >Delete Todo</Button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}