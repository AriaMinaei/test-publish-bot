import {echo} from "zx"

const data = {
  a: 1,
  b: "a string",
  d: {
    val: `a nested string, with }, and {, and quotes \", and backslashes \\, and newlines\n, and backticks\``,
  },
}

console.log("hi")

await echo`{data}={${JSON.stringify(data)}} >> $GITHIB_OUTPUT`
