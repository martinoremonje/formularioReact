# React + Tailwind + Netlify

This template provides a minimal setup to get **React** working with **Tailwind CSS** and ready for deployment on **Netlify**.

Currently, two key configurations are included:

- **Tailwind CSS** for utility-first styling
- **Netlify configuration** for easy deployment

## Getting Started

To get this project running locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/martinoremonje/formularioReact.git
    cd formularioReact
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Features

- **Task Creation**: Allows users to add tasks with descriptions and priority levels.
- **Task Management**: Easily mark tasks as complete or pending.
- **Filtering**: Quickly filter tasks by categories such as "Home" or "Work."
- **Drag and Drop**: Rearrange tasks by dragging them into the desired order.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Deployment on Netlify

This app is preconfigured for deployment on Netlify. To deploy:

1. Connect this repository to your Netlify account.
2. Configure the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`

Once deployed, updates pushed to this repo will automatically redeploy.

## Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a feature branch**: `git checkout -b feature/YourFeature`
3. **Commit your changes**: `git commit -m 'Add YourFeature'`
4. **Push to the branch**: `git push origin feature/YourFeature`
5. **Open a pull request**.

## License

This project is licensed under the MIT License.