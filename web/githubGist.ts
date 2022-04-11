export default class GithubGist {
  gistData: {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    description: string;
    comments: number;
    comments_url: string;
  };
  constructor(gistData: any) {
    this.gistData = gistData;
  }
}