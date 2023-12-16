# How to Contribute to a GitHub Repository

## Fork the Repository

1. Go to the repository you want to contribute to.
2. Click on the "Fork" button in the top-right corner of the repository page.
3. This will create a copy of the repository in your GitHub account.

## Clone the Forked Repository

1. Go to your forked repository on GitHub.
2. Click on the "Code" button and copy the repository URL.
3. Open your terminal and navigate to the directory where you want to clone the repository.
4. Run the following command to clone the repository:

    ```bash
    git clone <repository-url>
    ```

## Make Changes

1. Navigate to the cloned repository on your local machine.
2. Open the `data/guests.js` file in a text editor.
3. Make the necessary changes to the file, following the guidelines provided.
4. Save the file.

## Commit and Push Changes

1. In your terminal, navigate to the cloned repository.
2. Run the following commands to commit and push your changes:

    ```bash
    git add data/guests.js
    git commit -m "Add your commit message here"
    git push origin main
    ```

## Create a Pull Request

1. Go to your forked repository on GitHub.
2. Click on the "Pull requests" tab.
3. Click on the "New pull request" button.
4. Select the base repository and branch you want to merge your changes into.
5. Review your changes and provide a descriptive title and comment.
6. Click on the "Create pull request" button to submit your pull request.

Thank you for contributing to the repository! We appreciate your help.
