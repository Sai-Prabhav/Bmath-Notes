import { QuartzTransformerPlugin } from "../types"

import fs from "fs"
export const AddContent: QuartzTransformerPlugin<{ }> = (opts) => {
  
  var content = "not working"
  fs.readFile(
    "commands.tex",
    (err: any, data: { toString: () => any }) => {
      if (err) throw err
  
      content = data.toString()
    },
  )
  
  
  return {
    name: "AddContent",
    textTransform(_ctx, src) {
      if (src instanceof Buffer) {
        src = src.toString().replace(/`\\end{proof}`/g, "\n\$\\blacksquare\$\n").replace(/`\\begin{proof}`/g, "\n\$\\bf{proof}\$\n")
      }
      else if (src instanceof String) {
        src = src.replace(/`\\end{proof}`/g, "\n\$\\blacksquare\$\n").replace(/`\\begin{proof}`/g, "\n\$\\bf{proof}\$\n")
        
      } 
      else {
        src = src.toString().replace(/`\\end{proof}`/g, "\n\$\\blacksquare\$\n").replace(/`\\begin{proof}`/g, "\n\$\\bf{proof}\$\n")
      }
      
      return `${content}\n${src}`
    },
  }
}