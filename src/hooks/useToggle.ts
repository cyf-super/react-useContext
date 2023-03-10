import { useState, useCallback } from "react";

export const useToggle = (flag = false) => {
  const [value, setValue] = useState(flag)

  const toggle = useCallback(() => {
    setValue(v => !v)
  }, [])

  return [value, toggle] as const
}