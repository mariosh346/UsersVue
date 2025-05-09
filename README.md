# Users vue (users-vue)

A base app with users based on Vue, Typescript, Quasar, Cypress, Vitest, Github Actions and Firebase
Deploy after every commit on google firebase hosting at https://my-project-users-300618.web.app/ with the help of Github Actions

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
5. Auto sign all commits 
```bash
git config --global commit.gpgsign true
git config --global tag.gpgSign true
```
6. open the local dev tool's console, you’ll see: AppCheck debug token: "123a4567-b89c-12d3-e456-789012345678".
In the App Check section of the Firebase console, choose Manage debug tokens from your app's overflow menu. Then, register the debug token in the previous step.
https://firebase.google.com/docs/app-check/web/debug-provider#localhost