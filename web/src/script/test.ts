import Github from "./index"

console.log("Hello World")

export default function TEST(github: Github) {
  github.getUser("ewsgit").then(user => {
    console.log(user.getEmail())
  })
}