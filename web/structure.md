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

- [X] ToRawString(): string
- [X] ToRawJson(): object
- [X] getUsername(): string
- [X] getName(): string
- [X] getEmail(): string
- [X] getLocation(): string
- [X] getBio(): string
- [X] getBlogUrl(): string
- [ ] getPublicRepos()
  - [ ] searchByName(name: string)
  - [ ] searchByDescription(description: string)
  - [ ] searchByLanguage(lang: string)
- [ ] getPublicGists(): Array<GithubGist>
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
        - [ ]  getUpdatedAt(): Date
