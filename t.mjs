import {echo} from "zx"

const data = {
  a: 1,
  b: "a string",
  d: {
    val: `a nested string, with }, and {, and quotes \", and backslashes \\, and newlines\n, and backticks\``,
  },
}

await echo`"data=y" >> $GITHUB_OUTPUT`
