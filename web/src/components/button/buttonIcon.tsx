'use client'

import { ElementType } from "react"

interface ButtonIconProps {
  icon: ElementType;
  spinner?: ElementType;
  isPending?: boolean;
  size: number;
};

export function ButtonIcon({ icon: Icon, size, spinner: Spinner, isPending }: ButtonIconProps) {

  const conditionalRender = () => {

    if(Spinner) {
      if(isPending) return <Spinner size="sm" color="primary"/>
    }

    return <Icon size={size}/>
  }

  return (
    <>
      {conditionalRender()}
    </>
  )
}