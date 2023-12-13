'use client'

import { Todo } from "@/interfaces/todo";
import { ReactNode } from "react";

interface ButtonRootProps {
  color: "red" | "green";
  onClick: (todo: Todo) => void;
  todo: Todo;
  children: ReactNode;
}

const colors = {
  red: 'bg-red-300',
  green: 'bg-green-300',
};

export function ButtonRoot({ color, children, onClick, todo }: ButtonRootProps) {

  const colorClass = colors[color];

  return (
    <button onClick={() => onClick(todo)} className={`w-7 h-7 flex justify-center items-center
     rounded ${colorClass} text-gray-950`}>
      {children}
    </button>
    
  )
}