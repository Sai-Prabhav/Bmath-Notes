import { QuartzTransformerPlugin } from "../types"

import fs from "fs"
export const AddContent: QuartzTransformerPlugin<{ }> = (opts) => {
  
  var content = "not working"
  fs.readFile(
    "/home/greenflame/Desktop/quar/quartz/Custom Commands.latex",
    (err: any, data: { toString: () => any }) => {
      if (err) throw err
  
      content = data.toString()
      console.log(content)
    },
  )
  
  return {
    name: "AddContent",
    textTransform(_ctx, src) {
      if (src instanceof Buffer) {
        src = src.toString()
      }
  
      return `${content}\n${src}`
    },
  }
}