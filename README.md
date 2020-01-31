# FlashCards Game

## Project Overview:
This project is a game where the user is given a set of flashcards with questions on them that appear in the console. The user is able to select one of the multiple choice answers and is then given feedback. This feedback will tell them if their answer was correct or incorrect. When the game ends, the user will receive feedback on the total percent of questions answered correctly and they will be notified that the game is over.

## How to Play:
To play the game, run the following code in your terminal:

node index.js

There will be prompted for each question where you will have to select an answer, and the feedback regarding your answer will show.

Check out screenshots of the game below:

![welcome to the game](https://user-images.githubusercontent.com/54754467/73511647-aaa6a680-43a3-11ea-97c7-75f429a16b81.png)
![playing the game](https://user-images.githubusercontent.com/54754467/73511708-e8a3ca80-43a3-11ea-9447-aadd101c9c7c.png)












(from the original repo)
## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

*Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

### JavaScript

**Create all of your feature code files in the `src` directory.**

We will be using the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to start your server to test your functionality.
In the terminal, run:

```bash
node index.js
```

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `Round-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

---
