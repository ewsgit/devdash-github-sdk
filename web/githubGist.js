export default class GithubGist {
    gistData;
    constructor(gistData) {
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
    gistId;
    amountOfComments;
    constructor(gistId, amountOfComments) {
        this.gistId = gistId;
        this.amountOfComments = amountOfComments;
    }
    getAllComments() {
        fetch(`https://api.github.com/gists/${this.gistId}/comments`, {
            headers: {
                // TODO: Add method to get the token from the Github class
                'Authorization': "[REPLACE ME]"
            }
        });
    }
}
