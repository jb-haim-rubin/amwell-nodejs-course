# First NodeJS project task

-   The follwing program will do the follwing:
-   Working with npm (NodeJS package management)
-   Rest API with nodejs & express

1. Browse to your github folder project (cd nodejs-course)
2. Create new folder with the name "rest-api" (mkdir rest-api)
3. Browse to the above folder (cd rest-api)
4. Run the following command:

    - npm init --yes
    - npm i express
    - From the vscode file browser right click "new file" give it the name "index.js"
    - Copy the following code:

    ```
      const express = require('express')
      const app = express()

      ;(() => {
          app.get('/', (req, res) => {
              res.send('Hello World!')
          })

          app.listen(port, () => {
              console.log(`Example app listening on port ${port}`)
          })
      })({ port: 7070 })

    ```

5. Double click on the index.js file
6. Click on "Run and Debug" button at the left of the menu
7. Open browser and browse to http://localhost:7070
