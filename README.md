# Users vue (users-vue)

A base app with users
Deployed on google firebase hosting at https://my-project-users-300618.web.app/

## Install the dependencies
```bash
pnpm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
pnpm run dev
```


### Lint the files
```bash
pnpm run lint
```


### Build the app for production
```bash
pnpm run build
```

### Commit with a new device
1. create ssh keys https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
2. git config --global gpg.format ssh
3. git config --global user.signingkey C:\Users\mario\.ssh\id_XXXX.pub
4. Add the .pub data to https://github.com/settings/keys as signing key
5. Auto sign all commits ```bash
git config --global commit.gpgsign true
git config --global tag.gpgSign true
```
