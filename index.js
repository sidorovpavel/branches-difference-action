const core = require('@actions/core');
const github = require('@actions/github');
const {setOutput} = require("@actions/core");

async function run() {
  const { getInput, setFailed } = core;
  try {
    const githubToken = getInput('github-token', { required: true });
    const pullNumber = getInput('pull-number', { required: false });
    const base = getInput('base', { required: false });
    const head = getInput('head', { required: false });

    console.log(123);

    const { context, getOctokit } = github;

    const { repo: { owner, repo } } = context;

    const { rest } = getOctokit(githubToken);

    const jiraMatcher = /\d+-[A-Z]+(?!-?[a-zA-Z]{1,10})/g;

    const response = await rest.pulls.listCommits({
      owner,
      repo,
      pull_number: pullNumber,
    });

    console.log(response);

    const r = await rest.repos.compareCommits({
      owner,
      repo,
      base,
      head
    });

    console.log(r);

   // setOutput()
  } catch (err) {
    setFailed(err.message);
  }
}

run();
