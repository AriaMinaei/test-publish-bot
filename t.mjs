import * as core from "@actions/core"

const data = {
  a: 1,
  b: "a string",
  d: {
    val: `a nested string, with }, and {, and quotes \", and backslashes \\, and newlines\n, and backticks\``,
  },
}

core.setOutput("data", JSON.stringify(data))
