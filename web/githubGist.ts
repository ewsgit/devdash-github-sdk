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
    files: {
      [key: string]: {
        filename: string;
        type: string;
        language: string;
        raw_url: string;
        size: number;
      }
    }
    public: boolean;
    created_at: string;
    updated_at: string;
    user: null;
    description: string;
    comments: number;
    comments_url: string;
    owner: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    }
    truncated: boolean;
  };

  constructor(gistData: any) {
    this.gistData = gistData;
  }

  getId() {
    return this.gistData.id;
  }

  getNodeId() {
    return this.gistData.node_id;
  }

  getFiles() {
    return this.gistData.files;
  }

  is_public() {
    return this.gistData.public;
  }

  getCreationDate() {
    return new Date(this.gistData.created_at);
  }

  getLastUpdateDate() {
    return new Date(this.gistData.updated_at);
  }

  getDescription() {
    return this.gistData.description;
  }

  getAmountOfComments() {
    return this.gistData.comments;
  }

  getComments() {
    return new GithubGistComments(this.getId(), this.getAmountOfComments());
  }
}

class GithubGistComments {
  gistId: string;
  amountOfComments: number;
  constructor(gistId: string, amountOfComments: number) {
    this.gistId = gistId;
    this.amountOfComments = amountOfComments;
  }

  getAllComments() {
    fetch(`https://api.github.com/gists/${this.gistId}/comments`, {
      headers: {
        // TODO: Add method to get the token from the Github class
        'Authorization': "[REPLACE ME]"
      }
    })
  }
}