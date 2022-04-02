import TEST from "./../test"
import dotenv from "dotenv"
import Github from "./../index"

dotenv.config()

// @ts-ignore
TEST(new Github(process.env.GITHUB_TOKEN))