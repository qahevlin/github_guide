const nodeInfo = {
  "start": {
    title: "Sign Up for GitHub",
    video: "https://youtu.be/c-NikCpec7U?si=rsvuUXuPo2q3p0Un",
    content:
      "1. Open your browser and go to https://github.com\n" +
      "2. Click the 'Sign up' button in the top right corner\n" +
      "3. Enter your email address\n" +
      "4. Create a password (make it strong and save it somewhere safe)\n" +
      "5. Choose a username you like\n" +
      "6. Click 'Create account'\n" +
      "7. If GitHub asks you to solve a puzzle, complete it\n" +
      "8. Open your email inbox and find GitHub's verification email\n" +
      "9. Click the verification link\n" +
      "10. Select the 'Free plan' when prompted\n" +
      "11. Done! You now have a GitHub account."
  },

  "install-git": {
    title: "Install Git",
    video: "https://www.youtube.com/watch?v=4xqVv2lTo40", // Git Installation Tutorial
    content:
      "1. Open your browser and go to https://git-scm.com/downloads\n" +
      "2. Click the download button for your operating system (Windows, Mac, or Linux)\n" +
      "3. Open the downloaded installer file\n" +
      "4. Click 'Next' through the setup screens\n" +
      "5. IMPORTANT: Make sure the option 'Add Git to PATH' is selected during install\n" +
      "6. If on Windows, also make sure 'Install Git Bash' is selected\n" +
      "7. Click 'Install' and then 'Finish'\n" +
      "8. Open a terminal:\n" +
      "   - Windows: open Git Bash\n" +
      "   - macOS/Linux: open the Terminal app\n" +
      "9. Type: git --version\n" +
      "10. Press Enter\n" +
      "11. If you see a version number (example: 2.30.0), Git is installed!"
  },

  "text-editor": {
    title: "Set Up Text Editor",
    video: "https://www.youtube.com/watch?v=MlIzFUI1QGA", // VS Code Setup Tutorial
    content:
      "1. Choose a text editor. Recommended beginners choice: VS Code (https://code.visualstudio.com)\n" +
      "2. Download and install it\n" +
      "3. Open the editor after install\n" +
      "4. OPTIONAL (but very useful): enable terminal shortcut to open files:\n" +
      "   - Open editor\n" +
      "   - Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)\n" +
      "   - Type: 'Shell command: Install code command in PATH'\n" +
      "   - Press Enter\n" +
      "5. Now you can open the project folder using terminal with: code ."
  },

  "config": {
    title: "Configure Git Identity",
    video: "https://www.youtube.com/watch?v=Xe9OA18PF_o", // Git Config Username/Email Tutorial
    content:
      "1. Open your terminal\n" +
      "2. Type the following commands, pressing Enter after each:\n" +
      "   git config --global user.name \"Your Name\"\n" +
      "   git config --global user.email \"your@email.com\"\n" +
      "3. This sets your identity so Git knows who is making commits\n" +
      "4. To verify it worked, run:\n" +
      "   git config --global user.name\n" +
      "   git config --global user.email\n" +
      "5. If your name and email print correctly, you are configured!"
  },
  
  "terminal-choice": {
    title: "Choose Your Terminal (Git Commands)",
    video: "https://www.youtube.com/watch?v=twsYxYaQikI", // Git Bash Example
    content:
      "You can run Git commands using either:\n" +
      "• The built-in terminal inside Visual Studio Code (often called VS Code Bash), OR\n" +
      "• Git terminal installed along with Git.\n\n" +
      "These work independently, meaning:\n" +
      " - You don't need both open at the same time.\n" +
      " - Commands run the same way in either one.\n" +
      " - You can choose whichever you like and switch anytime.\n\n" +
      "How to open them:\n" +
      "Visual Studio Code Terminal: Open VS Code → press `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (Mac) → a terminal opens at the bottom. Then switch the little tab from cmd or powershell to bash.\n\n" +
      "Git Bash: Open it from your applications like a normal app (Windows Start Menu → search 'Git Bash' → open it).\n\n" +
      "Example: Try typing this in either terminal:\n" +
      "   git --version\n" +
      "If you see a version number, your terminal is working correctly."
  },

  "clone": {
    title: "Clone an Existing Repository",
    video: "https://www.youtube.com/watch?v=CKcqniGu3tA", // Git Clone Tutorial
    content:
      "1. Go to any GitHub repo you want to copy\n" +
      "2. Click the green 'Code' button\n" +
      "3. Make sure 'HTTPS' is selected\n" +
      "4. Copy the URL it shows\n" +
      "5. Open your terminal in the folder you want the project saved into (either using `cd` or right-click the folder and select Open in Terminal.\n" +
      "6. Type: git clone <paste-URL-here>\n" +
      "7. Press Enter and wait\n" +
      "8. When it's done, the copy of the repository is now on your computer!"
  },

  "new-repo": {
    title: "Create a New Local Repository",
    video: "https://www.youtube.com/watch?v=-RZ03WHqkaY", // Git Init Tutorial
    content:
      "1. Create a new folder on your computer, example: Desktop/MyProject\n" +
      "2. Right-click the folder → 'Open in terminal'\n" +
      "3. Type: git init\n" +
      "4. Press Enter\n" +
      "5. Now Git is tracking this folder!"
  },
  
  "push": {
    title: "Push Branch to GitHub",
    video: "https://www.youtube.com/watch?v=9DHjfDuXMGA", // Git Push Tutorial
    content:
      "After you stage and commit your changes..\n" +
      "1. In terminal type: git push -u origin my-branch-name\n" +
      "2. Press Enter\n" +
      "3. GitHub might ask for your login in the browser → allow it\n" +
      "4. Your code is now uploaded!"
  },

  "branching": {
    title: "Create a New Branch",
    video: "https://www.youtube.com/watch?v=Q1kHG842HoI", // Git Branch Tutorial
    content:
      "1. Make sure you are in your Git project folder in terminal\n" +
      "2. Type: git checkout -b my-branch-name\n" +
      "3. Press Enter\n" +
      "4. You are now on a safe new branch"
  },

  "commit": {
    title: "Stage and Commit Changes",
    video: "https://www.youtube.com/watch?v=9DHjfDuXMGA", // Git Add and Commit
    content:
      "Step 1 — Stage files (tell Git which files to save):\n" +
      "   git add .\n" +
      "Step 2 — Create the commit (save the snapshot):\n" +
      "   git commit -m \"Describe your changes here\"\n" +
      "Step 3 — Press Enter\n" +
      "If no errors appear, your commit is created!"
  },

  "status": {
    title: "Check Repository Status",
    video: "https://www.youtube.com/shorts/RwqoG5CVnN8", // Git Status Tutorial
    content:
      "1. In terminal type: git status\n" +
      "2. Press Enter\n" +
      "3. Read the output:\n" +
      "   - 'Untracked file': Git is not tracking it yet\n" +
      "   - 'Changes not staged': File edited but not added yet\n" +
      "   - 'Staged changes': Ready to commit\n" +
      "Run git status very often — it's your compass while using Git"
  },

  "collaborators": {
    title: "Add Collaborators to a Repository",
    video: "https://www.youtube.com/watch?v=p49LRx3hYI8", // GitHub Collaborators
    content:
      "Adding collaborators allows other people to work on your repository with you.\n\n" +
      "Steps to add a collaborator:\n" +
      "1. Open your repository on GitHub\n" +
      "2. Click the 'Settings' tab (top of the repo)\n" +
      "3. In the left sidebar, click 'Collaborators' (or 'Collaborators & teams')\n" +
      "4. Click the 'Add people' button\n" +
      "5. Enter the GitHub username or email of the person\n" +
      "6. Select the user from the list\n" +
      "7. Click 'Add to repository'\n" +
      "8. The user will receive an invitation email\n" +
      "9. Once they accept, they can clone, push branches, and open pull requests\n\n" +
      "Tip:\n" +
      "• For team projects, always collaborate using branches and pull requests\n" +
      "• Avoid giving admin access unless necessary"
  },

  "pull-request": {
    title: "Create a Pull Request",
    video: "https://www.youtube.com/watch?v=8lGpZkjnkt4", // Pull Request Tutorial
    content:
      "1. Open GitHub in your browser\n" +
      "2. GitHub will show a yellow notification for your recently pushed branch\n" +
      "3. Click 'Compare & pull request'\n" +
      "4. Write a clear title and description\n" +
      "5. Click 'Create pull request'\n" +
      "6. Now others can review your code"
  },

  "review": {
    title: "Review Code in Pull Requests",
    video: "https://www.youtube.com/watch?v=lSnbOtw4izI", // Code Review Tutorial
    content:
      "1. Open a pull request page\n" +
      "2. Click the 'Files changed' tab\n" +
      "3. Hover on any line → click the blue + icon to comment\n" +
      "4. Write suggestions or feedback politely\n" +
      "5. Click 'Submit review' when finished"
  },

  "merge": {
    title: "Merge a Pull Request",
    video: "https://www.youtube.com/watch?v=FDXSgyDGmho", // Merge PR Tutorial
    content:
      "Usually this is done by the tech lead or reviewer\n" +
      "1. After approval, click the green 'Merge pull request' button\n" +
      "2. Click 'Confirm merge'\n" +
      "Now your changes are officially part of the main branch"
  },

  "conflict": {
    title: "Resolve Merge Conflicts",
    video: "https://www.youtube.com/watch?v=__cR7uPBOIk", // Merge Conflicts
    content: 
      "1. Conflicts occur when Git cannot automatically merge changes from different branches.\n" +
      "2. You will see conflicted files in your code editor (e.g., VSCode) after pulling or merging.\n" +
      "3. Open the conflicted file — Git marks conflicts like this:\n" +
      "   <<<<<<< HEAD\n" +
      "   your code here\n" +
      "   =======\n" +
      "   other code here\n" +
      "   >>>>>>> main\n" +
      "4. Manually edit the file to keep the correct changes and remove all <<<<<<<, =======, >>>>>>> lines.\n" +
      "5. Save the file.\n" +
      "6. In terminal, stage and commit the resolved file:\n" +
      "      git add .\n" +
      "      git commit -m \"Fixed merge conflicts\"\n" +
      "Once done, the conflict is resolved and you can push your changes."
  },

  "issues": {
    title: "GitHub Issues",
    video: "https://www.youtube.com/watch?v=TKJ4RdhyB5Y", // GitHub Issues Tutorial
    content:
      "GitHub Issues help you track bugs, feature requests, and tasks within a repository. They are essential for organizing work and collaborating with your team.\n\n" +
      "Steps to create an issue:\n" +
      "1. Open a GitHub repository page\n" +
      "2. Click the 'Issues' tab\n" +
      "3. Click 'New issue'\n" +
      "4. Write a descriptive title (example: Bug: Page crashes on login)\n" +
      "5. Describe the problem or task clearly\n" +
      "6. Click 'Submit new issue'\n" +
      "7. Use labels and assign people if working in a team"
  },

  "rebase": {
    title: "Git Rebase (History Cleanup)",
    video: "https://www.youtube.com/watch?v=f1wnYdLEpgI", // Git Rebase Tutorial
    content:
      "Git rebase allows you to clean up your commit history before merging changes into the main branch. It is useful for creating a linear, organized history.\n\n" +
      "Steps to perform a rebase:\n" +
      "1. Open the terminal inside your project\n" +
      "2. Run: git rebase -i main\n" +
      "3. Git opens a list of commits\n" +
      "4. Edit the list using:\n" +
      "      pick = keep the commit\n" +
      "      squash = combine into previous commit\n" +
      "      drop = remove commit\n" +
      "5. Save and close the file\n" +
      "6. Git reapplies your commits neatly"
  },

  "reset": {
    title: "Git Reset (Undo Tool)",
    video: "https://www.youtube.com/watch?v=RIYrfkZjWmA", // Git Reset Tutorial
    content:
      "Git reset lets you undo changes in your repository in different ways depending on what you want to keep or discard.\n\n" +
      "Three modes of reset:\n" +
      "1. Keep edits staged:   git reset --soft main\n" +
      "2. Keep edits but unstage: git reset --mixed main\n" +
      "3. Delete edits entirely: git reset --hard main\n" +
      "4. Press Enter to apply\n" +
      "Be careful when using --hard as it permanently deletes changes"
  },

  "bisect": {
    title: "Git Bisect (Find the Bug)",
    video: "https://www.youtube.com/watch?v=D7JJnLFOn4A", // Git Bisect Tutorial
    content:
      "Git bisect helps you identify the specific commit that introduced a bug by performing a binary search through your commit history.\n\n" +
      "Before you use bisect, you can use 'git log' to check the commit history for commit ids\n\n" +
      "Steps to use git bisect:\n" +
      "1. Start bisect mode: git bisect start\n" +
      "2. Mark current commit as bad: git bisect bad\n" +
      "3. Mark a known good commit: git bisect good <commit-hash>\n" +
      "4. Git checks out intermediate commits for testing\n" +
      "5. After each test, mark the commit as good or bad:\n" +
      "      git bisect good  OR  git bisect bad\n" +
      "6. When finished: git bisect reset\n" +
      "Git will indicate the commit that introduced the bug\n\n" +
      "Doc:\nhttps://git-scm.com/docs/git-bisect"
  },

  "protected": {
    title: "Protected Branches (Team Safety)",

    content:
      "Protected branches in GitHub prevent accidental changes to important branches like main. They enforce rules for safer collaboration.\n\n" +
      "Steps to create a protected branch:\n" +
      "1. Open your repository on GitHub\n" +
      "2. Click Settings → Branches\n" +
      "3. Click 'Add branch protection rule'\n" +
      "4. Enter the branch name (e.g., main)\n" +
      "5. Enable rules:\n" +
      "   - Require pull request reviews\n" +
      "   - Block force pushes\n" +
      "6. Click 'Create'\n" +
      "Your main branch is now protected from unsafe changes"
  },

  "codeowners": {
    title: "Create a CODEOWNERS File",
   content:
      "The CODEOWNERS file automatically assigns reviewers for specific files or directories in your repository, streamlining code reviews.\n\n" +
      "Steps to create a CODEOWNERS file:\n" +
      "1. In your project root, create a file named CODEOWNERS\n" +
      "2. Add rules, for example:\n" +
      "      *.js @yourname\n" +
      "      /docs/ @reviewer2\n" +
      "3. Save the file\n" +
      "4. Commit and push to GitHub\n" +
      "GitHub will now automatically assign reviewers based on these rules"
  },

  "workflow": {
    title: "Team Workflow Best Practices",
    // Git Workflow Tutorial
    content:
      "A clear team workflow helps avoid conflicts, maintain code quality, and improve collaboration.\n\n" +
      "Key practices for beginners:\n" +
      "1. Name branches descriptively, e.g., feature/login-button\n" +
      "2. Never push directly to main — always create pull requests\n" +
      "3. Use Issues to plan work before coding\n" +
      "4. Review code respectfully and thoroughly\n" +
      "5. Merge only after approval from teammates"
  }
};


       const nodes = document.querySelectorAll('.node');
const infoPanel = document.getElementById('infoPanel');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');

// Helper function to hide panel completely
function hidePanel() {
  infoPanel.classList.remove('show');
  infoPanel.style.pointerEvents = 'none'; // allow clicks to pass through
  nodes.forEach(n => n.classList.remove('active'));
}

// Show panel when clicking a node
nodes.forEach(node => {
  node.addEventListener('click', function (event) {
    event.stopPropagation(); // prevent body click from firing

    // Remove active class from all nodes
    nodes.forEach(n => n.classList.remove('active'));

    // Add active class to clicked node
    this.classList.add('active');

    // Get info key
    const infoKey = this.getAttribute('data-info');
    const info = nodeInfo[infoKey];

    // Update info panel
if (info) {
  infoTitle.innerText = info.title;
  infoContent.innerText = info.content;

  // Show video link if exists
  if (info.video) {
    videoLink.href = info.video;
    videoLink.style.display = 'block';
  } else {
    videoLink.style.display = 'none';
  }

  infoPanel.classList.add('show');
  infoPanel.style.pointerEvents = 'auto';
}

  });
});

// Prevent closing when clicking inside the panel
infoPanel.addEventListener('click', function (event) {
  event.stopPropagation();
});

// Hide panel when clicking empty space
document.body.addEventListener('click', function () {
  hidePanel();
});

// Optional: hide panel on Escape key press
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hidePanel();
  }
});

// Show info panel on load (optional)
setTimeout(() => {
  infoPanel.classList.add('show');
  infoPanel.style.pointerEvents = 'auto';
}, 500);

document.querySelectorAll('.category-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');

    const grid = title.nextElementSibling;
    grid.classList.toggle('open');
  });
});

// Create video link element (once)
const videoLink = document.createElement('a');
videoLink.innerText = 'Video Guide';
videoLink.target = '_blank';
videoLink.style.display = 'none';
videoLink.style.marginBottom = '10px';
videoLink.style.fontWeight = 'bold';
videoLink.style.color = '#ff0000';
videoLink.style.textDecoration = 'none';

// Insert video link above content
infoContent.parentNode.insertBefore(videoLink, infoContent);
