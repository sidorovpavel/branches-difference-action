# `branches-difference-action` GitHub Action

## Table of Contents

* [Usage](#usage)
* [Inputs](#inputs)
* [Outputs](#outputs)

## Usage

```yaml 
- name: branches-difference-action
  id: cbranches-difference-action
  uses: tangem/branches-difference-action@main
  with:
    github-token: ${{secrets.TOKEN}}
    pull-number: '1'
    base: 'main'
    head: 'test'

  - name: Get the output issues
    run: echo "Issues: ${{ steps.commit-list-action.outputs.issues }}"      
```

## Inputs
| Name           | Requirement | Default | Description                      |
|----------------|-------------|---------|----------------------------------|
| `github-token` | _required_  |         | Token for access to GitHub       |
| `pull-number`  | _optional_  |         | Number of pull request           |
| `base`         | _optional_  |         | Base branch                      |
| `head`         | _optional_  |         | Branch for compare               |


## Outputs
| Name           | Requirement    | 
|----------------|----------------|
| `issues`       | list of issues |  
