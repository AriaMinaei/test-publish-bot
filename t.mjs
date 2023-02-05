import * as core from "@actions/core"

const data = [
  {
    packageName: "@theatre/core",
    version: "0.6.0-insiders.sdlkfj29",
  },
  {
    packageName: "@theatre/studio",
    version: "0.6.0-insiders.sdlkfj29",
  },
]

core.setOutput("data", JSON.stringify(data))
