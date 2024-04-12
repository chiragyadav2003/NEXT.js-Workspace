"use client"
import { DeleteTodo } from "@/actions/deleteTodo";
import { Button } from "./ui/button";

interface todoCardProps{
    todos:{
        id:Number,
        content:string
    }[]
}

export function TodoCard({todos}:todoCardProps){
    return (
        <div className="w-[400px]"> 
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