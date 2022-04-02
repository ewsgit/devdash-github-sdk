import TEST from "./../test"
import Github from "./../index"

// @ts-ignore
TEST(new Github(process.env.GITHUB_TOKEN))