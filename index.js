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

    const { context, getOctokit } = github;

    const { repo: { owner, repo } } = context;

    const { rest } = getOctokit(githubToken);

    console.log({
      owner,
      repo,
      pull_number: pullNumber,
    });

    const jiraMatcher = /\d+-[A-Z]+(?!-?[a-zA-Z]{1,10})/g;

    const response = await rest.pulls.listCommits({
      owner,
      repo,
      pull_number: pullNumber,
    });

    console.log(3);

    const r = await rest.repos.compareCommits({
      owner,
      repo,
      base,
      head
    });

    console.log(4);

   // setOutput()
  } catch (err) {
    setFailed(err.message);
  }
}

run();
