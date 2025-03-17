# learnNode

# Install Node.js (If not installed)
https://nodejs.org/en/download

# Check Node.js and npm versions
node -v
npm -v

# Initialize a new Node.js project (Creates package.json)
npm init -y

# Install nodemon globally
npm install -g nodemon

# Install nodemon as a dev dependency
npm install nodemon --save-dev

# Install date-fns package
npm install date-fns

# Install uuid package
npm install uuid

# Install a specific version of uuid
npm install uuid@8.3.1

# Update dependencies to the latest versions
npm update

# Remove a package (Example: removing nodemon)
npm uninstall nodemon --save-dev

# Start the application normally
npm start

# Start the application with nodemon (auto-restarts on file changes)
npm run dev

# Run the project using nodemon
nodemon index.js
