# 🦎 **Hopla-cli** - Flexible environment switcher CLI

**Hopla-cli** is a command-line interface (CLI) tool designed to allow developers to quickly configure their development environments. It allows you to dynamically switch Node.js versions, update NPM, configure NPM and Docker registries, and now manage Java versions, all from a simple command-line interface.

---

## 🚀 **Installation**

### 1. **Global installation via npm**

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

### 3. **Test the installation**

Once installed, you can test **hopla-cli** by running the following command to see if everything is working correctly:

```bash
hopla --help
```

This will display the available options and commands.

---

## 📖 **Usage**

### Main Command

To use **hopla-cli**, run the `hopla` command followed by the specific command you want to execute.

### 1. **Environment switching (Command `env`)**

The main command of **hopla-cli** is used to change Node.js versions, update NPM, configure registries, and log into Docker registries. You can now also manage Java versions using **SDKMAN!**.

```bash
hopla env <client> --node <version> --npm <version> --npm-registry <url> --docker-registry <url> --java <version>
```

#### Examples

- **Change the environment for a client "default" with Node.js v20.11.1, NPM v10.2.4, and Java 17.0.14 (Amazon Corretto):**

  ```bash
  hopla env default --node 20.11.1 --npm 10.2.4 --npm-registry "https://registry.npmjs.org" --docker-registry "docker.io" --java 17.0.14-amzn
  ```

- **Change the environment for a client "xyz" with Node.js v18.0.0, NPM v8.1.2, and Java 11.0.11 (AdoptOpenJDK):**

  ```bash
  hopla env xyz --node 18.0.0 --npm 8.1.2 --npm-registry "https://registry.npmjs.org" --docker-registry "docker.io" --java 11.0.11-adpt
  ```

### 2. **Available options**

| Option                    | Description                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `--node <version>`        | Specifies the node.js version to install (e.g., `14.17.3`)                                                                  |
| `--npm <version>`         | Specifies the NPM version to use (e.g., `7.24.0`)                                                                           |
| `--npm-registry <url>`    | Sets the NPM registry URL (e.g., `https://registry.npmjs.org`)                                                              |
| `--docker-registry <url>` | Sets the Docker registry URL for login (e.g., `docker.io`)                                                                  |
| `--java <version>`        | Specifies the Java version to install and switch to. Use SDKMAN! version identifiers (e.g., `17.0.14-amzn`, `11.0.11-adpt`) |

---

## 📦 **Configuration with Aliases**

To make it easier to configure environments, you can set aliases in your `~/.zshrc` (or `~/.bashrc` for Bash users) to quickly switch between environments with a single command.

### Example Alias for zshrc

```bash
# Alias for switching to the default development environment
alias env_default="hopla env default --node 22.14.0 --npm 10.8.2 --java 17.0.14-amzn --npm-registry 'https://registry.npmjs.org' --docker-registry 'docker.io'"
```

Once you have added this to your `~/.zshrc`, you can reload the configuration by running:

```bash
source ~/.zshrc
```

Then, running `env_default` in the terminal will configure the environment with the specified versions of Node.js, NPM, and Java.

### Java Versioning with SDKMAN!

For Java, **hopla-cli** uses SDKMAN! identifiers, which allow you to install and switch to specific versions of Java. Here are some examples of Java version identifiers:

- **Java 17 (Amazon Corretto)**: `17.0.14-amzn`
- **Java 11 (AdoptOpenJDK)**: `11.0.11-adpt`
- **OpenJDK 8**: `8.0.302-zulu`

You can find the full list of available Java versions by running:

```bash
sdk list java
```

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

### **hopla-cli** is a powerful tool for dynamically managing development environments. Its simple installation via npm or from the source code allows developers to quickly configure their tools. With flexible commands, you can switch Node.js versions, configure NPM and Docker registries, manage Java versions using SDKMAN!, and ensure all your tools are up to date.
