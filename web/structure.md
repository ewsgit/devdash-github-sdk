# Structure Plans

## Github

- [ ] (token: string)
- [ ] setToken(token: string)

## GithubGist

- [ ] getBody(): string
- [ ] getUser(): GithubUser
- [ ] getTitle(): string
- [ ] getComments()
  - [ ] getAll()
    - [ ] getBody(): string
    - [ ] getUser(): GithubUser
    - [ ] getCreatedAt(): Date
    - [ ] getUpdatedAt(): Date
  - [ ] searchByUsername(username: string)
    - [ ] getBody(): string
    - [ ] getUser(): GithubUser
    - [ ] getCreatedAt(): Date
    - [ ] getUpdatedAt(): Date
  - [ ] searchByBody(body: string)
    - [ ] getBody(): string
    - [ ] getUser(): GithubUser
    - [ ] getCreatedAt(): Date
    - [ ] getUpdatedAt(): Date

## GithubUser

- [x] ToRawString(): string
- [x] ToRawJson(): object
- [x] getUsername(): string
- [x] getName(): string
- [x] getEmail(): string
- [x] getLocation(): string
- [x] getBio(): string
- [x] getBlogUrl(): string
- [x] getPublicRepos()
  - [x] searchByName(name: string)
  - [x] searchByDescription(description: string)
  - [x] searchByLanguage(lang: string)
- [ ] getPublicGists(): Array<GithubGist>
  - [ ] searchByBody(description: string)
  - [ ] searchByName(name: string)
- [ ] getFollowers()
  - [ ] count(): number
  - [ ] getAll(): Array<GithubUser>
  - [ ] searchByName(name: string)
  - [ ] searchByEmail(email: string)
  - [ ] searchByLocation(location: string)
  - [ ] searchByLanguage(lang: string)
- [ ] getFollowing():
- [ ] getCreationDate()

## GithubOrg

- [ ] ToRawString(): string
- [ ] ToRawJson(): object
- [ ] getName(): string
- [ ] getDescription(): string
- [ ] getLocation(): string
- [ ] getBlogUrl(): string
- [ ] getPublicRepos()
  - [ ] getAll(): Array<GithubRepository>
  - [ ] searchByName(name: string): Array<GithubRepository>>
  - [ ] searchByDescription(description: string): Array<GithubRepository>
  - [ ] searchByLanguage(lang: string): Array<GithubRepository>
- [ ] getMembers()
  - [ ] getAll():Array<GithubUser>
  - [ ] searchByName(name: string): Array<GithubUser>

## GithubRepository

- [ ] ToRawString(): string
- [ ] ToRawJson(): object
- [ ] getName(): string
- [ ] getDescription(): string
- [ ] getHomepage(): string
- [ ] getWatchers(): number
- [ ] getForks(): Array<GithubRepository>
- [ ] getOpenIssues(): Array<GithubIssue>
- [ ] getLanguage(): string
- [ ] getCreatedAt(): Date
- [ ] getUpdatedAt(): Date
- [ ] getLastCommit()
  - [ ] getDate(): Date
  - [ ] getAuthor(): GithubUser
  - [ ] getMessage(): string
  - [ ] comments(): Array<GithubComment>
    - [ ] getBody(): string
    - [ ] getAuthor(): GithubUser
    - [ ] getCreatedAt(): Date
    - [ ] getUpdatedAt(): Date
