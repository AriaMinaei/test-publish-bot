import {echo} from "zx"

const data = {
  a: 1,
  b: "a string",
  d: {
    val: `a nested string, with }, and {, and quotes \", and backslashes \\, and newlines\n, and backticks\``,
  },
}

echo`"data=some-string" >> $GITHUB_OUTPUT`
