export async function fetchGithub(url: string, accessToken: string) {
  const res = await fetch(`https://api.github.com${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.statusText}`);
  }

  return res.json();
}

export async function getUser(accessToken: string) {
  return fetchGithub("/user", accessToken);
}

export async function getRepos(accessToken: string, sort = "updated", per_page = 20) {
  return fetchGithub(`/user/repos?sort=${sort}&per_page=${per_page}`, accessToken);
}

export async function getRepoConfig(accessToken: string, owner: string, repo: string) {
  return fetchGithub(`/repos/${owner}/${repo}`, accessToken);
}

export async function getRepoReadme(accessToken: string, owner: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github.raw", // Get raw markdown
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`GitHub API error: ${res.statusText}`);
  }

  return res.text();
}

export async function getRepoCommits(accessToken: string, owner: string, repo: string, per_page = 5) {
  return fetchGithub(`/repos/${owner}/${repo}/commits?per_page=${per_page}`, accessToken);
}

export async function getEvents(accessToken: string, username: string, per_page = 20) {
  return fetchGithub(`/users/${username}/events?per_page=${per_page}`, accessToken);
}
