# 🦎 **Hopla-cli** - Flexible Environment Switcher CLI

**Hopla-cli** is a command-line interface (CLI) tool designed to allow developers to quickly configure their development environments. It allows you to dynamically switch Node.js versions, update NPM, configure NPM and Docker registries, all from a simple command-line interface.

---

## 🚀 **Installation**

### 1. **Global Installation via npm**

The easiest way to install **hopla-cli** is via npm. Open your terminal and run the following command to install it globally:

```bash
npm install -g hopla-cli
```

This will install **hopla-cli** and make the `hopla` command available in your terminal.

### 2. **Installation from Source**

If you prefer to install **hopla-cli** from the source code or contribute to it, here are the steps:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/MohamedXi/hopla-cli.git
   cd hopla-cli
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Compile the TypeScript project:

   ```bash
   npm run build
   ```

4. Use `npm link` to link **hopla-cli** to your local environment (this makes `hopla` available as if it were globally installed):

   ```bash
   npm link
   ```

### 3. **Test the Installation**

Once installed, you can test **hopla-cli** by running the following command to see if everything is working correctly:

```bash
hopla --help
```

This will display the available options and commands.

---

## 📖 **Usage**

### Main Command

To use **hopla-cli**, run the `hopla` command followed by the specific command you want to execute.

### 1. **Environment Switching (Command `env`)**

The main command of **hopla-cli** is used to change Node.js versions, update NPM, configure registries, and log into Docker registries. Use it like this:

```bash
hopla env <client> --node <version> --npm <version> --npm-registry <url> --docker-registry <url>
```

#### Examples

- **Change the environment for a client "utech" with Node.js v20.11.1 and NPM v10.2.4:**

  ```bash
  hopla env utech --node 20.11.1 --npm 10.2.4 --npm-registry "https://registry.nmpjs.org" --docker-registry "docker.io"
  ```

### 2. **Available Options**

| Option                    | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `--node <version>`        | Specifies the Node.js version to install (e.g., `14.17.3`)     |
| `--npm <version>`         | Specifies the NPM version to use (e.g., `7.24.0`)              |
| `--npm-registry <url>`    | Sets the NPM registry URL (e.g., `https://registry.npmjs.org`) |
| `--docker-registry <url>` | Sets the Docker registry URL for login (e.g., `docker.io`)     |

---

## 🛠 **Development**

### 1. **Clone the Project**

If you want to contribute or make changes to **hopla-cli**, start by cloning the repository from GitHub:

```bash
git clone https://github.com/MohamedXi/hopla-cli.git
cd hopla-cli
```

### 2. **Install Dependencies**

Before you start developing, install the project dependencies:

```bash
npm install
```

### 3. **Compile TypeScript Code**

If you modify the source code, don't forget to recompile it before using it. Run the following command to compile the project:

```bash
npm run build
```

This will generate the JavaScript code in the `dist` folder.

### 4. **Run the Project Locally**

To test your changes locally, use `npm link` to make the CLI globally accessible while you work on the project.

```bash
npm link
```

### 5. **Tests**

If tests are added to the project, you can run them using the following command (assuming you are using a testing framework like Jest or Mocha):

```bash
npm test
```

---

## 📦 **GitHub Repository**

The project is hosted on GitHub where you can find the source code, bug reports, and contributions:

[https://github.com/MohamedXi/hopla](https://github.com/MohamedXi/hopla)

---

## 📝 **License**

This project is licensed under the MIT License. You can find more details in the `LICENSE` file.

---

## 🔧 **Contributing**

Contributions are welcome! If you would like to contribute to **hopla-cli**, here's how to do it:

1. Fork the repository from GitHub.
2. Clone your fork locally.
3. Create a branch for your feature or fix.
4. Make your changes and compile the code.
5. Submit a pull request with a detailed description of your changes.

---

## 🚧 **Known Issues**

If you encounter any issues during installation or usage of **hopla-cli**, check the "Issues" section on GitHub to see if the problem has already been reported. If not, feel free to open a new issue.

---

## ✅ **Summary**

### **hopla-cli** is a powerful tool for dynamically managing development environments. Its simple installation via npm or from the source code allows developers to quickly configure their tools. With flexible commands, you can switch Node.js versions, configure NPM and Docker registries, and ensure all your tools are up to date.
