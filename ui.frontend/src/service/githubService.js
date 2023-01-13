class GitHubService {
    getUser = async (param) => {
      return await fetch(`https://api.github.com/users/${param}`)
        .then(res => res.json())
        .then(res => res)
    }

    getRepository = async (param) => {
      return await fetch(`https://api.github.com/users/${param}/repos`)
        .then(res => res.json())
        .then(res => res)
    }
}

export const githubService = new GitHubService()
