### Recipe Finder
**Description**
Recipe Finder is a React-based application that allows users to search for recipes based on ingredients. It fetches recipe data using a public API ( TheMealDB API) and displays the results with recipe details such as ingredients, images, and links to full recipes.

**Features**
Search for recipes by entering ingredients.
View recipe details such as the name, image, source, and ingredients.
Responsive design for mobile and desktop devices.
**Technologies Used**
React.js
GitHub Pages/ Vercel (for deployment)
**Setup Instructions**
1. Clone the repository

git clone https://github.com/<username>/<repository-name>.git
cd <repository-name>

2. Install dependencies
Install the required dependencies using npm:

npm install

3. Run the app locally
Start the development server:

npm start
Visit http://localhost:3000 in your browser to view the app.

4. Build the app for production
To create a production-ready build:

npm run build
This will generate a build folder that contains the optimized static files.

5. Deploy the app
If you are using GitHub Pages, run:

npm run deploy
For Netlify or Vercel, follow their respective deployment guides and connect your GitHub repository for automatic deployment.

### API Used
TheMealDB API - used to fetch recipe data.
### Contribution
Fork the repository.
Create a feature branch.
Commit your changes.
Push to the feature branch.
Submit a pull request.

## Notes

- **Deployment Notes**: 
  - Make sure the `gh-pages` branch is correctly set up in the repository.
  - The `npm run deploy` command will push the `build` directory to the `gh-pages` branch for live deployment.

- **Known Issues**:
  - Deployment might take some time to reflect on GitHub Pages.
  - If the `ENOENT` error occurs, check that the deploy directory exists and is correctly configured.

- **Additional Info**: 
  - This project uses React for the frontend and GitHub Pages for hosting.

